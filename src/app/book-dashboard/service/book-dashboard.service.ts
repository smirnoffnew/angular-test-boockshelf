import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { BookDashboard } from '../models/book';

@Injectable()
export class BookDashboardService {
  private URL: String = '/Books';
  constructor( private httpClient: HttpClient ) {}

  listBook (): Observable<BookDashboard[] | any> {
    return this.httpClient.get (environment.bookDashboarApi + this.URL);
  }
}
