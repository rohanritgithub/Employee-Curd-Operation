import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {UsersModule} from './users/users.module';
import { HeaderComponent } from './header/header.component'
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { EmployeeComponent } from './employee/employee.component';
import { AboutcompanyComponent } from './aboutcompany/aboutcompany.component';
import { EmplistComponent } from './emplist/emplist.component';
import { EmpaddComponent } from './empadd/empadd.component';
import {HttpClientModule} from '@angular/common/http';
import { ErrorComponent } from './error/error.component';
import { AdminRoutingModule } from './admin/admin-routing.module';
import { LoginComponent } from './login/login.component';
import { LoginvalComponent } from './loginval/loginval.component'
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';
import { PolicyComponent } from './policy/policy.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SgdtoinrPipe } from './pipe/sgdtoinr.pipe';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    EmployeeComponent,
    AboutcompanyComponent,
    EmplistComponent,
    EmpaddComponent,
    ErrorComponent,
    LoginComponent,
    LoginvalComponent,
    FooterComponent,
    PolicyComponent,
    NavbarComponent,
    SgdtoinrPipe,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    UsersModule,
    FormsModule,
    HttpClientModule,AdminRoutingModule,ReactiveFormsModule, BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
