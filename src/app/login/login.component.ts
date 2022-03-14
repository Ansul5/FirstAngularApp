import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup} from '@angular/forms';
import {Router} from '@angular/router'
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb:FormBuilder, public routerObj:Router,private userserviceObj:UserService) { }

  userLoginForm:FormGroup;
  userTypes=['user','admin']

  ngOnInit(): void {

    this.userLoginForm=this.fb.group({
      userType:[],
      username:[],
      password:[],
     // userTypesArray:this.fb.array(this.userTypes)
    })
  }

  // userLoginForm= this.fb.group({
  //     userType:[''],
  //     username:[''],
  //     password:[''],
  //     userTypesArray:this.fb.array([this.userTypes])

  // })

  formsubmit(){

  let userObj=this.userLoginForm.value
  if(userObj.userType=='user'){
         this.userserviceObj.loginUser(userObj).subscribe({
           next:(res)=>{
             console.log(res[0])

             if(res.length==0){
               alert('Invalid User Credentials')
             }
             else{
               //alert("User Found")
               this.userserviceObj.userLoginService=true
                   
                  this.userserviceObj.userBehaviourSubject.next(res[0])
               this.routerObj.navigateByUrl('users')

             }
           }
         })
  }

    //console.log(this.userLoginForm.value)
  }

  goTosignUp(){
     this.routerObj.navigateByUrl('signUp')     
  }

}
