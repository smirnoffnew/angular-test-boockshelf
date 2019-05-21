import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { BookDashboard } from '../models/book';
import { ChartData } from 'chart.js';
import { BookDashboardService } from '../service/book-dashboard.service';
import { ListAuthorsService } from '../service/book-authors.service';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { BookResolvers } from '../_resovers/bookResolvers';

@Component({
  selector: 'anms-book-dashboard',
  templateUrl: './book-dashboard.component.html',
  styleUrls: ['./book-dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookDashboardComponent implements OnInit {

  public bookDashboard$: any = [];
  public isOpenAuthor: Boolean = false;
  public data: ChartData = {};
  private monthNames: string[] = [
    'January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August', 'September',
    'October', 'November', 'December'
  ];

  constructor(
    private dashboardService: BookDashboardService,
    private listAuthors: ListAuthorsService,
    private store: Store<any>,
    private resolve: BookResolvers
  ) {}

  ngOnInit() {
    this.resolve.resolvers();
    this.bookDashboard$ = this.store.select('store')
      .pipe(
         map(store => {
           this.generateChartConfig(store);
           return this.getRandomCounterBooks(store.books, 4);
        })
      )
  }

  generateChartConfig(store){
    this.data = {
      labels: [...this.monthNames],
      datasets: [{
        type: 'line',
        label: 'pages Books in every month',
        data: this.filterMonth(store.books, this.monthNames),
        fill: false,
        backgroundColor: ['rgba(255, 99, 132, 0.2)'],
        borderColor: ['rgb(255, 99, 132)'],
        borderWidth: 1,
      }]
    }
  }

  getRandomCounterBooks(books: BookDashboard[], count: number) {
    const randomBook: BookDashboard[] = [];
    if (books[this.randomNumber(books)]) {
      for (let i = 0; i < count; i++) {
        randomBook.push(books[this.randomNumber(books)]);
      }
    }
    return randomBook;
  }

  randomNumber = arr => Math.floor(Math.random() * (arr.length - 0));

  toggle = () => (this.isOpenAuthor = !this.isOpenAuthor);

  filterMonth = (books: BookDashboard[], month: string[]) => {
    return month.map( (monthItem, monthIndex) => {
      return books
        .filter(bookItem => new Date(bookItem.PublishDate).getMonth() === monthIndex)
        .reduce( (a, b) => a + b.PageCount, 0 );
    })
  }
}
