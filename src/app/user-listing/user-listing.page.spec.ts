import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UserListingPage } from './user-listing.page';

describe('UserListingPage', () => {
  let component: UserListingPage;
  let fixture: ComponentFixture<UserListingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserListingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UserListingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
