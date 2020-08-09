import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxBootstrapDialogModule } from 'ngx-bootstrap-dialog';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    NgxBootstrapDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
