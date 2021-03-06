import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RetailertabsPage } from './retailertabs.page';

describe('RetailertabsPage', () => {
  let component: RetailertabsPage;
  let fixture: ComponentFixture<RetailertabsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetailertabsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RetailertabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
