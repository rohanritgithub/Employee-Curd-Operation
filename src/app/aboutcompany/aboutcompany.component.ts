import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutcompany',
  templateUrl: './aboutcompany.component.html',
  styleUrls: ['./aboutcompany.component.css']
})
export class AboutcompanyComponent implements OnInit {

  constructor() { 
    
  }

  classname='special';
  isspecial=false;
  inputvalue='rohan';

  Amount=2.1001;
  sgdrate=57.55;
  contry=['india','USA','UK']

  style={
    'font-style':'italic',
    'color':'blue'
  }

  datachange(){
   console.log(this.inputvalue)   
  }
  ngOnInit(): void {
  }


}
