import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PhonebookService } from 'src/app/services/phonebook.service';
import { Contact } from '../../model/contact';

@Component({
  selector: 'pb-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {

  contact: Contact = new Contact();

  constructor(
    private service: PhonebookService,
    private activatedRoute: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    // get id from params: this.route.snapshot.params['id']

    // another way to get id from params
    this.activatedRoute.params.subscribe(routeParams => {
      this.service.getContactDetail(routeParams['id']).subscribe(response => this.contact = response);
    })
  }

  deleteContact() {
    if(!confirm('Are you sure?')){
      return;
    }

    this.service.deleteContact(this.contact)
      .subscribe(() => {
        this.router.navigate(['/contact-list'])
      })
  }

}
