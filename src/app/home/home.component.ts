import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormArray,FormControl,Validators} from '@angular/forms'



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private formBuilderObj:FormBuilder) { }

  ngOnInit(): void {
  }



// x:string='green'
//    changecolor(ref:any){

//     for(let v of this.seatsA1){ 
//       if(v.status=='green'){
//       v.status='red'
//        }
//        else if(v.status=='red'){
//          v.status='green'
//        }  }

    
    
    
//    }

   bookingForm= this.formBuilderObj.group({
     Name:['',[Validators.required]],
     NumberOfSeats:[,[Validators.required]],
     SeatsName:this.formBuilderObj.array([])
     
   })

   seatsA=[{
         Name:'A1',
         status:'green'
         
       },{
        Name:'A2',
        status:'green'
       },{
        Name:'A3',
        status:'green'
       },{
        Name:'A4',
        status:'green'},
        {
          Name:'A5',
          status:'green'}]

   seatsB=[{
            Name:'B1',
            status:'green'
            
          },{
           Name:'B2',
           status:'green'
          },{
           Name:'B3',
           status:'green'
          },{
           Name:'B4',
           status:'green'
          },
          {
            Name:'B5',
            status:'green'}]

  seatsC=[{
            Name:'C1',
            status:'green'
            
          },{
           Name:'C2',
           status:'green'
          },{
           Name:'C3',
           status:'green'
          },{
           Name:'C4',
           status:'green'},
           {
            Name:'C5',
            status:'green'}]

  seatsD=[{
            Name:'D1',
            status:'green'
            
          },{
           Name:'D2',
           status:'green'
          },{
           Name:'D3',
           status:'green'
          },{
           Name:'D4',
           status:'green'},
           {
            Name:'D5',
            status:'green'}]


  seatsE=[{
            Name:'E1',
            status:'green'
            
          },{
           Name:'E2',
           status:'green'
          },{
           Name:'E3',
           status:'green'
          },{
           Name:'E4',
           status:'green'},
           {
            Name:'E5',
            status:'green'}]




no= this.bookingForm.get('NumberOfSeats')
         
 
  
bookingsubmit(){
  console.log(this.bookingForm.value)
  
  
}

seatSelectionEvent(event){

 

  let seats= this.bookingForm.get('SeatsName') as FormArray
  
  if(event.target.checked){
    seats.push(new FormControl(event.target.value))
  }
  else{
    let count=0
    seats.controls.forEach((fc:FormControl)=>{
      if(fc.value==event.target.value){
        seats.removeAt(count)
        return
      }
      count++
    })
    
  }

}


getSeatsArray(){
  let seats=this.bookingForm.get('SeatsName') as FormArray
//  let no= this.bookingForm.get('NumberOfSeats')
 


 
  return seats.length
}
}
