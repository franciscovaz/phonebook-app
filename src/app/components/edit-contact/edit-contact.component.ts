import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PhonebookService } from 'src/app/services/phonebook.service';

@Component({
  selector: 'pb-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {

  contactForm: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: PhonebookService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.service.getContactDetail(params['id']).subscribe(contact => {
        console.log(contact);
      })
    });

    this.contactForm = new FormGroup({
      id: new FormControl(),
      firstname: new FormControl(),
      lastname: new FormControl(),
      gender: new FormControl(),
      email: new FormControl(),
      phone: new FormControl(),
      city: new FormControl(),
      state:new FormControl(),
      country: new FormControl(),
      picture: new FormControl('/assets/images/francisco.png'),
      dob: new FormControl()
    });
  }

}
