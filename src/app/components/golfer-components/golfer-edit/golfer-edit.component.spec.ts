import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GolferEditComponent } from './golfer-edit.component';

describe('GolferEditComponent', () => {
  let component: GolferEditComponent;
  let fixture: ComponentFixture<GolferEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GolferEditComponent]
    });
    fixture = TestBed.createComponent(GolferEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
