import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GolferCreateComponent } from './golfer-create.component';

describe('GolferCreateComponent', () => {
  let component: GolferCreateComponent;
  let fixture: ComponentFixture<GolferCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GolferCreateComponent]
    });
    fixture = TestBed.createComponent(GolferCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
