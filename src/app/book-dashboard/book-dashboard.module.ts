import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartjsModule } from '@ctrl/ngx-chartjs';
import { BookDashboardService } from '@app/book-dashboard/service/book-dashboard.service';
import { SharedModule } from '@app/shared';
import { BookDashboardRoutingModule } from './book-dashboard-routing.module';
import { CardBookComponent } from './component/card-book/card-book.component';
import { BookDashboardComponent } from './component/book-dashboard.component';
import { ListAuthorsService } from '@app/book-dashboard/service/book-authors.service';

@NgModule({
  declarations: [BookDashboardComponent, CardBookComponent],
  imports: [
    CommonModule,
    BookDashboardRoutingModule,
    SharedModule,
    ChartjsModule
  ],
  providers: [BookDashboardService, ListAuthorsService]
})
export class BookDashboardModule {}
