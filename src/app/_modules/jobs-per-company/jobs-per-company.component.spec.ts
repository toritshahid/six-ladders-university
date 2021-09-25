import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsPerCompanyComponent } from './jobs-per-company.component';

describe('JobsPerCompanyComponent', () => {
  let component: JobsPerCompanyComponent;
  let fixture: ComponentFixture<JobsPerCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobsPerCompanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobsPerCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
