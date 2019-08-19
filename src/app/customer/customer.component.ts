import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, AbstractControl, FormGroup } from "@angular/forms";
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
customer;
invalidName:string[]=['xyz','abc'];
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.customer=this.fb.group({
      firstname:new FormControl(null,[Validators.required,Validators.minLength(3),this.checkFirstName.bind(this)]),
      lastname:new FormControl(null),
      passwordgroup:new FormGroup({
        password:new FormControl(null,Validators.required),
        confirm_password:new FormControl(null,Validators.required)
      },this.matchPassword.bind(this))
    });
  }
  checkFirstName(x:AbstractControl):{[y:string]:boolean}
  {
    let value=x.value;
    if(this.invalidName.indexOf(value)!==-1){
      return{'invalidName':true};
    }
    return null;
  }
  matchPassword(x:AbstractControl):{[y:string]:boolean}
  {
    let password=x.get('password').value;
    let cnfpassword=x.get('confirm_password').value;
    if(password!=cnfpassword){
      return {'passwordNotMatched':true};
    }
return null;
  }
  onSubmit(){
    console.log(this.customer);
  }

}
