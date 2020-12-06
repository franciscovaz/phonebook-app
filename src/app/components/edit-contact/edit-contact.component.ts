import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
    private service: PhonebookService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.service.getContactDetail(params['id']).subscribe(contact => {
        this.contactForm.setValue({...contact});
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

  saveChanges() {
    this.service.updateContact(this.contactForm.value)
      .subscribe(contact => {
        this.router.navigate(['contact-details', contact.id]);
      })
  }

}
