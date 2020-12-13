import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import {HeaderComponent} from './components/header/header.component';
import { LoginComponent} from './components/login/login.component';
import { RegisterComponent} from './components/register/register.component';
import { ResetPasswordComponent} from './components/reset-password/reset-password.component';
import {  PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
const routes: Routes = [
  {path: '',redirectTo : 'header',pathMatch : 'full'},
  {path: 'header',component: HeaderComponent },
  {path : 'login',component : LoginComponent},
  {path : 'register',component :RegisterComponent},
  {path : 'reset-password',component :ResetPasswordComponent},
  {path : '**',component :PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const AppRoutingComponents = [LoginComponent,RegisterComponent,ResetPasswordComponent,PageNotFoundComponent];