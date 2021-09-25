import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationsUserComponent } from './applications-user.component';

describe('ApplicationsUserComponent', () => {
  let component: ApplicationsUserComponent;
  let fixture: ComponentFixture<ApplicationsUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicationsUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationsUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
