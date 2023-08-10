import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaderboardCreateComponent } from './leaderboard-create.component';

describe('LeaderboardCreateComponent', () => {
  let component: LeaderboardCreateComponent;
  let fixture: ComponentFixture<LeaderboardCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeaderboardCreateComponent]
    });
    fixture = TestBed.createComponent(LeaderboardCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
