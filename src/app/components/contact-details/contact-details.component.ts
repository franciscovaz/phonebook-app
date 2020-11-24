import { Component, OnInit } from '@angular/core';
import { Contact } from '../../model/contact';

@Component({
  selector: 'pb-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {

  contact: Contact;

  constructor() { }

  ngOnInit(): void {
    this.contact = new Contact();
    this.contact.id = 1;
    this.contact.firstname = 'Francisco';
    this.contact.lastname = 'Vaz';
    this.contact.email = 'ftomasvaz@gmail.com';
    this.contact.phone = '911111111';
    this.contact.gender = 'Male';
    this.contact.city = 'Ilhavo';
    this.contact.state = 'Aveiro';
    this.contact.country = 'Portugal';
    this.contact.dob = '1995-06-15';
  }

}
