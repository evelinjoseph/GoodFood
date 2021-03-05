import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { of } from 'rxjs';
import { EmailComposer } from '@ionic-native/email-composer/ngx';

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

  const emailComposerStub: any = {
    isAvailable() {
        return Promise.resolve();
    },
    open(){
      return Promise.resolve();
    }
  };

  let afSpy: any;

  beforeEach(async(() => {

    afSpy = jasmine.createSpyObj('AngularFirestore', ['collection', 
    'valueChanges', 'snapshotChanges', 'ref', 'doc','add','update', 
    'then', 'catch', 'finally', 'firestore', 'get']);
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

    TestBed.configureTestingModule({
      declarations: [ Retailertab3Page ],
      imports: [IonicModule.forRoot(), RouterTestingModule],
      providers:[
        { provide: AngularFireAuth, useClass:  class {
          onAuthStateChanged(){
            return of({uid: '1234'})
          }
        }},
        { provide: AngularFirestore, useValue: afSpy },
        { provide: AngularFireStorage, useValue: fireStub},
        { provide: EmailComposer, useValue: emailComposerStub}
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
