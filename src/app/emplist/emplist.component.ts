import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../service/employee.service';


@Component({
  selector: 'app-emplist',
  templateUrl: './emplist.component.html',
  styleUrls: ['./emplist.component.css']
})
export class EmplistComponent implements OnInit {

  emplist:any;
  employeedata$:any;
  
  constructor(private service:EmployeeService) {
    this.service.Getallemp().subscribe(result=>{
      this.emplist=result; 
    })
   }
  
  ngOnInit(): void {
  }

}
