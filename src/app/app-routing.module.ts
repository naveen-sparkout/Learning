import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './user/create-user/create-user.component';

const routes: Routes = [
  {
    path: '',
    component: CreateUserComponent,
    children: [
        {
            path: 'user',
            loadChildren:() => import('./user/user.module').then(m => m.UserModule)
        },
    ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
