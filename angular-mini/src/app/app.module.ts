import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component'; // import new component
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent // registration new component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule // for http
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
