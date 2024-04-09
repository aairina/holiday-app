import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HolidayApiService } from '../holiday-api.service';
import iso3166 from 'iso-3166-1';
import { countries } from '../countries';


@Component({
  selector: 'app-form-date-country',
  templateUrl: './form-date-country.component.html',
  styleUrl: './form-date-country.component.css',
})
export class FormDateCountryComponent {
  form!: FormGroup;
  submittedSuccessfully: boolean = false;
  selectedDate!: Date;
  selectedCountry!: string;
  formattedDate!: string;
  formattedCountry!: string;
  isHolidayListEmpty: boolean = false;
  countries = countries


  constructor(
    private fb: FormBuilder,
    private holidayService: HolidayApiService
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      date: [new Date(), Validators.required],
      country: ['', Validators.required],
    });
  }

  submitForm() {
    if (this.form.valid) {
      this.selectedDate = this.form.value.date;
      this.selectedCountry = this.form.value.country;
      this.formatDate();
      this.convertToCountry();
      this.holidayService
        .getHolidays(this.selectedCountry, this.selectedDate)
        .subscribe(
          (data) => {
            this.submittedSuccessfully = true;
            console.log('Holiday List Data:', data);
            data.forEach((element: any) => {
              console.log(element);
            });
            this.isHolidayListEmpty = data.length === 0;
            this.holidayService.setHolidayData(data);
          },
          (error) => {
            console.error('Error fetching holidays:', error);
          }
        );
      console.log('Selected Date:', this.selectedDate);
      console.log('Selected Country:', this.selectedCountry);
    }
  }

  formatDate() {
    this.formattedDate = new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: '2-digit',
    }).format(this.selectedDate);
  }

  convertToCountry() {
    this.formattedCountry =
      iso3166.whereAlpha2(this.selectedCountry)?.country ?? 'Unknown Country';
  }
}
