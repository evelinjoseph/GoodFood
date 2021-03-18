import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { NavController, Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { of } from 'rxjs';



describe('AppComponent', () => {
  let AngularFireAuthMock = {
    
    onAuthStateChanged() { 
      
      return of({
        uid: "testuid"
      }) 
      
    },
    currentUser: () => of({uid: "test"}),
    signOut: () => of({uid: "test"})
  }

  let statusBarSpy;
  let splashScreenSpy;
  let platformReadySpy;
  let platformSpy;
  let navSpy;
  let afSpy;

  beforeEach(async(() => {
    statusBarSpy = jasmine.createSpyObj('StatusBar', ['styleDefault']);
    splashScreenSpy = jasmine.createSpyObj('SplashScreen', ['hide']);
    platformReadySpy = Promise.resolve();
    platformSpy = jasmine.createSpyObj('Platform', { ready: platformReadySpy });
    navSpy = jasmine.createSpyObj('NavController',['navigateRoot']);
    afSpy = jasmine.createSpyObj('AngularFirestore', ['collection', 
    'valueChanges', 'snapshotChanges', 'ref', 'doc','add','update', 
    'then', 'catch', 'finally', 'firestore', 'get']);

    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [
        FormsModule,
        CommonModule,
        BrowserModule,
        RouterTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: StatusBar, useValue: statusBarSpy },
        { provide: SplashScreen, useValue: splashScreenSpy },
        { provide: Platform, useValue: platformSpy },
        { provide: AngularFireAuth, useValue: AngularFireAuthMock },
        { provide: AngularFirestore, useValue: afSpy },
        { provide: NavController, useValue: navSpy}
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should initialize the app', async () => {
    TestBed.createComponent(AppComponent);
    expect(platformSpy.ready).toHaveBeenCalled();
    await platformReadySpy;
    expect(statusBarSpy.styleDefault).toHaveBeenCalled();
    //expect(splashScreenSpy.hide).toHaveBeenCalled();
  });

  // TODO: add more tests!

});
