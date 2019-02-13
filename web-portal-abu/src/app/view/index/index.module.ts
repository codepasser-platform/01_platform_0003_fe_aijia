import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
/** bootstrap **/
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
/** fontawsome **/
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {far} from '@fortawesome/free-regular-svg-icons';
import {fab} from '@fortawesome/free-brands-svg-icons';

import {IndexRoutingModule} from './index-routing.module';
import {IndexComponent} from './index.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {SignInComponent} from './sign-in/sign-in.component';
import {SignUpComponent} from './sign-up/sign-up.component';

library.add(fas, far, fab);

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    FontAwesomeModule,
    IndexRoutingModule
  ],
  declarations: [IndexComponent, DashboardComponent, SignInComponent, SignUpComponent]
})
export class IndexModule {
}
