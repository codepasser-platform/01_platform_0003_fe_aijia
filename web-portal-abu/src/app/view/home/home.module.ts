import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
/** bootstrap **/
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
/** fontawsome **/
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {far} from '@fortawesome/free-regular-svg-icons';
import {fab} from '@fortawesome/free-brands-svg-icons';

import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home.component';

library.add(fas, far, fab);

@NgModule({
  imports: [
    CommonModule,
    NgbModule.forRoot(),
    FontAwesomeModule,
    HomeRoutingModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule {
}
