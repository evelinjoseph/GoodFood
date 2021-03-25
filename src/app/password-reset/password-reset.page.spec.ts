import { CommonModule } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';
import { AlertController, NavController } from '@ionic/angular';

import { PasswordResetPage } from './password-reset.page';

describe('PasswordResetPage', () => {
  let component: PasswordResetPage;
  let fixture: ComponentFixture<PasswordResetPage>;

  let AngularFireAuthMock = {
    signInWithEmailAndPassword() {
      return Promise.resolve();
    },
    updatePassword(newpassword: string){
      return Promise.resolve();
    },
    sendPasswordResetEmail(emailAddress: string){
      return Promise.resolve();
    }
  }

  let navSpy: any;
  let alertSpy: any;

  beforeEach(async(() => {

    navSpy = jasmine.createSpyObj('NavController',['navigateRoot']);
    navSpy.navigateRoot.and.returnValue(navSpy);

    alertSpy = jasmine.createSpyObj('AlertController',['presentAlert']);
    alertSpy.presentAlert.and.returnValue(Promise.resolve(true));

    TestBed.configureTestingModule({
      declarations: [ PasswordResetPage ],
      imports: [FormsModule,
        CommonModule,
        BrowserModule,
        IonicModule.forRoot(), RouterTestingModule],
      providers:[
        { provide: AngularFireAuth, useValue: AngularFireAuthMock},
        { provide: NavController, useValue: navSpy},
        { provide: AlertController, useValue: alertSpy}
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(PasswordResetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should send reset link', () => {
    const spy = spyOn(AngularFireAuthMock, "sendPasswordResetEmail").and.returnValue(Promise.resolve());
    component.presentAlert = jasmine.createSpy("presentAlert");
    component.resetPassword();
    expect(spy).toHaveBeenCalled();
    spy.calls.mostRecent().returnValue.then(res => {
      expect(component.presentAlert).toHaveBeenCalledWith("Password Reset Link Sent to Email");
      expect(navSpy.navigateRoot).toHaveBeenCalledWith(['./login']);      
   })
   
  

  });
});
