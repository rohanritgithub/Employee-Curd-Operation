import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormControl,FormGroup,Validator, Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { MasterService } from '../service/master.service';

@Component({
  selector: 'app-loginval',
  templateUrl: './loginval.component.html',
  styleUrls: ['./loginval.component.css']
})
export class LoginvalComponent implements OnInit {

  reactiveform!: FormGroup;

  saveresp:any;
  constructor(private formbuilder:FormBuilder,private service:MasterService,private router:Router ) { 

    this.reactiveform = this.formbuilder.group({
      loginid:new FormControl('',Validators.compose([Validators.required,Validators.minLength(6)])),
      password:new FormControl('',Validators.required),
      confirmpassword:new FormControl('',Validators.required),
    },
    {
      validators:this.Mustmatch('password','confirmpassword')
    })
  }

  get f(){
    return this.reactiveform.controls;
  }

  Mustmatch(password:any,confirmpassword:any){
    return (formGroup:FormGroup)=>{      

      const passwordcon = formGroup.controls[password];
      const confirmpasswordcontrol = formGroup.controls[confirmpassword];

      if(confirmpasswordcontrol.errors && !confirmpasswordcontrol.errors['Mustmatch']){
        return;
      };

      if(passwordcon.value !== confirmpasswordcontrol.value) {
        confirmpasswordcontrol.setErrors({Mustmatch:true})
      }else{
        confirmpasswordcontrol.setErrors(null)
      };

    }
    
  }


  ngOnInit(): void {
  }

  proced(){
    this.router.navigate(['']);
  }


}
