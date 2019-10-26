import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any,SearchByTitle): any {
    return value.filter(it => {
   
    if(!SearchByTitle){
    return value;
    }
 
    const title=it.title.toLowerCase().startsWith(SearchByTitle.toLowerCase());
    return title;
    console.log(title);
    
  })
  }
}

