import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookDashboardComponent } from '@app/book-dashboard/components/book-dashboard.component';
import { CardBookComponent } from '@app/book-dashboard/components/card-book/card-book.component';

const routes: Routes = [
  {
    path: '',
    component: BookDashboardComponent,
    data: { title: 'anms.menu.settings' }
  },
  {
    path: 'detail/:id',
    component: CardBookComponent,
    data: { title: 'anms.menu.settings' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookDashboardRoutingModule {}
