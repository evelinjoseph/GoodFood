import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { AlertController } from '@ionic/angular';
import { of } from 'rxjs';

import { Tab4Page } from './tab4.page';
import { RouterTestingModule } from '@angular/router/testing';

describe('Tab4Page', () => {
  let component: Tab4Page;
  let fixture: ComponentFixture<Tab4Page>;

  let AngularFireAuthMock = {
    
    onAuthStateChanged() {  
       
        component.userUID = "testuid";
        component.items = afSpy.doc('users/' + component.userUID);
        component.userItems = component.items.valueChanges();
        component.retailers = Array({
          fistname: "test",
          lastname : "user",
          uid: "testuid",
          isRetailer: true
      });
        component.isReady = true;
        return of({
          uid: "testuid"
        })
    },
    currentUser: () => of({uid: "test"})
  }

  let afSpy: any;

  const FirestoreStub = {
    collection: (name: string) => ({   
      valueChanges: () => of({ foo: 'bar' }), 
      doc: (_id: string) => ({
        valueChanges: () => of({ foo: 'bar' }),
        set: (_d: any) => Promise.resolve(),
      }),
    })
  };

  beforeEach(async(() => {

    afSpy = jasmine.createSpyObj('AngularFirestore', ['collection', 
    'valueChanges', 'snapshotChanges', 'ref', 'doc','add','update', 
    'then', 'catch', 'finally', 'firestore', 'get']);
    afSpy.collection.and.returnValue(afSpy);
    afSpy.valueChanges.and.returnValue(afSpy);
    afSpy.snapshotChanges.and.returnValue(afSpy); 
    afSpy.ref.and.returnValue(afSpy); 
    afSpy.doc.and.returnValue(afSpy); 
    afSpy.add.and.returnValue(afSpy);
    afSpy.update.and.returnValue(Promise.resolve()); 
    afSpy.then.and.returnValue(Promise.resolve('hello world')); 
    afSpy.catch.and.returnValue(afSpy); 
    afSpy.finally.and.callThrough()
    afSpy.firestore.and.returnValue(afSpy); 
    afSpy.get.and.returnValue(afSpy);

    TestBed.configureTestingModule({
      declarations: [ Tab4Page ],
      imports: [IonicModule.forRoot(), RouterTestingModule],
      providers:[
        { provide: AngularFireAuth, useValue: AngularFireAuthMock},
        { provide: AngularFirestore, useValue: FirestoreStub }
    ]     
    }).compileComponents();

    fixture = TestBed.createComponent(Tab4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should populate retailerItems', () => {
    AngularFireAuthMock.onAuthStateChanged = jasmine.createSpy("onAuthStateChanged");
    component.ngOnInit();    
    expect(AngularFireAuthMock.onAuthStateChanged).toHaveBeenCalled();
    expect(component.userUID).toEqual("testuid");   
    expect(afSpy.doc).toHaveBeenCalledWith('users/' + component.userUID); 
    
  });
});
