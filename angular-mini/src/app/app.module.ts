import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component'; // import new component
import { HttpClientModule } from '@angular/common/http';
import { HoverDirective } from './hover.directive';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent, // registration new component
    HoverDirective // registration new directive
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
