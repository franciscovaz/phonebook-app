import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PhonebookService } from 'src/app/services/phonebook.service';
import { Contact } from '../../model/contact';

const swal = window['swal'];
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

  testSwal() {
    // swal('hello');
    // swal('Phonebook App', 'Hello Friend', 'warning');
    /* swal({
      title: 'Phonebook App',
      icon: 'info',
      text: 'You are in contact-details page'
    }) */

  }

  deleteContact() {

    swal({
      title: 'You are about to delete this contact',
      text: 'Please confirm',
      icon: 'warning',
      buttons: [
        {
          text: 'Yes, I am sure',
          visible: true,
          value: true
        },
        {
          text: 'Cancel',
          visible: true,
          value: false
        }
      ]
    })
      .then(result => {
        if(result === true) {
          this.service.deleteContact(this.contact)
          .subscribe(() => {
            this.router.navigate(['/contact-list'])
          })
        }
      })
  }

}
