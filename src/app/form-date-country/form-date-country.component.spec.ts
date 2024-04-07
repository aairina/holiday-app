import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDateCountryComponent } from './form-date-country.component';

describe('FormDateCountryComponent', () => {
  let component: FormDateCountryComponent;
  let fixture: ComponentFixture<FormDateCountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormDateCountryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormDateCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
