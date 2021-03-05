import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { AlertController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import { of } from 'rxjs';

import { Retailertab2Page } from './retailertab2.page';
import { RouterTestingModule } from '@angular/router/testing';

describe('Retailertab2Page', () => {
  let component: Retailertab2Page;
  let fixture: ComponentFixture<Retailertab2Page>;

  let AngularFireAuthMock = {
    onAuthStateChanged() {     
        component.retailerUID = "testuid";
        component.items = afSpy.doc('users/' + component.retailerUID);
        component.retailerItems = component.items.valueChanges();
        component.isReady = true;
        return of({
          uid: "testuid"
        })
    },
    currentUser: () => of({uid: "test"})
  }

  let afSpy: any;

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
      declarations: [ Retailertab2Page ],
      imports: [IonicModule.forRoot(), RouterTestingModule],
      providers:[
        { provide: AngularFireAuth, useValue: AngularFireAuthMock},
        { provide: AngularFirestore, useValue: afSpy }
    ]     
    }).compileComponents();

    fixture = TestBed.createComponent(Retailertab2Page);
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
    expect(component.retailerUID).toEqual("testuid");   
    expect(afSpy.doc).toHaveBeenCalledWith('users/' + component.retailerUID); 
  });
});
