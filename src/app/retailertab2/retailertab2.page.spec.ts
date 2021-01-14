import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { AlertController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import { of } from 'rxjs';

import { Retailertab2Page } from './retailertab2.page';
import { RouterTestingModule } from '@angular/router/testing';

describe('Retailertab2Page', () => {
  let component: Retailertab2Page;
  let fixture: ComponentFixture<Retailertab2Page>;

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
      declarations: [ Retailertab2Page ],
      imports: [IonicModule.forRoot(), RouterTestingModule],
      providers:[
        { provide: AngularFireAuth, useClass:  class {
          onAuthStateChanged(){
            return of({uid: '1234'})
          }
        }},
        { provide: AngularFirestore, useValue: fireStub }
    ]     
    }).compileComponents();

    fixture = TestBed.createComponent(Retailertab2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
