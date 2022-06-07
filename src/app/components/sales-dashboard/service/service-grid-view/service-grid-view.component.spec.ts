import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceGridViewComponent } from './service-grid-view.component';

describe('ServiceGridViewComponent', () => {
  let component: ServiceGridViewComponent;
  let fixture: ComponentFixture<ServiceGridViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceGridViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceGridViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
