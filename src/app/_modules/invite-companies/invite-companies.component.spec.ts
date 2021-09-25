import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteCompaniesComponent } from './invite-companies.component';

describe('InviteCompaniesComponent', () => {
  let component: InviteCompaniesComponent;
  let fixture: ComponentFixture<InviteCompaniesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InviteCompaniesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InviteCompaniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
