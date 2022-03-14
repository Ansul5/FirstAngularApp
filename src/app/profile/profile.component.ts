import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private backendObj:BackendService) { }
  userObj
  ngOnInit(): void {
    this.backendObj.userObservable.subscribe({
      next:(userObjFromdb)=>{
        this.userObj=userObjFromdb
      },
      error:()=>{}
    })
  }
  
}
