import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { NavController } from '@ionic/angular';
import { of } from 'rxjs';

import { RegisterPage } from './register.page';

describe('RegisterPage', () => {
  let component: RegisterPage;
  let fixture: ComponentFixture<RegisterPage>;

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
      declarations: [ RegisterPage ],
      imports: [IonicModule.forRoot(), RouterTestingModule],
      providers:[
        { provide: AngularFireAuth, useClass:  class {
          onAuthStateChanged(){
            return of({uid: '1234'})
          }
          createUserWithEmailAndPassword(){
            return Promise.resolve();
          }
        }},
        { provide: AngularFirestore, useValue: FirestoreStub }
    ]     
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
