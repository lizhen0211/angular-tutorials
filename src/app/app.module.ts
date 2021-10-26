import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CookieDemoComponent} from './pages/cookie-demo/cookie-demo.component';
import {HttpClientModule} from "@angular/common/http";
import {HomeComponent} from './pages/home/home.component';
import {RedisDemoComponent} from './pages/redis-demo/redis-demo.component';
import {ProdiversDemoComponent} from './pages/prodivers-demo/prodivers-demo.component';
import {NormalService} from "./service/normal.service";
import {RealService} from "./service/real.service";
import {DbDemoComponent} from './pages/db-demo/db-demo.component';
import { RouteDemoComponent } from './pages/route-demo/route-demo.component';
import { RouteDemoDetailComponent } from './pages/route-demo-detail/route-demo-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CookieDemoComponent,
    HomeComponent,
    RedisDemoComponent,
    ProdiversDemoComponent,
    DbDemoComponent,
    RouteDemoComponent,
    RouteDemoDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  // userClass: NormalService被注入为 RealService，且不是同一个实例
  // useExisting:NormalService被注入为 RealService，且为同一个实例
  providers: [{provide: NormalService, useExisting: RealService}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
