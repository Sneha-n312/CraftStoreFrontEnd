import { Component, OnInit } from '@angular/core';
import { RequestService, RequestModel} from '../HelperServices/requestService';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from '../HelperServices/must-match.validator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-requestform',
  templateUrl: './requestform.component.html',
  styleUrls: ['./requestform.component.css']
})
export class RequestformComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  rqst: RequestModel = new RequestModel("","","","","","");
  constructor(private formBuilder: FormBuilder,private requestservice: RequestService,private router:Router) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      category:['', Validators.required],
      quantity: ['', Validators.required],
      desc: ['', Validators.required],
      spName: ['', Validators.required],
      bName: ['', Validators.required],
      

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
    this.requestservice.createRequest(this.rqst).subscribe(data=>{alert("Request is Created!!");});
    this.router.navigate(['services']);
   // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }

  createRequest():void{
    
    
  };

}
