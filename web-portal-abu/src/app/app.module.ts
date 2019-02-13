import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
/** bootstrap **/
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
/** fontawsome **/
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {far} from '@fortawesome/free-regular-svg-icons';
import {fab} from '@fortawesome/free-brands-svg-icons';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DirectivesModule} from "./directives/directives.module";

library.add(fas, far, fab);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FontAwesomeModule,
    DirectivesModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
