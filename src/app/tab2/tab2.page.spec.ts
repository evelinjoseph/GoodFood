import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { Platform } from '@ionic/angular';
import * as Leaflet from 'leaflet';
import * as firebase from 'firebase/app';
import { first } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
import { of } from 'rxjs';

import { Tab2Page } from './tab2.page';
import { RouterTestingModule } from '@angular/router/testing';

describe('Tab2Page', () => {
  let component: Tab2Page;
  let fixture: ComponentFixture<Tab2Page>;

  const FirestoreStub = {
    collection: (name: string) => ({   
      valueChanges: () => of({ foo: 'bar' }), 
      doc: (_id: string) => ({
        valueChanges: () => of({ foo: 'bar' }),
        set: (_d: any) => Promise.resolve(),
      }),
    })
  };

  const leafletStub: any = {
    map() {        
    }
  };

  const nativeGeocoderStub: any = {
    forwardGeocode(){
      return Promise.resolve();
    }     
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Tab2Page],
      imports: [IonicModule.forRoot(), RouterTestingModule],
      providers:[
        { provide: AngularFirestore, useValue: FirestoreStub },
        { provide: Leaflet, useValue: leafletStub},
        { provide: NativeGeocoder, useValue: nativeGeocoderStub}
      ]     
      }).compileComponents();
  
    fixture = TestBed.createComponent(Tab2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
