import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreTrendingComponent } from './store-trending.component';

describe('StoreTrendingComponent', () => {
  let component: StoreTrendingComponent;
  let fixture: ComponentFixture<StoreTrendingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreTrendingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreTrendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
