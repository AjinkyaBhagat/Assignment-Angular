import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AddComponent } from './customer/add/add.component';

const routes: Routes = [
  {path: '', component:AdminComponent, children:[{path:"customer",loadChildren:()=>import("./customer/customer.module").then(mod=>mod.CustomerModule)}]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
