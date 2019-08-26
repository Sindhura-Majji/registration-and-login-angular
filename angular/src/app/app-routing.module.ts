import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  
  {
    path:'login',
    component:LoginComponent
  },
  // {
  //   path:'',
  //   redirectTo:'/sign-up',
  //   pathMatch:'full'
  // },
  // // {
  //   path :'SignUp',component: UserRegisterComponent
  // }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
