import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFireAuth } from '@angular/fire/auth';
import { Guid } from "ez-guid";
import { of } from 'rxjs';
import * as firebase from 'firebase/app';

import { NewListingPage } from './new-listing.page';
import { RouterTestingModule } from '@angular/router/testing';

describe('NewListingPage', () => {
  let component: NewListingPage;
  let fixture: ComponentFixture<NewListingPage>;

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

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewListingPage ],
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

    fixture = TestBed.createComponent(NewListingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
