import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor() { }

  arr:string[]=[]


  //create a object for behaviour subject class
  behaviourObj= new BehaviorSubject(this.arr)

  //create observable for other components in angular to subscribe it 
   createdObservable= this.behaviourObj.asObservable()

   //add strings to arr array
   addStrings(newString:string){
        this.arr.push(newString)
        this.behaviourObj.next(this.arr)
   }


   returnsObservable(){
    return this.createdObservable
   }

}
