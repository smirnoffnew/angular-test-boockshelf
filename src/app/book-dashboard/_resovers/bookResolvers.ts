import { Injectable } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { Profile } from '../_services/interface';
import { ProfileService } from '../_services/profile.service';
import { IdentifikatorService } from '../_services/token.service';
import { Actions, GetBooks } from '../_redux/action';
import { Store } from '@ngrx/store';
import { BookDashboardService } from '@app/book-dashboard/service/book-dashboard.service';
import { ListAuthorsService } from '@app/book-dashboard/service/book-authors.service';
import { map } from 'rxjs/operators';
import { AuthorDashboard } from '@app/book-dashboard/models/author';

@Injectable()
export class BookResolvers {
  constructor(
    private dashboardService: BookDashboardService,
    private listAuthors: ListAuthorsService,
    private store: Store<Actions>) {
  }

  resolvers(): Observable<any> | any {
    return combineLatest(
      this.dashboardService.listBook(),
      this.listAuthors.listAuthors()
    )

      .pipe(map(([books, author]) => {
          return books.map((bookItem) => {
            const authorName = author.find((authorItem: AuthorDashboard) => bookItem.ID === authorItem.IDBook);
            return {
              ...bookItem,
              PublishDate: new Date(bookItem.PublishDate).getTime(),
              author: `${authorName.FirstName} ${authorName.LastName}`
            };
          });
        })
      )

      .subscribe(next => {
        this.store.dispatch(new GetBooks(next));
      });

  }
}
