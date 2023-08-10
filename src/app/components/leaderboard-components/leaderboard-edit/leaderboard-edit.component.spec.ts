import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaderboardEditComponent } from './leaderboard-edit.component';

describe('LeaderboardEditComponent', () => {
  let component: LeaderboardEditComponent;
  let fixture: ComponentFixture<LeaderboardEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeaderboardEditComponent]
    });
    fixture = TestBed.createComponent(LeaderboardEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
