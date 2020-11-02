import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Retailertab1Page } from './retailertab1.page';

describe('Retailertab1Page', () => {
  let component: Retailertab1Page;
  let fixture: ComponentFixture<Retailertab1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Retailertab1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Retailertab1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
