import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MasterService } from '../service/master.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,private formbuilder:FormBuilder,private service:MasterService) {
    
    localStorage.clear();
    
    // setTimeout(()=>{
    //   this.service.rsubjectstatus$.subscribe(x=>console.log("Subject from login "+x) );
    // },5000); // replaysubject is not working
  }

  reactiveform = new FormGroup({
    username: new FormControl("",Validators.required),
    password: new FormControl("",Validators.required)
  });
  
  ngOnInit(): void {
  }

  responsedata:any;

  procedlogin(id:any,password:any){
    localStorage.setItem("login",id)
    localStorage.setItem("password",password)
    this.router.navigate(['']);
  }

}
