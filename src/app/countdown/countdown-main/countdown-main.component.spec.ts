import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountdownMainComponent } from './countdown-main.component';

describe('CountdownMainComponent', () => {
  let component: CountdownMainComponent;
  let fixture: ComponentFixture<CountdownMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountdownMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountdownMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
