import { async, ComponentFixture, TestBed, tick } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { NavController } from '@ionic/angular';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

import { InitialPagePage } from './initial-page.page';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

describe('InitialPagePage', () => {
  let component: InitialPagePage;
  let fixture: ComponentFixture<InitialPagePage>;
  let de: DebugElement

  // const fireStub: any = {
  //   authState: {},
  //   auth: {
  //     onAuthStateChanged() {
  //       return of({uid: '1234'})

  //     },
  //     signInWithEmailAndPassword() {
  //       return Promise.resolve();
  //     }
  //   }
    
  // };

  // class AngularFireAuthStub {
  //   readonly auth: AuthStub = new AuthStub();
  // }

  // class AuthStub {
  //   onAuthStateChanged(){
  //     return of({uid: '1234'})
  //   }
  // }  

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
      declarations: [ InitialPagePage ],
      imports: [IonicModule.forRoot(), RouterTestingModule],
      providers:[
        { provide: AngularFireAuth, useClass:  class {
          onAuthStateChanged(){
            return of({uid: '1234'})
          }
        }},
        { provide: AngularFirestore, useValue: FirestoreStub },
        { provide: NavController, useClass: class { navigate = jasmine.createSpy('navigate') } }
    ]     
    }).compileComponents();

    fixture = TestBed.createComponent(InitialPagePage);
    component = fixture.componentInstance;
    de = fixture.debugElement;

    fixture.detectChanges();
  }));  

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should toggle', () => {
  //   expect(component.isReady).toBeFalsy();
  //   tick(600);
  //   expect(component.isReady).toBeTruthy();
  // });
});
