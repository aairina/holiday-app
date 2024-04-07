import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HolidayApiService } from '../holiday-api.service';


@Component({
  selector: 'app-form-date-country',
  templateUrl: './form-date-country.component.html',
  styleUrl: './form-date-country.component.css',
})
export class FormDateCountryComponent {
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private holidayService: HolidayApiService
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      date: [new Date(), Validators.required],
      country: ['US', Validators.required],
    });
  }

  submitForm() {
    if (this.form.valid) {
      const selectedDate = this.form.value.date;
      const selectedCountry = this.form.value.country;
//SEND HOLIDAYS TO HOLIDAY LIST!!!!!!
      this.holidayService.getHolidays(selectedCountry, selectedDate).subscribe(
        (data) => {
          console.log('Holiday List Data:', data);
          data.forEach((element: any) => {console.log(element)});
          this.holidayService.setHolidayData(data);
        },
        (error) => {
          console.error('Error fetching holidays:', error);
        }
      );
      console.log('Selected Date:', selectedDate);
      console.log('Selected Country:', selectedCountry);
    }
  }
}
