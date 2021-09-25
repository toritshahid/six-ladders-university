import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosedJobsFullProfileComponent } from './closed-jobs-full-profile.component';

describe('ClosedJobsFullProfileComponent', () => {
  let component: ClosedJobsFullProfileComponent;
  let fixture: ComponentFixture<ClosedJobsFullProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClosedJobsFullProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClosedJobsFullProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
