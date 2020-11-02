import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Retailertab2Page } from './retailertab2.page';

describe('Retailertab2Page', () => {
  let component: Retailertab2Page;
  let fixture: ComponentFixture<Retailertab2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Retailertab2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Retailertab2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
