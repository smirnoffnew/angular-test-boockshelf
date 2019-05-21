import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, find, take } from 'rxjs/operators';
import { BookDashboardService } from '../../service/book-dashboard.service';
import { BookDashboard } from '../../models/book';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'anms-card-book',
  templateUrl: './card-book.component.html',
  styleUrls: ['./card-book.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardBookComponent {

  ID: Number;
  bookDashboard$: Observable<BookDashboard>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private dashboardService: BookDashboardService,
    private store: Store<any>
  ) {
    this.bookDashboard$ = this.activatedRoute.paramMap.pipe(

      switchMap((item: any) => {
        this.ID = Number(item.params.id);
        return this.store.select('store')
      }),

      switchMap((item: any) => {
        return [...item.books]
      }),

      find((item: BookDashboard) => item.ID === this.ID),

      take(1)
    );
  }
}
