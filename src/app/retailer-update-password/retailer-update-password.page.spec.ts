import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RetailerUpdatePasswordPage } from './retailer-update-password.page';

describe('RetailerUpdatePasswordPage', () => {
  let component: RetailerUpdatePasswordPage;
  let fixture: ComponentFixture<RetailerUpdatePasswordPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetailerUpdatePasswordPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RetailerUpdatePasswordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
