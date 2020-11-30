import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/model/contact';
import { PhonebookService } from 'src/app/services/phonebook.service';

@Component({
  selector: 'pb-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacts: Contact[];
  pageNumber: number = 1;

  constructor(private service: PhonebookService) { }

  ngOnInit(): void {
    this.service.getAllContacts()
      .subscribe(resp => this.contacts = resp);
  }

  loadMore() {
    this.pageNumber++;
    this.service.getAllContacts(this.pageNumber)
      .subscribe(data => this.contacts = [...this.contacts, ...data])
  }

}
