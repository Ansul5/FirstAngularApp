import { Component, OnInit, TemplateRef } from '@angular/core';
import {FormBuilder} from '@angular/forms'
import { Router } from '@angular/router';
import { BackendService } from '../backend.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-new-sign-up',
  templateUrl: './new-sign-up.component.html',
  styleUrls: ['./new-sign-up.component.css']
})
export class NewSignUpComponent implements OnInit {

  constructor(public formBuilderObj:FormBuilder, public backendObj:BackendService, public routerObj:Router,private modalService:BsModalService) { }

  ngOnInit(): void {
  }

  registrationError={
    error:false,
    errorMessage:''
  }

  signUpForm= this.formBuilderObj.group({
    Username:[''],
    Password:[''],
    email:[''],
    Age:[]
  })

  signUpSubmit(template:TemplateRef<any>){
    console.log(this.signUpForm.value)

    this.backendObj.postUserdata(this.signUpForm.value).subscribe({
      next:(res)=>{
        if(res.message==='User already exists in this username try with another'){
          // alert('User already exists in this username try with another')

          this.registrationError.error=true
          this.registrationError.errorMessage=res.message
        }

        else{
              // alert('New User Created')

              //invoke modal
              this.openModal(template)


          // this.routerObj.navigateByUrl('/home')
        }
              
      },
      error:()=>{
           alert('Something Went Wrong Retry')
      }
    })

  


  }
  modalRef?: BsModalRef;

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }
 
  confirm(): void {
    this.routerObj.navigateByUrl("/login")
    this.modalRef?.hide();
  }
 
  decline(): void {
   this.routerObj.navigateByUrl("/home")
    this.modalRef?.hide();
  }

}
