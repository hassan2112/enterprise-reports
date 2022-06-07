import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceGraphViewComponent } from './service-graph-view.component';

describe('ServiceGraphViewComponent', () => {
  let component: ServiceGraphViewComponent;
  let fixture: ComponentFixture<ServiceGraphViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceGraphViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceGraphViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
