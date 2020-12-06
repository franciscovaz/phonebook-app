import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/model/contact';
import { PhonebookService } from 'src/app/services/phonebook.service';

const $ = window['jQuery'];
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

    $(window).scroll(() => {
      let w = $(window);
      let d = $(document);

      if(w.height() + w.scrollTop() === d.height()) {
        this.loadMore();
      }
    })
  }

  loadMore() {
    this.pageNumber++;
    this.service.getAllContacts(this.pageNumber)
      .subscribe(data => this.contacts = [...this.contacts, ...data])
  }

}
