import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { AlertController, NavController } from '@ionic/angular';
import * as firebase from 'firebase/app';
import { of } from 'rxjs';

import { Tab3Page } from './tab3.page';
import { RouterTestingModule } from '@angular/router/testing';
import { filter } from 'rxjs/operators';


describe('Tab3Page', () => {
  let component: Tab3Page;
  let fixture: ComponentFixture<Tab3Page>;

  let AngularFireAuthMock = {
    
    onAuthStateChanged(users) { 
      return of({
        uid: "testuid"
      }) 
      
    },
    currentUser: () => of({uid: "testuid"}),
    signInWithEmailAndPassword() {
      return Promise.resolve();
    }
  }

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
      },
      arrayRemove(){
        return firebase.firestore.FieldValue;
      }
    }
  };

  let afSpy: any;
  let filterSpy: any;

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

    filterSpy = jasmine.createSpyObj('filter', ['filter']);
    filterSpy.filter.and.returnValue(filterSpy);
    

    TestBed.configureTestingModule({
      declarations: [Tab3Page],
      imports: [IonicModule.forRoot(), RouterTestingModule],
      providers:[
        { provide: AngularFireAuth, useValue: AngularFireAuthMock},
        { provide: AngularFirestore, useValue: afSpy },
        { provide: filter, useValue: filterSpy },
    ]     
    }).compileComponents();

    fixture = TestBed.createComponent(Tab3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
