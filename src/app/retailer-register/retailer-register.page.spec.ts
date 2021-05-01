import { async, ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { of } from 'rxjs';

import { RetailerRegisterPage } from './retailer-register.page';
import { RouterTestingModule } from '@angular/router/testing';

describe('RetailerRegisterPage', () => {
  let component: RetailerRegisterPage;
  let fixture: ComponentFixture<RetailerRegisterPage>;


  let AngularFireAuthMock = {
    createUserWithEmailAndPassword(email, password) {
      return Promise.resolve();      
    }
  }

  const emailComposerStub: any = {
    isAvailable() {
        return Promise.resolve();
    },
    open(){
      return Promise.resolve();
    }
  };

  var Email: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetailerRegisterPage ],
      imports: [IonicModule.forRoot(), RouterTestingModule],
      providers:[
        { provide: AngularFireAuth, useValue: AngularFireAuthMock},
        { provide: AngularFirestore, useValue: AngularFireAuthMock},
        { provide: EmailComposer, useValue: emailComposerStub}
    ]     
    }).compileComponents();

    fixture = TestBed.createComponent(RetailerRegisterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should present error for retailer name', async() => {
    component.name = "";
    component.cpassword = "password";
    component.email = "email";
    component.location = "location";
    component.password =  "password";
    component.retailerType = "test";
    component.pickupTime = "test";
    component.presentAlert = jasmine.createSpy("presentAlert");
    component.register();
    expect(component.presentAlert).toHaveBeenCalledWith('Please Enter a Name');
    
  });

  it('should present error for passwords not matching', async() => {
    component.name = "name";
    component.cpassword = "new password";
    component.email = "email";
    component.location = "location";
    component.password =  "password";
    component.retailerType = "test";
    component.pickupTime = "test";
    component.presentAlert = jasmine.createSpy("presentAlert");
    component.register();    
    expect(component.presentAlert).toHaveBeenCalledWith('Passwords Do Not Match');    
  });

  it('should present error for location', async() => {
    component.name = "name";
    component.cpassword = "password";
    component.email = "email";
    component.location = "";
    component.password =  "password";
    component.retailerType = "test";
    component.pickupTime = "test";
    component.presentAlert = jasmine.createSpy("presentAlert");
    component.register();
    expect(component.presentAlert).toHaveBeenCalledWith('Please Enter an Address');
    
  });

  it('should present error for retailerType', async() => {
    component.name = "name";
    component.cpassword = "password";
    component.email = "email";
    component.location = "location";
    component.password =  "password";
    component.retailerType = "";
    component.pickupTime = "test";
    component.presentAlert = jasmine.createSpy("presentAlert");
    component.register();
    expect(component.presentAlert).toHaveBeenCalledWith('Please Enter Retailer Type (Restaurant, Food Truck, Cafe)');
    
  });

  it('should present error for pickUpTime', async() => {
    component.name = "name";
    component.cpassword = "password";
    component.email = "email";
    component.location = "location";
    component.password =  "password";
    component.retailerType = "test";
    component.presentAlert = jasmine.createSpy("presentAlert");
    component.register();
    expect(component.presentAlert).toHaveBeenCalledWith('Please Enter Pickup Time');
    
  });

  it('should register retailer', fakeAsync(()  => {
    component.name = "name";
    component.cpassword = "password";
    component.email = "email";
    component.location = "location";
    component.password =  "password";
    component.retailerType = "test"; 
    component.pickupTime = "test";
    AngularFireAuthMock.createUserWithEmailAndPassword = jasmine.createSpy("createUserWithEmailAndPassword"); 
    component.register();       
    expect(AngularFireAuthMock.createUserWithEmailAndPassword).toHaveBeenCalledWith("email", "password");

    
  }));
});
