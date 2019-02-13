import {Directive, ElementRef, OnDestroy, OnInit} from '@angular/core';

import CanvasNest from 'canvas-nest.js';

const _canvasNestConfig = {
  color: '0,0,255',
  opacity: 0.7,
  zIndex: -2,
  count: 100,
};

@Directive({
  selector: '[appCanvasNest]'
})
export class CanvasNestDirective implements OnInit, OnDestroy {

  private _canvasNest;

  ngOnInit(): void {
    console.log('CanvasNestDirective  -> ngOnInit');
  }

  ngOnDestroy(): void {
    console.log('CanvasNestDirective  -> ngOnDestroy');
    this._canvasNest.destroy();
  }

  constructor(private el: ElementRef) {
    console.log('CanvasNestDirective  -> constructor', el.nativeElement);
    this._canvasNest = new CanvasNest(el.nativeElement, _canvasNestConfig);
  }

}
