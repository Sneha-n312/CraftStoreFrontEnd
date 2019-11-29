import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { SignUpService, ServiceProvider } from '../HelperServices/signupService'
import { MustMatch } from '../HelperServices/must-match.validator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup1',
  templateUrl: './signup1.component.html',
  styleUrls: ['./signup1.component.css']
})
export class Signup1Component implements OnInit {

  registerForm: FormGroup;
  submitted = false;


  sp: ServiceProvider = new ServiceProvider("", "", "", "", "", "", "");
  constructor(private formBuilder: FormBuilder,private signupservice: SignUpService, private router:Router) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      companyName: ['', Validators.required],
      pass: ['', [Validators.required, Validators.minLength(6)]],
      re_pass: ['', Validators.required]

    }, {
      validator: MustMatch('pass', 're_pass')
    });
  }


  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    // display form values on success
    this.signupservice.createServiceProvider(this.sp).subscribe(data => { alert("Service Provider is Created!!"); });
    this.router.navigate(['spform']);
    //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }


  createServiceProvider(): void {

    
  };

}
