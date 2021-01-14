import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { LoadingController, AlertController, NavController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { first } from 'rxjs/operators';
import { AngularFireStorage } from '@angular/fire/storage';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { Tab1Page } from './tab1.page';
import { RouterTestingModule } from '@angular/router/testing';

describe('Tab1Page', () => {
  let component: Tab1Page;
  let fixture: ComponentFixture<Tab1Page>;

  const FirestoreStub = {
    collection: (name: string) => ({   
      valueChanges: () => of({ foo: 'bar' }), 
      doc: (_id: string) => ({
        valueChanges: () => of({ foo: 'bar' }),
        set: (_d: any) => Promise.resolve(),
      }),
    })
  };

  const fireStub: any = {
    authState: {},
    auth: {
      signInWithEmailAndPassword() {
        return Promise.resolve();
      }
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Tab1Page],
      imports: [IonicModule.forRoot(), RouterTestingModule],
      providers:[
        { provide: AngularFireAuth, useClass:  class {
          onAuthStateChanged(){
            return of({uid: '1234'})
          }
        }},
        { provide: AngularFirestore, useValue: FirestoreStub },
        { provide: AngularFireStorage, useValue: fireStub}
    ]     
    }).compileComponents();

    fixture = TestBed.createComponent(Tab1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
