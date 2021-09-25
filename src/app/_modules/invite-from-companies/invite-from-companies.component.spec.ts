import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteFromCompaniesComponent } from './invite-from-companies.component';

describe('InviteFromCompaniesComponent', () => {
  let component: InviteFromCompaniesComponent;
  let fixture: ComponentFixture<InviteFromCompaniesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InviteFromCompaniesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InviteFromCompaniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
