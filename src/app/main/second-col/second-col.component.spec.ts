import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondColComponent } from './second-col.component';

describe('SecondColComponent', () => {
  let component: SecondColComponent;
  let fixture: ComponentFixture<SecondColComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondColComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondColComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
