import { TestBed } from '@angular/core/testing';
import { AngularFirestore } from '@angular/fire/firestore';

import { ListingsService } from './listings.service';

describe('ListingsService', () => {
  let service: ListingsService;
  let afSpy: any;

  beforeEach(() => {

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
      providers:[
      { provide: AngularFirestore, useValue: afSpy },
      ]}).compileComponents();;
    service = TestBed.inject(ListingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
