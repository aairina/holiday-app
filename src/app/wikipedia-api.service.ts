import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WikipediaApiService {
  constructor() {}
  async getRandomHolidayArticle() {
    const response = await fetch(
      'https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&list=categorymembers&cmtitle=Category:Holiday_stubs&cmlimit=max'
    );
    const data = await response.json();

    const articles = data.query.categorymembers;
    const randomIndex = Math.floor(Math.random() * articles.length);
    const randomArticle = articles[randomIndex];

    return this.getArticleContent(randomArticle.title);
  }

  private async getArticleContent(title: string) {
    const response = await fetch(`https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&prop=extracts&exintro&explaintext&redirects=1&titles=${encodeURIComponent(title)}`);
    const data = await response.json();

    const pageId = Object.keys(data.query.pages)[0];
    const content = data.query.pages[pageId].extract;

    return {
      title: data.query.pages[pageId].title,
      content: content
    };
  }
}
