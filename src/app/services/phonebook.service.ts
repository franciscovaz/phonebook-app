import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../model/contact';

const baseUrl = 'http://localhost:4300/contacts/';
@Injectable({
  providedIn: 'root'
})
export class PhonebookService {

  constructor(private http: HttpClient) { }

  getContactDetail(id: number): Observable<any>{
    return this.http.get(baseUrl + id);
  }
}
