import {Component, ElementRef, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit, OnDestroy {

  signInfo: any = {
    email: '',
    password: '',
    rePassword: ''
  };

  emailAllowUp: boolean = false;
  emailFoldedUp: boolean = false;
  passwordAllowUp: boolean = false;
  passwordFoldedUp: boolean = false;
  rePasswordAllowUp: boolean = false;
  rePasswordFoldedUp: boolean = false;

  canvasWrapper: any;
  canvas: any;
  canvasImg: any;
  ctx: any;

  constructor(public el: ElementRef) {
  }

  ngOnInit() {
    this.canvasInitialize();
  }

  ngOnDestroy(): void {
    this.canvasOnDestroy();
  }

  emailInputHandler() {
    console.log('SignUpComponent -> emailInputHandler', this.signInfo.email);
    this.emailAllowUp = (this.signInfo.email && this.signInfo.email.length > 0);
  }

  passwordInputHandler() {
    console.log('SignUpComponent -> passwordInputHandler', this.signInfo.password);
    this.passwordAllowUp = (this.signInfo.password && this.signInfo.password.length > 0);
    // this.canvasRender();
  }

  rePasswordInputHandler() {
    console.log('SignUpComponent -> rePasswordInputHandler', this.signInfo.rePassword);
    this.rePasswordAllowUp = (this.signInfo.rePassword && this.signInfo.rePassword.length > 0);
  }

  emailSubmitHandler() {
    console.log('SignUpComponent -> emailSubmitHandler');
    this.emailFoldedUp = true;
  }

  passwordSubmitHandler() {
    console.log('SignUpComponent -> passwordSubmitHandler');
    this.passwordFoldedUp = true;
  }

  rePasswordSubmitHandler() {
    console.log('SignUpComponent -> rePasswordSubmitHandler');
    this.rePasswordFoldedUp = true;
  }

  /** canvas **/
  canvasInitialize() {
    console.log('SignUpComponent -> canvasInitialize');
    this.canvasImg = new Image();
    this.canvasImg.src = '../../../../assets/imgs/sign/sign-in-1.png';
    this.canvas = this.el.nativeElement.querySelector('canvas');
    this.canvasWrapper = this.el.nativeElement.querySelector('.canvas-wrap');
    this.ctx = this.canvas.getContext('2d');
    console.log(this.canvas, this.canvasWrapper, this.canvasImg, this.ctx);
    this.canvasResizeRegister();
    this.canvasResize();
    this.canvasRender();
  }

  canvasOnDestroy() {
    console.log('SignUpComponent -> canvasOnDestroy');
    window.removeEventListener('resize', this.canvasResize);
    this.canvasImg = undefined;
    this.canvas = undefined;
    this.canvasWrapper = undefined;
    this.ctx = undefined;
  }

  canvasResizeRegister() {
    console.log('SignUpComponent -> canvasResizeRegister');
    const _self = this;
    window.addEventListener('resize', () => {
      _self.canvasResize();
      _self.canvasRender();
    });
  }

  canvasResize() {
    console.log('SignUpComponent -> canvasResize');
    this.canvas.width = this.canvasWrapper.offsetWidth;
    this.canvas.height = this.canvasWrapper.offsetHeight;
  }

  canvasRender() {
    console.log('SignUpComponent -> canvasRender');
    const w = this.canvasWrapper.offsetWidth;
    const h = this.canvasWrapper.offsetHeight;

    let wrapperRatio;
    let newWidth;
    let newHeight;
    let newX;
    let newY;

    newWidth = w;
    newHeight = h;
    newX = 0;
    newY = 0;
    wrapperRatio = newWidth / newHeight;

    let pxFactor = 10;

    if (wrapperRatio > 1) {
      newHeight = Math.round(w / 1);
      newY = (h - newHeight) / 2;
    }
    else {
      newWidth = Math.round(h * 1);
      newX = (w - newWidth) / 2;
    }

    // pxFactor will depend on the current typed password.
    // values will be in the range [1,100].
    const size = pxFactor * 0.01;

    // turn off image smoothing - this will give the pixelated effect
    this.ctx.mozImageSmoothingEnabled = size === 1 ? true : false;
    this.ctx.webkitImageSmoothingEnabled = size === 1 ? true : false;
    this.ctx.imageSmoothingEnabled = size === 1 ? true : false;

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    // draw original image to the scaled size
    this.ctx.drawImage(this.canvasImg, 0, 0, w * size, h * size);
    // then draw that scaled image thumb back to fill canvas
    // As smoothing is off the result will be pixelated
    this.ctx.drawImage(this.canvas, 0, 0, w * size, h * size, newX, newY, newWidth + .05 * w, newHeight + .05 * h);
  }
}
