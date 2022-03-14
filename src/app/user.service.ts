import { Injectable } from '@angular/core';
import {HttpClient,HttpParams} from '@angular/common/http'
import { Observable,BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private hc:HttpClient) { }

  userBehaviourSubject= new BehaviorSubject<any>(null)
  userObservable= this.userBehaviourSubject.asObservable()

  createUser(userObj):Observable<any>{
   return this.hc.post('http://localhost:3000/users',userObj)
  }

  loginUser(userObj):Observable<any>{
    
    let params= new HttpParams().set('username',userObj.username).set('password',userObj.password)

    const fullUrl=`http://localhost:3000/users/?${params.toString()}`

    return this.hc.get(fullUrl)

  }
  userLoginService:boolean=false
}
