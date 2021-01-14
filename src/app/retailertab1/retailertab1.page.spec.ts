import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { of } from 'rxjs';

import { Retailertab1Page } from './retailertab1.page';
import { RouterTestingModule } from '@angular/router/testing';

describe('Retailertab1Page', () => {
  let component: Retailertab1Page;
  let fixture: ComponentFixture<Retailertab1Page>;

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
      declarations: [ Retailertab1Page ],
      imports: [IonicModule.forRoot(), RouterTestingModule],
      providers:[
        { provide: AngularFireAuth, useClass:  class {
          onAuthStateChanged(){
            return of({uid: '1234'})
          }
        }},
        { provide: AngularFirestore, useValue: FirestoreStub }
    ]     
    }).compileComponents();

    fixture = TestBed.createComponent(Retailertab1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
