import { Component, DoCheck, OnInit, ViewChild } from '@angular/core';
import { MasterService } from './service/master.service';
import { LoginComponent } from './users/login/login.component';
import {FormBuilder,FormControl,FormGroup, Validators} from '@angular/forms';
import { first, map, max, Observable, observable, of, pipe } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

  @ViewChild(LoginComponent) viewdata !:LoginComponent 

  SetSession(){
    sessionStorage.setItem('userid','user')
  }
  GetSession(){
    console.log(sessionStorage.getItem('userid'))
  }

  SetSession1(){
    localStorage.setItem('userid','user')
  }
  GetSession1(){
    console.log(localStorage.getItem('userid'))
  }
  Remove(){
    localStorage.clear();
  }


  title = 'angular';
  length = 100;
  b=50;

  inputname='';
  inputscore='';
  inputobj={"name":"","score":""}

  

  Transferdata(name:any,score:any){
    this.inputname=name
    this.inputscore=score
    this.inputobj={name:'name',score:'score'}
    this.viewdata.updateobj(this.inputobj)
  }

  amount=2000.108

  Title='Hello welcome'
  json={"name":"rohan"}
  currentdate=new Date()
  percentage=2.409

  inputdata='';

  Getdata(data:any){
    console.log(data)
  }

  itemdisabled=false;

  color="red";

  classname="special";
  isspecial=true;

  list = ['Jeans','T-shirt','Shirt','jacket','shoes','slipper']

  style={
    'font-style':'italic',
    'color':'blue'
  }

  inputtype="text";

  action(){
    console.log(this.inputtype)
  }

  userlist:any;
  array=[1,2,3]

  reactiveform!: FormGroup;

  constructor(private service:MasterService,private formbuilder:FormBuilder){

    this.service.subjectstatus$.next(25);
    this.service.subjectstatus$.subscribe(a=> console.log("Subject from app"+a)); //Subject
    
    this.service.bsubjectstatus$.subscribe(a=> console.log("Subject from app"+a)); //Behaviour subject

    this.service.rsubjectstatus$.subscribe(x=>console.log("reply subject from app "+x))
    this.service.rsubjectstatus$.next(5);
    this.service.rsubjectstatus$.next(4);
    this.service.rsubjectstatus$.next(3);
    this.service.rsubjectstatus$.next(2);
    this.service.rsubjectstatus$.next(1);

    this.service.asubjectstatus$.subscribe(x=>console.log("Asyn from app "+x))
    this.service.asubjectstatus$.next("New");
    this.service.asubjectstatus$.next("Open");
    this.service.asubjectstatus$.next("Active");
    this.service.asubjectstatus$.next("Closed");
    this.service.asubjectstatus$.complete();

    // setTimeout(()=>{
    //   this.service.bsubjectstatus$.next("IN Progess")
    // },2000)
    // setTimeout(()=>{
    //   this.service.bsubjectstatus$.next("completed")
    // },4000) //Behaviour subject


    // setTimeout(()=>{
    //   this.service.subjectstatus$.next(45)
    // },2000)
    // setTimeout(()=>{
    //   this.service.subjectstatus$.next(145)
    // },4000) // Subject

    this.userlist=this.service.Getdata()
    console.log(this.userlist)
    this.reactiveform = this.formbuilder.group({
      login:new FormControl('',Validators.compose([Validators.required,Validators.minLength(6)])),
      password:new FormControl('',Validators.required),
      confirmpassword:new FormControl('',Validators.required),
    })

    const result =of(1,2,3,4)
    result.pipe(map(a=>a*10)).subscribe(x=>console.log("Pipe operato "+x));
    const result1 = of(this.array)
    console.log(result1)



  } //constructor close

  get form(){
    return this.reactiveform.controls;
  }

  usersobs:any;
  robservable$:any;
  currentstatus:any

  ngOnInit(): void {

    this.usersobs=[''];
    this.robservable$=of(this.usersobs);
    console.log(this.robservable$);
    new Observable(item=>{

      setTimeout(()=>{
        item.next('In progress')
      },2000);

      setTimeout(()=>{
        item.next('pending')
      },4000);

      setTimeout(()=>{
        item.next('Completed')
      },6000);
    }).subscribe(result=>{
      this.currentstatus=result
    });
    
  }

}
