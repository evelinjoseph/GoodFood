import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
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

  
  let AngularFireAuthMock = {
    
    onAuthStateChanged(users) { 
      if(users){
        var docRef = afSpy.doc("testuid"); 
        component.nacCtrl.navigateRoot(['./tabs/tabs/tab1']);            

      }
      else{
        component.isReady = true;
      }
      return of({
        uid: "testuid"
      }) 
      
    },
    currentUser: () => of({uid: "test"})
  }

  let afSpy: any;
  let navSpy: any;

  beforeEach(async(() => {

    navSpy = jasmine.createSpyObj('NavController',['navigateRoot']);
    navSpy.navigateRoot.and.returnValue(navSpy);
    
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
      declarations: [ InitialPagePage ],
      imports: [IonicModule.forRoot(), RouterTestingModule],
      providers:[
        { provide: AngularFireAuth, useValue: AngularFireAuthMock },
        { provide: AngularFirestore, useValue: afSpy },
        { provide: NavController, useValue: navSpy}
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

  

  // xit('should navigate', () => {
   
  //   AngularFireAuthMock.onAuthStateChanged = jasmine.createSpy("onAuthStateChanged");
  //   component.ngOnInit();    
  //   expect(AngularFireAuthMock.onAuthStateChanged).toHaveBeenCalled();
  //   expect(navSpy.navigateRoot).toHaveBeenCalled();
    
  // });

  it('should set isReady if no user', fakeAsync(() => {
   
    AngularFireAuthMock.onAuthStateChanged = jasmine.createSpy("onAuthStateChanged");
    AngularFireAuthMock.onAuthStateChanged(false);
    expect(AngularFireAuthMock.onAuthStateChanged).toHaveBeenCalledWith(false);
    //expect(AngularFireAuthMock.onAuthStateChanged.arguments).toBeFalsy();
    //expect(component.isReady).toBeTruthy();
    
  }));

  // xit('should toggle is Ready', fakeAsync(() => {
  //   expect(component.isReady).toBeFalsy();
  //   AngularFireAuthMock.onAuthStateChanged(false);
  //   tick(700);
  //   expect(component.isReady).toBeTruthy();
  // }));
});
