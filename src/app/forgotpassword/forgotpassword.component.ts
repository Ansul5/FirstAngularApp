import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { BackendService } from '../backend.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  constructor(private backendObj:BackendService,private formBuilderObj:FormBuilder,private routerObj:Router) { }

  ngOnInit(): void {
  }

  registrationError={
    error:false,
    errorMessage:''
  }


  changePasswordForm= this.formBuilderObj.group({
    Username:[,[Validators.required]],
    Password:[,[Validators.required]]
  })

  get username(){
    return this.changePasswordForm.get('Username')
  }
  get password(){
    return this.changePasswordForm.get('Password')
  }
           
 

  updatePassword(){
    console.log(this.changePasswordForm.value)
    this.backendObj.changepassword(this.changePasswordForm.value).subscribe({
      next:(res)=>{
        //if username is invalid
        if(res.message!=="Password Updated"){

          this.registrationError.error=true
          this.registrationError.errorMessage=res.message
          

        }

        else{
          alert("Password Updated")
          this.routerObj.navigateByUrl('newlogin')
          
        }

      }
    })


  }

}
