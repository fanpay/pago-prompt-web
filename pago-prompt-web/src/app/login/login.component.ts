import { Component, OnInit,} from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthenticationService} from "../services/authentication.service";
import {SignInData} from "../model/signInData";
import * as bootstrap from 'bootstrap';

declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  isFormValid = true;
  areCredentialsInvalid = false;

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

  onSubmit(signInForm: NgForm) {
    if (!signInForm.valid) {
      this.isFormValid = false;
      this.areCredentialsInvalid = false;
      this.openPopup();
      return;
    }
    this.checkCredentials(signInForm);
  }

  private checkCredentials(signInForm: NgForm) {
    const signInData = new SignInData(signInForm.value.login, signInForm.value.password);
    if (!this.authenticationService.authenticate(signInData)) {
      this.isFormValid = true;
      this.areCredentialsInvalid = true;
      this.openPopup();
      return;
    }
  }

  openPopup() {
    const myModal = new bootstrap.Modal('#successModal', {
      focus: true,
      backdrop: true
    })

    myModal.show()
  }

}
