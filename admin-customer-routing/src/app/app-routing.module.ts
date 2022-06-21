import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './admin/customer/add/add.component';

const routes: Routes = [
  {path:"admin",loadChildren:()=>import("./admin/admin.module").then(mod=>mod.AdminModule)},
  {path:"",redirectTo:"admin" , pathMatch:"full"},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
