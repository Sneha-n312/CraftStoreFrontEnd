import { Component, OnInit } from '@angular/core';
import { ServiceProvider, SignUpService } from '../HelperServices/signupService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin-sp',
  templateUrl: './signin-sp.component.html',
  styleUrls: ['./signin-sp.component.css']
})
export class SigninSPComponent implements OnInit {

  mail: string = ""
  password: string = ""
  sp: ServiceProvider = new ServiceProvider("", "", "", "", "", "", "");
  errorMessage: string = "";
  isUserError: boolean;
  isPasswordError: boolean;
  passwordmsg: string = "";
  constructor(private spService: SignUpService, private router: Router) { }

  ngOnInit() {

  }

  checkMatch(mail) {
    this.isPasswordError = false;
    this.isUserError = false;
    console.log("checkMatchFuncation")
    this.spService.findSPByEmail(mail).subscribe(response => {
      this.handleSuccessfulResponse(response)
      

    },
      error => { this.errorMessage = "User is not found in the database"; this.isUserError = true; });

  }
  // this.spService.findSPByEmail()

  handleSuccessfulResponse(response) {

    this.sp = response;
    console.log(this.sp)
    this.checkMatchUtil(this.sp)



  }

  checkMatchUtil(sp: ServiceProvider) {

    if (sp.password == this.password) {
      this.router.navigate(['/requestservice', this.mail]);
    }
    else {
      this.isPasswordError = true;
      this.passwordmsg = "Password do not match with the user";
    }
  }

}