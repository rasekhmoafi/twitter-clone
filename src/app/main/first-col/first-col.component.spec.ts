import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstColComponent } from './first-col.component';

describe('FirstColComponent', () => {
  let component: FirstColComponent;
  let fixture: ComponentFixture<FirstColComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstColComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstColComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
