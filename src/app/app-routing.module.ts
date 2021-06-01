import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CookieDemoComponent} from "./pages/cookie-demo/cookie-demo.component";

const routes: Routes = [
  {path: '', redirectTo: 'cookie', pathMatch: 'full'}, {
    path: 'cookie', component: CookieDemoComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
