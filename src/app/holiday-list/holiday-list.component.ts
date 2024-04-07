import { Component, OnInit } from '@angular/core';
import { HolidayApiService } from '../holiday-api.service';


@Component({
  selector: 'app-holiday-list',
  templateUrl: './holiday-list.component.html',
  styleUrls: ['./holiday-list.component.css'],
})
export class HolidayListComponent implements OnInit {
  countryCode: string = "US";
  holidays: any[] = []

  constructor(private holidayApiService: HolidayApiService) {}

  ngOnInit() {
    this.holidayApiService.getHolidayData().subscribe((data) => {
      this.holidays = data;
    });
  }
}
