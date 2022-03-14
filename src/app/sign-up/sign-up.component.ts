import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms'
import { Router } from '@angular/router';
//import { error } from 'console';
import { UserService } from '../user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private fb:FormBuilder,private userService:UserService,private routerObj:Router) { }

userSignUpForm:FormGroup

  ngOnInit(): void {

    this.userSignUpForm=this.fb.group({
      name:[],
      username:[],
      password:[],
      email:[],
      DOB:[]
    })
  }
form(){
 this.userService.createUser(this.userSignUpForm.value).subscribe({
   next:(res)=>{
     alert('User Created Successfully')
      this.routerObj.navigateByUrl('login')
     console.log(res)
   },
   error:(err)=>{
     alert('something is wrong')
   }
   
 })
}

}
