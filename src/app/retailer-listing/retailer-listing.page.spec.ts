import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RetailerListingPage } from './retailer-listing.page';

describe('RetailerListingPage', () => {
  let component: RetailerListingPage;
  let fixture: ComponentFixture<RetailerListingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetailerListingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RetailerListingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
