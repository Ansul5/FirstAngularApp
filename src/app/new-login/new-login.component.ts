import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms'
import { Router } from '@angular/router';
import { BackendService } from '../backend.service';
@Component({
  selector: 'app-new-login',
  templateUrl: './new-login.component.html',
  styleUrls: ['./new-login.component.css']
})
export class NewLoginComponent implements OnInit {

  constructor(public formBuilderObj:FormBuilder, public backendObj:BackendService, public routerObj:Router) { }

  ngOnInit(): void {
  }

  registrationError={
    error:false,
    errorMessage:''
  }

  loginForm= this.formBuilderObj.group({
    Username:[''],
    Password:[''],
    
  })

  get username(){
    return this.loginForm.get('Username')
  }
  get password(){
    return this.loginForm.get('Password')
  }

  loginSubmit(){
    console.log(this.loginForm.value)

    this.backendObj.loginUser(this.loginForm.value).subscribe({
      next:(res)=>{
        //if credentials are invalid
        if(res.message!='Login Successful'){
          // alert('User already exists in this username try with another')

          this.registrationError.error=true
          this.registrationError.errorMessage=res.message
        }
             
        //when credentials are correct
        else{
              // alert('New User Created')

              //invoke modal
              // this.openModal(template)
             
              console.log("User Login Success")
              console.log(res.payload.Username)

              //update behaviour subject by giving it the logged in user Obj
              this.backendObj.getBehaviorSubject().next(res.payload)
              
              //store token in local storage
              localStorage.setItem("token",res.token)

          // this.routerObj.navigateByUrl('/home')
          
          //navigate to user profile
          this.routerObj.navigateByUrl(`/profile/${res.payload.Username}`)
          


         


        }
              
      },
      error:()=>{
           alert('Something Went Wrong Retry')
      }
    })

  


  }

  forgotPassword(){
    this.routerObj.navigateByUrl('forgotpassword')
  }

}
