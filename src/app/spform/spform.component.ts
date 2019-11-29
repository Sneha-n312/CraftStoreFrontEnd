import { Component, OnInit } from '@angular/core';
import { SpFormService, ServiceModel} from '../HelperServices/spformService';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from '../HelperServices/must-match.validator';
import { Router } from '@angular/router';


@Component({
  selector: 'app-spform',
  templateUrl: './spform.component.html',
  styleUrls: ['./spform.component.css']
})
export class SpformComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;

  sp: ServiceModel = new ServiceModel("","","");
  constructor(private formBuilder: FormBuilder,private spformservice: SpFormService, private router:Router) { }

  

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      svcName: ['', Validators.required],
      category: ['', Validators.required],
      desc: ['', Validators.required],
      

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
    this.spformservice.createSPForm(this.sp).subscribe(data=>{alert("Service Model is Created!!");});
    this.router.navigate(['services']);
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }
  

  createSPForm():void{
    
    
  };

}
