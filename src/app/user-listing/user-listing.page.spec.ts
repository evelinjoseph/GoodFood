import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';
import * as firebase from 'firebase/app';
import { AlertController, LoadingController, NavController } from '@ionic/angular';

import { UserListingPage } from './user-listing.page';
import { RouterTestingModule } from '@angular/router/testing';


describe('UserListingPage', () => {
  let component: UserListingPage;
  let fixture: ComponentFixture<UserListingPage>;

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
      declarations: [ UserListingPage ],
      imports: [IonicModule.forRoot(), RouterTestingModule], 
      providers:[
        { provide: AngularFirestore, useValue: fireStub },
        { provide: AngularFireStorage, useValue: fireStub}
    ]     
    }).compileComponents();

    fixture = TestBed.createComponent(UserListingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
