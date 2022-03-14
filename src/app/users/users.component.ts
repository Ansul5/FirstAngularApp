import { Component, OnInit } from '@angular/core';
//import { error } from 'console';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(public userServiceObj:UserService) { }
userObj
  ngOnInit(): void {

    this.userObj=this.userServiceObj.userObservable.subscribe({
      next:(userobjFromService)=>{
        this.userObj=userobjFromService
      },
      error:()=>{}
    })
  }

}
