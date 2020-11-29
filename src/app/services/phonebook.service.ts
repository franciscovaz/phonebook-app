import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../model/contact';

import 'rxjs/add/operator/map';
// for up line to work need: npm i rxjs-compat

const baseUrl = 'http://localhost:4300/contacts/';
@Injectable({
  providedIn: 'root'
})
export class PhonebookService {

  constructor(private http: HttpClient) { }

  getContactDetail(id: number): Observable<Contact>{
    return this.http.get(baseUrl + id).map(data => data as Contact);
  }

  addNewContact(contact: Contact): Observable<Contact> {
    return this.http.post(baseUrl, contact).map(data => data as Contact);
  }

  updateContact(contact: Contact): Observable<Contact> {
    return this.http.put(baseUrl + contact.id, contact).map(data => data as Contact);
  }

  deleteContact(contact: Contact):Observable<Contact> {
    return this.http.delete(baseUrl + contact.id).map(data => data as Contact)
  }
}
