import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'newsearch'
})
export class NewsearchPipe implements PipeTransform {

  transform(movieData:any[], searchTerm:string): any[] {
    //if data or search term not available
    if(!movieData||searchTerm){
      return movieData
    }
    
    else{
      return movieData.filter(movieObj=>movieObj.name.toLowerCase().indexOf(searchTerm.toLowerCase())!==-1)
    }

  }

}
