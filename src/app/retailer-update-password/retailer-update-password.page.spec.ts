import { CommonModule } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';

import { RetailerUpdatePasswordPage } from './retailer-update-password.page';

describe('RetailerUpdatePasswordPage', () => {
  let component: RetailerUpdatePasswordPage;
  let fixture: ComponentFixture<RetailerUpdatePasswordPage>;

  const fireStub: any = {
    authState: {},
    auth: {
      signInWithEmailAndPassword() {
        return Promise.resolve();
      },
      updatePassword(newpassword: string){
        return Promise.resolve();
      }
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetailerUpdatePasswordPage ],
      imports: [FormsModule,
        CommonModule,
        BrowserModule,
        IonicModule.forRoot(), RouterTestingModule],
      providers:[
        { provide: AngularFireAuth, useValue: fireStub}
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(RetailerUpdatePasswordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
