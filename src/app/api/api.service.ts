import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseURL: string = "https://fakestoreapi.com/";
  constructor(private httpClient: HttpClient) {}

  getDetails() {
    return this.httpClient.get(this.baseURL + 'products');
  }
  getproductDetails(detailID: string) {
    return this.httpClient.get(this.baseURL + 'products/' + detailID);
  }
}
