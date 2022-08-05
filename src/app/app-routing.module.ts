import { NgModule } from '@angular/core';
import { RouterModule, RouterStateSnapshot, Routes, TitleStrategy } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AboutcompanyComponent } from './aboutcompany/aboutcompany.component';
import { EmpaddComponent } from './empadd/empadd.component';
import { EmplistComponent } from './emplist/emplist.component';
import { EmployeeComponent } from './employee/employee.component';
import { ErrorComponent } from './error/error.component';
import { FormComponent } from './form/form.component';
import { AuthGuard } from './guard/auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LoginvalComponent } from './loginval/loginval.component';
import { PolicyComponent } from './policy/policy.component';
import { PerloadService } from './service/perload.service';



const routes: Routes = [
  {
    path:"",
    component:HomeComponent,
    title:'Home - Epps-erp',
    //canActivate:[AuthGuard]
  },
  {
    component:AboutComponent,
    path:'About',
    title:'About - Epps-erp',
    children:[{component:AboutcompanyComponent,path:'company'}],
    //canActivate:[AuthGuard],
  },
  {
    component:EmployeeComponent,
    path:'Employee',
    title:'Employee - Epps-erp',
    children:[{component:EmplistComponent,path:""},{component:EmpaddComponent,path:'create'},{component:EmpaddComponent,path:'Edit/:id'}],    
    // canActivate:[AuthGuard],
  },
  {
    component:LoginComponent,
    path:"login",
    // title:'Login - Epps-erp',
  },
  {
    loadChildren:()=>import('./user/user.module').then(x=>x.UserModule),
    path:"user",
    title:'User - Epps-erp',
    data:{preload:true},
    // canActivate:[AuthGuard],
  },
  {
    loadChildren:()=>import('./customer/customer.module').then(y=>y.CustomerModule),
    path:"customer",
    title:'Customer - Epps-erp',
    data:{preload:true},
    // canActivate:[AuthGuard],
  },
  {
    component:LoginvalComponent,
    path:"login validation",
    title:'Login Validation - Epps-erp', 
    // canActivate:[AuthGuard],
  },
  {
    component:FormComponent,
    path:"form",
    title:'Form',
  },
  {
    component:PolicyComponent,
    path:"policy",
    title:'Imprint - Epps-erp',
  },
  {
    component:ErrorComponent,
    path:'**'
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:PerloadService})],
  exports: [RouterModule]
})
export class AppRoutingModule extends TitleStrategy{
  updateTitle(snapshot: RouterStateSnapshot): void {
    const title = this.buildTitle(snapshot)
    if(title != undefined){
      document.title='${title}'
    }
  }
}
