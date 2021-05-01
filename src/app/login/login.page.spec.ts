import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore} from '@angular/fire/firestore';
import { NavController } from '@ionic/angular';
import { RouterTestingModule } from '@angular/router/testing'

import { LoginPage } from './login.page';
import { of } from 'rxjs';
import * as firebase from 'firebase';
import { environment } from 'src/environments/environment';

firebase.initializeApp(environment.firebase);

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>; 

  let AngularFireAuthMock = {
    setPersistence(persistence){       
      return Promise.resolve(true);
    },
    onAuthStateChanged(users) { 
     return "test" 
      
    },
    currentUser: () => of({uid: "test"}),
    signInWithEmailAndPassword(email, password) {
      return Promise.resolve();
    }
  } 
  
  const FirestoreStub = {
    collection: (name: string) => ({
      // doc: (_id: string) => ({
      //   valueChanges: () => new BehaviorSubject({ foo: 'bar' }),
      //   set: (_d: any) => new Promise((resolve, _reject) => resolve()),
      // }),
    }),
  };


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginPage ],
      imports: [IonicModule.forRoot(), RouterTestingModule],
      providers:[
        { provide: AngularFireAuth, useValue: AngularFireAuthMock},
        { provide: AngularFirestore, useValue: FirestoreStub },
        { provide: NavController, useClass: class { navigate = jasmine.createSpy('navigate') } }
    ]     
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should produce error for email', async() => {
    component.presentAlert = jasmine.createSpy("presentAlert");
    component.email = ""
    component.login();
    expect(component.presentAlert).toHaveBeenCalledWith('Please Enter Email Address');
  });

  it('should produce error for password', async() => {
    component.presentAlert = jasmine.createSpy("presentAlert");
    component.email = "test"
    component.password = ""
    component.login();
    expect(component.presentAlert).toHaveBeenCalledWith('Please Enter Password');
  });

  it('should login', async() => {
    const spy = spyOn(AngularFireAuthMock, "setPersistence").and.returnValue(Promise.resolve(true));
    AngularFireAuthMock.signInWithEmailAndPassword = jasmine.createSpy("signInWithEmailAndPassword");    
    component.email = "test"
    component.password = "test"
    component.login();  
    spy.calls.mostRecent().returnValue.then(res => {
      expect(AngularFireAuthMock.signInWithEmailAndPassword).toHaveBeenCalledWith("test", "test");
      
   })
    
    
  });


});
