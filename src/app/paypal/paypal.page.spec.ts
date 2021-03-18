import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal/ngx'
import { AlertController, LoadingController, NavController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { first } from 'rxjs/operators';
import { of } from 'rxjs';
import * as firebase from 'firebase/app';

import { PaypalPage } from './paypal.page';
import { RouterTestingModule } from '@angular/router/testing';

describe('PaypalPage', () => {
  let component: PaypalPage;
  let fixture: ComponentFixture<PaypalPage>;

  const FirestoreStub = {
    collection: (name: string) => ({
      // doc: (_id: string) => ({
      //   valueChanges: () => new BehaviorSubject({ foo: 'bar' }),
      //   set: (_d: any) => new Promise((resolve, _reject) => resolve()),
      // }),
    }),
  };

  const fireStub: any = {
    authState: {},
    auth: {
      signInWithEmailAndPassword() {
        return Promise.resolve();
      }
    },
    firestore: {
      arrayUnion(){
        return firebase.firestore.FieldValue;
      }
    }
  };

  const paypalStub: any = {
    init() {
        return Promise.resolve();
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaypalPage ],
      imports: [IonicModule.forRoot(), RouterTestingModule],
      providers:[
        { provide: AngularFireAuth, useClass:  class {
          onAuthStateChanged(){
            return of({uid: '1234'})
          }
        }},
        { provide: AngularFirestore, useValue: fireStub },
        { provide: PayPal, useValue: paypalStub }
    ]     
    }).compileComponents();

    
    fixture = TestBed.createComponent(PaypalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
    
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
