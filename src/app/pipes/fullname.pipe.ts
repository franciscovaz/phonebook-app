import { Pipe, PipeTransform } from '@angular/core';
import { Contact } from '../model/contact';

@Pipe({
  name: 'fullname'
})
export class FullnamePipe implements PipeTransform {

  transform(contact: Contact): string {
    if(!contact) {
      return 'Information not available'
    }

    let title = contact.gender === 'Male' ? 'Mr.' : 'Ms.'

    return `${title} ${contact.firstname} ${contact.lastname}`;
  }

}
