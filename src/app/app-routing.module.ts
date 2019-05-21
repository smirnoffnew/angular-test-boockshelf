import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookDashboardModule } from '@app/book-dashboard/book-dashboard.module';

const routes: Routes = [
  {
    path: 'about',
    redirectTo: 'about',
    pathMatch: 'full'
  },
  {
    path: 'book',
    loadChildren: () => BookDashboardModule,
  },
  {
    path: '**',
    redirectTo: 'book'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      scrollPositionRestoration: 'enabled'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
