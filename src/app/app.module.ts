/* Main module for the application */

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

// Components specific to application
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { StateListComponent } from './state-list/state-list.component';
import { StateCardComponent } from './state-list/state-card/state-card.component';
import { FooterComponent } from './footer/footer.component';

// 3rd party libraries
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StateListComponent,
    StateCardComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbModule.forRoot(),
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
