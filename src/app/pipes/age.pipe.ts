import { Pipe, PipeTransform } from '@angular/core';

// {{ contact.dob | age }}
// --> 25 years

// {{ contact.dob | age : 1 }}
// --> 25 years

// {{ contact.dob | age : 2}}
// --> 25 years and 5 months

// {{ contact.dob | age : 3 }}
// --> 25 years 5 months and 9 days


@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(dob: string, flag?: number): string {
    if(!dob) {
      return '';
    }

    let date1 = new Date(dob);
    let diff = Date.now() - date1.getTime();
    let date2 = new Date(diff);

    let year = new Date(Date.now()).getFullYear() - date2.getFullYear();
    let month = date2.getMonth();
    let days = date2.getDate();

    let output = '';

    switch(flag) {
      case 2:
        output = `${year} years and ${month} months`;
        break;
      case 3:
        output = `${year} years ${month} months and ${days} days`;
        break;
      case 1:
      default:
        output = `${year} years`;
    }

    return output;
  }

}
