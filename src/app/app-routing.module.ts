import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NewLoginComponent } from './new-login/new-login.component';
import { NewSignUpComponent } from './new-sign-up/new-sign-up.component';
import { NoPageComponent } from './no-page/no-page.component';
import { ProfileComponent } from './profile/profile.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'contactUs',component:ContactUsComponent},
  {path:'signUp',component:SignUpComponent},
  {path:'newSignUp',component:NewSignUpComponent},
  {path:'newlogin',component:NewLoginComponent},
  {path:'profile/:Username',component:ProfileComponent},
  {path:'forgotpassword',component:ForgotpasswordComponent},
  
  {path:'',redirectTo:'home',pathMatch:'full'},
  { path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },
  {path:'**',component:NoPageComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
