import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component'; // import new component
import { HttpClientModule } from '@angular/common/http';
import { HoverDirective } from './hover.directive';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from './search.pipe';
import { HomePageComponent } from './home-page/home-page.component';
import { SetupPageComponent } from './setup-page/setup-page.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent, // registration new component
    HoverDirective, // registration new directive
    SearchPipe, // registration new pipe
    HomePageComponent,
    SetupPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, // for http
    FormsModule // for suppor ngModel
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
