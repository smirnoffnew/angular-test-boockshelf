import { AuthorDashboard } from '@app/book-dashboard/models/author';

export class BookDashboard {
  Description: string;
  Excerpt: string;
  ID: number;
  PageCount: number;
  PublishDate: string;
  Title: string;
  author?: string | AuthorDashboard;
}
