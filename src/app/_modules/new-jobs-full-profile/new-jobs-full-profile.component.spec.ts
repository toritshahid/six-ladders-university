import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewJobsFullProfileComponent } from './new-jobs-full-profile.component';

describe('NewJobsFullProfileComponent', () => {
  let component: NewJobsFullProfileComponent;
  let fixture: ComponentFixture<NewJobsFullProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewJobsFullProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewJobsFullProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
