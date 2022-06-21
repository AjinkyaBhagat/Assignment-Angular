import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './customer/add/add.component';

const routes: Routes = [
  {path:"customer",loadChildren:()=>import("./customer/customer.module").then(mod=>mod.CustomerModule)},
  {path:"add",component:AddComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
