import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { of } from 'rxjs';

import { Retailertab3Page } from './retailertab3.page';
import { RouterTestingModule } from '@angular/router/testing';

describe('Retailertab3Page', () => {
  let component: Retailertab3Page;
  let fixture: ComponentFixture<Retailertab3Page>;

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
      declarations: [ Retailertab3Page ],
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


    fixture = TestBed.createComponent(Retailertab3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
