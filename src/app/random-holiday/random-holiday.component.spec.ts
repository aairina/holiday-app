import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomHolidayComponent } from './random-holiday.component';

describe('RandomHolidayComponent', () => {
  let component: RandomHolidayComponent;
  let fixture: ComponentFixture<RandomHolidayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RandomHolidayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RandomHolidayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
