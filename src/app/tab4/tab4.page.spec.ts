import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { AlertController } from '@ionic/angular';
import { of } from 'rxjs';

import { Tab4Page } from './tab4.page';
import { RouterTestingModule } from '@angular/router/testing';

describe('Tab4Page', () => {
  let component: Tab4Page;
  let fixture: ComponentFixture<Tab4Page>;

  const FirestoreStub = {
    collection: (name: string) => ({   
      valueChanges: () => of({ foo: 'bar' }), 
      doc: (_id: string) => ({
        valueChanges: () => of({ foo: 'bar' }),
        set: (_d: any) => Promise.resolve(),
      }),
    })
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tab4Page ],
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

    fixture = TestBed.createComponent(Tab4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
