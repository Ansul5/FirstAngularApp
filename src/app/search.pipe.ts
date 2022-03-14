import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(userData:any[], searchTerm:string): any[] {
if(!userData||!searchTerm){return userData}
    
    else{
      return userData.filter(userObj=>userObj.name.toLowerCase().indexOf(searchTerm.toLowerCase())!==-1)
    }
  }

}
