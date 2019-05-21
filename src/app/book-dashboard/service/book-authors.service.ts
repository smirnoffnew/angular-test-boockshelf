import { Injectable } from '@angular/core';
import { ApiService } from '@app/shared/services/_api.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { AuthorDashboard } from '../models/author';

@Injectable()
export class ListAuthorsService {
  private URL: String = '/Authors';
  constructor( private httpClient: HttpClient ) {}

  listAuthors (): Observable<AuthorDashboard[] | any> {
    return this.httpClient.get (environment.bookDashboarApi + this.URL);
  }
}
