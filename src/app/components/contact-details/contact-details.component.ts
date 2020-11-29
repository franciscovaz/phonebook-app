import { Component, OnInit } from '@angular/core';
import { PhonebookService } from 'src/app/services/phonebook.service';
import { Contact } from '../../model/contact';

@Component({
  selector: 'pb-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {

  contact: Contact = new Contact();

  constructor(private service: PhonebookService) { }

  ngOnInit(): void {
    this.service.getContactDetail(1).subscribe(response => this.contact = response);
  }

}
