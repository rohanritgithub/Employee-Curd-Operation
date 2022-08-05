import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';import { AsyncSubject, BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';
 '@angular/forms'

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http:HttpClient,private forms:ReactiveFormsModule) { }

  saveEmployee(){

  }

  getcustomer(){
    return this.http.get('https://jsonplaceholder.typicode.com/users/1/todos')
  }

  userinfo = [{"Name":"Stive","Mark":94,"Age":22},{"Name":"Smith","Mark":84,"Age":21},{"Name":"Miller","Mark":98,"Age":20}]

  Getdata(){
    return this.userinfo;
  }

  // apiurl = "https://jsonplaceholder.typicode.com/users/1/todos";

  // Getallemp(){
  //   return this.http.get(this.apiurl);
  // } // Covid info not used 


  posturl="https://httpbin.org/post"; //post data url

 

  Islogedin(){
    return localStorage.getItem('procedlogin')!=null;
  }


  tokenresp:any

  Getrolebytoken(token:any){
    let _token = token.split('.')[1]
    this.tokenresp=JSON.parse(atob(_token))
    console.log(this.tokenresp)
  }
 
  StatusInfo(){
    const deliverystatus$=new Observable(item=>{
      item.next("Created");

      setTimeout(()=>{
        item.next('Order Processed')
      },2000);
      setTimeout(()=>{
        item.next('Order Confirmed')
      },4000);
      setTimeout(()=>{
        item.next('Out of Delivery')
      },6000);
      setTimeout(()=>{
        item.next('Delivered')
      },8000);

    })
    return deliverystatus$
  }

  subjectstatus$=new Subject<number>();

  bsubjectstatus$=new BehaviorSubject<string>("Not Started");

  rsubjectstatus$=new ReplaySubject<number>(3);

  asubjectstatus$=new AsyncSubject<string>();
}



