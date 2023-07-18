import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreCreateComponent } from './score-create.component';

describe('ScoreCreateComponent', () => {
  let component: ScoreCreateComponent;
  let fixture: ComponentFixture<ScoreCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScoreCreateComponent]
    });
    fixture = TestBed.createComponent(ScoreCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
