import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Retailertab3Page } from './retailertab3.page';

describe('Retailertab3Page', () => {
  let component: Retailertab3Page;
  let fixture: ComponentFixture<Retailertab3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Retailertab3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Retailertab3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
