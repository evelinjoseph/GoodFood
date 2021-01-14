import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { of } from 'rxjs';

import { RetailerRegisterPage } from './retailer-register.page';
import { RouterTestingModule } from '@angular/router/testing';

describe('RetailerRegisterPage', () => {
  let component: RetailerRegisterPage;
  let fixture: ComponentFixture<RetailerRegisterPage>;

  const FirestoreStub = {
    collection: (name: string) => ({
      // doc: (_id: string) => ({
      //   valueChanges: () => new BehaviorSubject({ foo: 'bar' }),
      //   set: (_d: any) => new Promise((resolve, _reject) => resolve()),
      // }),
    }),
  };

  const emailComposerStub: any = {
    isAvailable() {
        return Promise.resolve();
    },
    open(){
      return Promise.resolve();
    }
  };


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetailerRegisterPage ],
      imports: [IonicModule.forRoot(), RouterTestingModule],
      providers:[
        { provide: AngularFireAuth, useClass:  class {
          onAuthStateChanged(){
            return of({uid: '1234'})
          }
        }},
        { provide: AngularFirestore, useValue: FirestoreStub },
        { provide: EmailComposer, useValue: emailComposerStub}
    ]     
    }).compileComponents();

    fixture = TestBed.createComponent(RetailerRegisterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
