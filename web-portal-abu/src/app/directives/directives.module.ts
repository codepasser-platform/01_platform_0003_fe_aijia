import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CanvasNestDirective} from "./canvas-nest.directive";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CanvasNestDirective
  ],
  exports: [
    CanvasNestDirective
  ]
})
export class DirectivesModule {
}
