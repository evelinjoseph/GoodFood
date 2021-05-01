import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import {  AlertController , NavController } from '@ionic/angular';

import { RegisterPage } from './register.page';

describe('RegisterPage', () => {
  let component: RegisterPage;
  let fixture: ComponentFixture<RegisterPage>;

  let AngularFireAuthMock = {
    createUserWithEmailAndPassword(email, password) {
      return Promise.resolve();      
    }
  }


  let navSpy: any;
  let afSpy: any;

  beforeEach(async(() => {

    navSpy = jasmine.createSpyObj('NavController',['navigateRoot']);
    navSpy.navigateRoot.and.returnValue(navSpy);

    afSpy = jasmine.createSpyObj('AngularFirestore', ['collection', 'doc','ref','set']);
    afSpy.collection.and.returnValue(afSpy);
    afSpy.ref.and.returnValue(afSpy); 
    afSpy.doc.and.returnValue(afSpy);     
    afSpy.set.and.returnValue(afSpy);

    TestBed.configureTestingModule({
      declarations: [ RegisterPage ],
      imports: [IonicModule.forRoot(), RouterTestingModule],
      providers:[
        { provide: AngularFireAuth, useValue: AngularFireAuthMock },
        { provide: AngularFirestore, useValue: afSpy },
        { provide: NavController, useValue: navSpy}
    ]     
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should present error for first name', async() => {
    component.firstname = ""
    component.lastname = "last"
    component.cpassword = "password"
    component.email = "email";
    component.password =  "password";
    component.presentAlert = jasmine.createSpy("presentAlert");
    component.register();
    expect(component.presentAlert).toHaveBeenCalledWith('Please Enter First Name');
    
  });

  it('should present error for last name', async() => {
    component.firstname = "first"
    component.lastname = ""
    component.cpassword = "password"
    component.email = "email";
    component.password =  "password";
    component.presentAlert = jasmine.createSpy("presentAlert");
    component.register();
    expect(component.presentAlert).toHaveBeenCalledWith('Please Enter Last Name');
    
  });

  it('should present error for passwords not matching', async() => {
    component.firstname = "first"
    component.lastname = "last"
    component.cpassword = "password1";
    component.password =  "password";
    component.presentAlert = jasmine.createSpy("presentAlert");
    component.register();    
    expect(component.presentAlert).toHaveBeenCalledWith('Passwords Do Not Match');    
  });

  it('should register user', async() => {
    component.firstname = "first"
    component.lastname = "last"
    component.cpassword = "password";
    component.password =  "password";
    component.email = "email";  
    AngularFireAuthMock.createUserWithEmailAndPassword = jasmine.createSpy("createUserWithEmailAndPassword");
    component.register();    
    expect(AngularFireAuthMock.createUserWithEmailAndPassword).toHaveBeenCalledWith("email", "password");
  });

});
