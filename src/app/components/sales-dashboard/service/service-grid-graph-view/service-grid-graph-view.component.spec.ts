import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceGridGraphViewComponent } from './service-grid-graph-view.component';

describe('ServiceGridGraphViewComponent', () => {
  let component: ServiceGridGraphViewComponent;
  let fixture: ComponentFixture<ServiceGridGraphViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceGridGraphViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceGridGraphViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
