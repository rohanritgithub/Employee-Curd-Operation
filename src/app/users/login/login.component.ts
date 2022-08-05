import { Component, Input, OnInit } from '@angular/core';
import { MasterService } from 'src/app/service/master.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input() namedata:any;
  @Input() scoredata:any;
  @Input() objdata:any;

  listarray=[{"name":"Ravi","mark":95}]

  constructor(private service:MasterService) {  }

  

  updateobj(obj:any){
    this.listarray.push(obj)
  }

  

  ngOnInit(): void {
  }

}
