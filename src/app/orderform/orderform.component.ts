import { Component, OnInit } from '@angular/core';
import { OrderService, OrderModel} from '../HelperServices/orderService';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from '../HelperServices/must-match.validator';
@Component({
  selector: 'app-orderform',
  templateUrl: './orderform.component.html',
  styleUrls: ['./orderform.component.css']
})
export class OrderformComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  order: OrderModel = new OrderModel("","","","","","");
  constructor(private formBuilder: FormBuilder,private orderservice: OrderService) { }


  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      rqstName: ['', Validators.required],
      svcName: ['', Validators.required],
      quantity: ['', Validators.required],
      price: ['', Validators.required],
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
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }
  
  createOrder():void{
    
    this.orderservice.createOrder(this.order).subscribe(data=>{alert("Order is Created!!");});
  };

}
