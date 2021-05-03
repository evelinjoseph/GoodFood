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
      },
      onAuthStateChanged() { 
       return "test" 
        
      }
    },
    firestore: {
      arrayUnion(){
        return firebase.firestore.FieldValue;
      }
    }
  };

  let AngularFireAuthMock = {
   
    signInWithEmailAndPassword(email, password) {
      return Promise.resolve();
    },
    onAuthStateChanged() { 
     return "test" 
      
    }
  }

  let afSpy:any;

  beforeEach(async(() => {

    afSpy = jasmine.createSpyObj('AngularFirestore', ['collection', 
    'valueChanges', 'snapshotChanges', 'ref', 'doc','add','update', 
    'then', 'catch', 'finally', 'firestore', 'get', 'subscribe']);
    afSpy.collection.and.returnValue(afSpy);
    afSpy.valueChanges.and.returnValue(afSpy);
    afSpy.snapshotChanges.and.returnValue(afSpy); 
    afSpy.ref.and.returnValue(afSpy); 
    afSpy.doc.and.returnValue(afSpy); 
    afSpy.add.and.returnValue(afSpy);
    afSpy.update.and.returnValue(Promise.resolve()); 
    afSpy.then.and.returnValue(Promise.resolve('hello world')); 
    afSpy.catch.and.returnValue(afSpy); 
    afSpy.finally.and.callThrough()
    afSpy.firestore.and.returnValue(afSpy); 
    afSpy.get.and.returnValue(afSpy);
    afSpy.subscribe.and.returnValue(afSpy);

    TestBed.configureTestingModule({
      declarations: [ RetailerListingPage ],
      imports: [IonicModule.forRoot(), RouterTestingModule],
      providers:[
        { provide: AngularFireAuth, useValue: AngularFireAuthMock},
        { provide: AngularFirestore, useValue: afSpy },
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
