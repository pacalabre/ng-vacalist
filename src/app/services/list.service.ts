import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(private http: HttpClient) {
  }

  getAllListings() {
    return this.http.get('http://localhost:4200/assets/data/listings.json')
  }
}
