import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './create-user/create-user.component';
import { GetUserComponent } from './get-user/get-user.component';

const routes: Routes = [
  {
    path:'user',
    component:CreateUserComponent
  },
  {
    path:'get-user',
    component:GetUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
