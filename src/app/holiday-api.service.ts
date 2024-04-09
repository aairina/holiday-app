import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HolidayApiService {
  private apiKey = '98cdf5a5fb1846ce9425e35e1bff8afa';
  private apiUrl = 'https://holidays.abstractapi.com/v1/?';

  private holidayDataSubject = new BehaviorSubject<any>(null);

  constructor(private http: HttpClient) {}

  getHolidays(countryCode: string, date: Date): Observable<any> {
    console.log('date full obj: ', date)
    const url = `${this.apiUrl}api_key=${
      this.apiKey
    }&country=${countryCode}&year=${date.getFullYear()}&month=${date.getMonth()+1}&day=${date.getDate()}`;
    return this.http.get(url);
  }

  setHolidayData(data: any) {
    this.holidayDataSubject.next(data);
  }

  getHolidayData(): Observable<any> {
    return this.holidayDataSubject.asObservable();
  }

}
