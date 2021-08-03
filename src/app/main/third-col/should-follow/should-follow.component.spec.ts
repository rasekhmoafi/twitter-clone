import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShouldFollowComponent } from './should-follow.component';

describe('ShouldFollowComponent', () => {
  let component: ShouldFollowComponent;
  let fixture: ComponentFixture<ShouldFollowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShouldFollowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShouldFollowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
