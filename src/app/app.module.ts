import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import {UsersModule} from './users/users.module'
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
import { SquarePipe } from './square.pipe';
import { SearchPipe } from './search.pipe';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FooterComponent } from './footer/footer.component';
import { NoPageComponent } from './no-page/no-page.component';
import { NewSignUpComponent } from './new-sign-up/new-sign-up.component';

import { NewsearchPipe } from './newsearch.pipe';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NewLoginComponent } from './new-login/new-login.component';
import { ProfileComponent } from './profile/profile.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';

@NgModule({
  declarations: [
    AppComponent,
  
    LoginComponent,
       SquarePipe,
       SearchPipe,
       HomeComponent,
       ContactUsComponent,
       SignUpComponent,
       FooterComponent,
       NoPageComponent,
       NewSignUpComponent,
      
       NewsearchPipe,
              NewLoginComponent,
              ProfileComponent,
              ForgotpasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    UsersModule,
    HttpClientModule,
    ModalModule.forRoot(),
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
