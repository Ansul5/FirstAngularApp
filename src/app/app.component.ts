import { Component,OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { UserService } from './user.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
constructor(public routerObj:Router, public userServiceObj:UserService){}

ngOnInit():void{}

 logOut(){
   this.userServiceObj.userLoginService=false
 }
 
}
