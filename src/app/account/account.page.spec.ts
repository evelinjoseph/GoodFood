import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { AccountPage } from './account.page';
import { RouterTestingModule } from '@angular/router/testing';
import { userInfo } from 'os';
import { DebugElement } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { AlertControllerMock} from 'ionic-mocks';
import { NavController } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

describe('AccountPage', () => {
  let component: AccountPage;
  let fixture: ComponentFixture<AccountPage>;
  let de: DebugElement;
  let alertCtrl: AlertController;

  // const AngularFireAuthMock = jasmine.createSpy('onAuthStateChanged')
  //     .and.returnValue(of({uid: 'W6czkGca3RXip77ZRCJSlQ58QXz1'}));

  let AngularFireAuthMock = {
    onAuthStateChanged() {     
        component.userUID = "testuid";
        return of({
          uid: "testuid"
        })
    },
    currentUser: () => of({uid: "test"})
  }
  
  

  const FirestoreStub = {
    collection: (name: string) => ({
      doc: (_id: string) => ({
        //valueChanges: () => of({ foo: 'bar' }),
        //set: (_d: any) => new Promise((resolve, _reject) => resolve()),
        get: () => {return Promise.resolve({
                    firstname: "test",
                    lastname: "user"
        })},
        update: ({firstname, lastname}) => new Promise<void>((resolve, reject) => resolve())
      }),
    }),
  };

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
      declarations: [ AccountPage ],
      imports: [
        FormsModule,
        CommonModule,
        BrowserModule,
        IonicModule.forRoot(), RouterTestingModule],
      providers:[
        { provide: AngularFireAuth, useValue: AngularFireAuthMock },
        { provide: AngularFirestore, useValue: afSpy },
        { provide: NavController, useValue: null},
        { provide: AlertController, useFactory: () => AlertControllerMock.instance() }
    ]     
    }).compileComponents();

    fixture = TestBed.createComponent(AccountPage);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    alertCtrl = AlertControllerMock.instance();
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.buttonText).toEqual("Edit");
    
  });

  
  it('should call ngOnInit', fakeAsync(() => {
    AngularFireAuthMock.onAuthStateChanged = jasmine.createSpy("onAuthStateChanged");
    component.ngOnInit();      
    expect(AngularFireAuthMock.onAuthStateChanged).toHaveBeenCalled();
    expect(component.userUID).toEqual("testuid");   
    
  }));

  it('should edit when buttonText is equal to Edit', () => {
    component.buttonText = "Edit"
    expect(component.isRead).toBeTruthy();
    expect(component.buttonText).toEqual("Edit");
    component.edit();    
    expect(component.isRead).toBeFalsy();
    expect(component.buttonText).toEqual("Save");    
  });

  it('should save when buttonText is equal to Save', () => {
    component.buttonText = "Save";
    component.firstName = "Test";
    component.lastName = "User";
    component.edit();  
    expect(afSpy.doc).toHaveBeenCalled();
    expect(afSpy.doc).toHaveBeenCalledWith('users/' + component.userUID);    
    expect(afSpy.update).toHaveBeenCalled();
    expect(afSpy.update).toHaveBeenCalledWith({firstname: "Test", lastname: "User"});
    expect(component.isRead).toBeTruthy();
    expect(component.buttonText).toEqual("Edit");

    component.buttonText = "Save";
    component.firstName = " ";
    spyOn(window, "alert");
    component.edit();
    expect(window.alert).toHaveBeenCalledWith("Please enter a value for name");

    component.buttonText = "Save";
    component.lastName = " ";
    component.edit();
    expect(window.alert).toHaveBeenCalledWith("Please enter a value for name");
  });

  // it('should delete account', () => {
    
    

  // });

  // it('should present alert before deletion', () => {
    
    

  // });


});
