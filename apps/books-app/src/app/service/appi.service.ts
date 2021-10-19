import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AppiService {
  api = 'https://api-notarize.herokuapp.com/customer/createPublicOrder'
  constructor(private http : HttpClient) { }

  post(data:{ name: string, email: string, phoneNumber: string, noOfSigners: string, noOfNotarizations:string}):Observable<any> {
    return this.http.post(`${this.api}`,data)
  }

}
