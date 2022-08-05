import { Component, OnInit } from '@angular/core';
import { MasterService } from 'src/app/service/master.service';




@Component({
  selector: 'app-viewcustomer',
  templateUrl: './viewcustomer.component.html',
  styleUrls: ['./viewcustomer.component.css']
})
export class ViewcustomerComponent implements OnInit {


  post:any;

  constructor(private service:MasterService) { 
    
   }

  ngOnInit(): void {
  }


}
