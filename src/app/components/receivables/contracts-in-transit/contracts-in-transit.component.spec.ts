import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractsInTransitComponent } from './contracts-in-transit.component';

describe('ContractsInTransitComponent', () => {
  let component: ContractsInTransitComponent;
  let fixture: ComponentFixture<ContractsInTransitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractsInTransitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractsInTransitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
