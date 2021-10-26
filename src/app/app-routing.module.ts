import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CookieDemoComponent} from "./pages/cookie-demo/cookie-demo.component";
import {HomeComponent} from "./pages/home/home.component";
import {RedisDemoComponent} from "./pages/redis-demo/redis-demo.component";
import {ProdiversDemoComponent} from "./pages/prodivers-demo/prodivers-demo.component";
import {DbDemoComponent} from "./pages/db-demo/db-demo.component";
import {RouteDemoComponent} from "./pages/route-demo/route-demo.component";
import {RouteDemoDetailComponent} from "./pages/route-demo-detail/route-demo-detail.component";

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {
    path: 'home', component: HomeComponent
  }, {
    path: 'redis', component: RedisDemoComponent
  }, {
    path: 'cookie', component: CookieDemoComponent
  }, {
    path: 'prodivers', component: ProdiversDemoComponent
  }, {
    path: 'db', component: DbDemoComponent
  }, {
    path: 'route', component: RouteDemoComponent
  }, {
    path: 'route-detail', component: RouteDemoDetailComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
