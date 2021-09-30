import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacementbymajorComponent } from './placementbymajor.component';

describe('PlacementbymajorComponent', () => {
  let component: PlacementbymajorComponent;
  let fixture: ComponentFixture<PlacementbymajorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlacementbymajorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacementbymajorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
