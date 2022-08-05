import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-empadd',
  templateUrl: './empadd.component.html',
  styleUrls: ['./empadd.component.css']
})
export class EmpaddComponent implements OnInit {

  Empid:any;
  

  constructor(private route:ActivatedRoute) {
    this.Empid=this.route.snapshot.paramMap.get("id");
   }

  ngOnInit(): void {
  }


}
