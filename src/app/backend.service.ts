import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable,BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(public httpclientObj:HttpClient) { }

  //create object for the behaviour subject
  userBehaviourObj= new BehaviorSubject(null)
  //create observable for behaviour subject obj
  userObservable= this.userBehaviourObj.asObservable()

  //method that other components can use to access the behavior subject
  getBehaviorSubject(){
    return this.userBehaviourObj
  }

  //user register
  postUserdata(userObj):Observable<any>{

    return this.httpclientObj.post('http://localhost:5300/user/createuser',userObj)

  }

  //user Login
  loginUser(userCredObj):Observable<any>{

    return this.httpclientObj.post('http://localhost:5300/user/loginUser',userCredObj)

  }

  //change password
  changepassword(userobj):Observable<any>{
    return this.httpclientObj.put('http://localhost:5300/user/updateUser',userobj)
  }
}
