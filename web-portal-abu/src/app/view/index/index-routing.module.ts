import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IndexComponent} from "./index.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {SignInComponent} from "./sign-in/sign-in.component";
import {SignUpComponent} from "./sign-up/sign-up.component";

const routes: Routes = [
  {
    path: '', component: IndexComponent,
    children: [
      {
        path: 'dashboard', component: DashboardComponent
      },
      {
        path: 'sign-in', component: SignInComponent
      },
      {
        path: 'sign-up', component: SignUpComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndexRoutingModule {
}
