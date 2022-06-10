import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreMonthlySummaryComponent } from './store-monthly-summary.component';

describe('StoreMonthlySummaryComponent', () => {
  let component: StoreMonthlySummaryComponent;
  let fixture: ComponentFixture<StoreMonthlySummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreMonthlySummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreMonthlySummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
