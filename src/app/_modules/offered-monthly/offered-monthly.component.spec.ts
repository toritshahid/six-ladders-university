import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferedMonthlyComponent } from './offered-monthly.component';

describe('OfferedMonthlyComponent', () => {
  let component: OfferedMonthlyComponent;
  let fixture: ComponentFixture<OfferedMonthlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfferedMonthlyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferedMonthlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
