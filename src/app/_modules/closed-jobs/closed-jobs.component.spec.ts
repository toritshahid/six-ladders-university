import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosedJobsComponent } from './closed-jobs.component';

describe('ClosedJobsComponent', () => {
  let component: ClosedJobsComponent;
  let fixture: ComponentFixture<ClosedJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClosedJobsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClosedJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
