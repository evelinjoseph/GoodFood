import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import * as firebase from 'firebase/app';
import { RouterTestingModule } from '@angular/router/testing';

import { RetailerListingPage } from './retailer-listing.page';

describe('RetailerListingPage', () => {
  let component: RetailerListingPage;
  let fixture: ComponentFixture<RetailerListingPage>;

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

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetailerListingPage ],
      imports: [IonicModule.forRoot(), RouterTestingModule],
      providers:[
        { provide: AngularFireAuth, useClass:  class {
          onAuthStateChanged(){
            return of({uid: '1234'})
          }
        }},
        { provide: AngularFirestore, useValue: fireStub },
        { provide: AngularFireStorage, useValue: fireStub}
    ]     
    }).compileComponents();

    fixture = TestBed.createComponent(RetailerListingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
