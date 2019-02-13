import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  signInfo: any = {
    email: '',
    password: ''
  };

  emailAllowUp: boolean = false;
  emailFoldedUp: boolean = false;
  passwordAllowUp: boolean = false;
  passwordFoldedUp: boolean = false;

  constructor() {
  }

  ngOnInit() {
  }

  emailInputHandler() {
    console.log('SignInComponent -> emailInputHandler', this.signInfo.email);
    this.emailAllowUp = (this.signInfo.email && this.signInfo.email.length > 0);
  }

  passwordInputHandler() {
    console.log('SignInComponent -> passwordInputHandler', this.signInfo.password);
    this.passwordAllowUp = (this.signInfo.password && this.signInfo.password.length > 0);
  }

  emailSubmitHandler() {
    console.log('SignInComponent -> emailSubmitHandler');
    this.emailFoldedUp = true;
  }

  passwordSubmitHandler() {
    console.log('SignInComponent -> passwordSubmitHandler');
    this.passwordFoldedUp = true;
  }
}
