import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CookieDemoComponent} from './pages/cookie-demo/cookie-demo.component';
import {HttpClientModule} from "@angular/common/http";
import { HomeComponent } from './pages/home/home.component';
import { RedisDemoComponent } from './pages/redis-demo/redis-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    CookieDemoComponent,
    HomeComponent,
    RedisDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
