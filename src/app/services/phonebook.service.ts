import { Injectable } from '@angular/core';
import { Contact } from '../model/contact';

@Injectable({
  providedIn: 'root'
})
export class PhonebookService {

  constructor() { }

  getContactDetail(id: number): Contact{
    let contact = new Contact();
    contact.id = id;
    contact.firstname = 'Francisco';
    contact.lastname = 'Vaz';
    contact.email = 'ftomasvaz@gmail.com';
    contact.phone = '911111111';
    contact.gender = 'Male';
    contact.city = 'Ilhavo';
    contact.state = 'Aveiro';
    contact.country = 'Portugal';
    contact.dob = '1995-06-15';
    contact.picture = 'https://avatars2.githubusercontent.com/u/27808014?s=460&u=cf949e2367d64368dee7273a81e2ff061956052e&v=4';

    return contact;
  }
}
