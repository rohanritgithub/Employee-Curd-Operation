import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { ViewcustomerComponent } from './viewcustomer/viewcustomer.component';


import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    ViewcustomerComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,MatCardModule,MatInputModule
  ]
})
export class CustomerModule { }
