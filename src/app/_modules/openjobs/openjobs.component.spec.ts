import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenjobsComponent } from './openjobs.component';

describe('OpenjobsComponent', () => {
  let component: OpenjobsComponent;
  let fixture: ComponentFixture<OpenjobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenjobsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenjobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
