import { Component } from '@angular/core';
import { WikipediaApiService } from '../wikipedia-api.service';


@Component({
  selector: 'app-random-holiday',
  templateUrl: './random-holiday.component.html',
  styleUrl: './random-holiday.component.css'
})
export class RandomHolidayComponent {

  article: any;

  constructor(private wikipediaApiService: WikipediaApiService) { }

  ngOnInit(): void {
    this.wikipediaApiService.getRandomHolidayArticle().then(article => {
      this.article = article;
    });
  }

  refresh(){
    window.location.reload();
  }

}
