import { CommonModule } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';

import { RetailerUpdatePasswordPage } from './retailer-update-password.page';
import * as firebase from 'firebase';
import { environment } from 'src/environments/environment';

//firebase.initializeApp(environment.firebase);

describe('RetailerUpdatePasswordPage', () => {
  let component: RetailerUpdatePasswordPage;
  let fixture: ComponentFixture<RetailerUpdatePasswordPage>;


  let AngularFireAuthMock = {
    signInWithEmailAndPassword() {
      return Promise.resolve();
    },
    updatePassword(newpassword: string){
      return Promise.resolve();
    }
  }

  let firestoreStub = {
    auth: {
      currentUser: {
        email: "email",
        UpdatePassword(){  return Promise.resolve();}
      } 

    }
  }


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetailerUpdatePasswordPage ],
      imports: [FormsModule,
        CommonModule,
        BrowserModule,
        IonicModule.forRoot(), RouterTestingModule],
      providers:[
        { provide: AngularFireAuth, useValue: AngularFireAuthMock},
        { provide: firebase, useValue: firestoreStub}
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(RetailerUpdatePasswordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should present error for passwords not matching', () => {
    component.password = "current";
    component.cpassword = "password";    
    component.newpassword = "test password";
   
    component.presentAlert = jasmine.createSpy("presentAlert");
    component.updatePassword();    
    expect(component.presentAlert).toHaveBeenCalledWith('Passwords Do Not Match');    
  });

  it('should present error for current password', () => {
    component.password = "";
    component.cpassword = "password";    
    component.newpassword =  "password";
   
    component.presentAlert = jasmine.createSpy("presentAlert");
    component.updatePassword();    
    expect(component.presentAlert).toHaveBeenCalledWith('Please Enter Current Password');    
  });

  it('should present error for new password', () => {
    component.password = "current";
    component.cpassword = "password";    
    component.newpassword =  "";
   
    component.presentAlert = jasmine.createSpy("presentAlert");
    component.updatePassword();    
    expect(component.presentAlert).toHaveBeenCalledWith('Please Enter New Password');    
  });

  it('should present error for new password', () => {
    component.password = "current";
    component.cpassword = "";    
    component.newpassword =  "password";
   
    component.presentAlert = jasmine.createSpy("presentAlert");
    component.updatePassword();    
    expect(component.presentAlert).toHaveBeenCalledWith('Please Confirm Password');    
  });

  // it('should update password ', ()  => {
  //   component.password = "current";
  //   component.cpassword = "password";    
  //   component.newpassword =  "password";
  //   AngularFireAuthMock.signInWithEmailAndPassword = jasmine.createSpy("signInWithEmailAndPassword"); 
  //   firestoreStub.auth.currentUser.UpdatePassword = jasmine.createSpy("UpdatePassword"); 
  //   firestoreStub.auth.currentUser.email = "email";
  //   component.updatePassword();       
  //   expect(AngularFireAuthMock.signInWithEmailAndPassword).toHaveBeenCalled();
  //   expect(firestoreStub.auth.currentUser.UpdatePassword).toHaveBeenCalled();
    
  // });
});
