import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCreated'
})
export class DateCreatedPipe implements PipeTransform {

  transform(value: any) {

    let currentYear: any = new Date().getFullYear(); //get current date and time
    let yearDifference = (currentYear - parseInt(value))
    return yearDifference;
    // if(dateCounter >= 1){
    //   return dateCounter;
    // } else{
    //   return 0;
    // }
    
  }

}
