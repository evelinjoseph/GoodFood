import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RetailerRegisterPage } from './retailer-register.page';

describe('RetailerRegisterPage', () => {
  let component: RetailerRegisterPage;
  let fixture: ComponentFixture<RetailerRegisterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetailerRegisterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RetailerRegisterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
