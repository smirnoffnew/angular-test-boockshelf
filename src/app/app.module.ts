import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { SharedModule } from '@app/shared';
import { CoreModule } from '@app/core';

import { SettingsModule } from './settings';
import { StaticModule } from './static';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import  {Reducer}  from '@app/book-dashboard/_redux/reducer';
import { BookResolvers } from '@app/book-dashboard/_resovers/bookResolvers';
import { BookDashboardService } from '@app/book-dashboard/service/book-dashboard.service';
import { ListAuthorsService } from '@app/book-dashboard/service/book-authors.service';

@NgModule({
  imports: [
    // angular
    BrowserAnimationsModule,
    BrowserModule,

    // core & shared
    CoreModule,
    SharedModule,

    // features
    StaticModule,
    SettingsModule,
    StoreModule.forRoot({ store: Reducer }),

    // app
    AppRoutingModule
  ],
  declarations: [AppComponent],
  providers: [BookResolvers, BookDashboardService, ListAuthorsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
