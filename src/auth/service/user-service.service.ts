import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  user = new Subject();
  com = new Subject();
  lang: any;

  constructor(private http: HttpClient) {}

  registerUser(model: any) {
    return this.http.post('https://api.valuclean.co/api/register', model);
  }
  registerclientcompany(model: any) {
    return this.http.post(
      'https://api.valuclean.co/api/client-company-register',
      model
    );
  }

  LoginUser(model: any) {
    return this.http.post('https://fakestoreapi.com/auth/login', model);
  }

  showSingelService(id: any) {
    return this.http.get('https://fakestoreapi.com/products/' + id);
  }

  deletOrder(id: any) {
    return this.http.get('https://api.valuclean.co/api/cancel/' + id);
  }
  getAllHome() {
    return this.http.get('https://fakestoreapi.com/products');
  }

  getAllCategu() {
    return this.http.get('https://fakestoreapi.com/products/categories');
  }

  getAllSelect(keyword: string) {
    return this.http.get(
      'https://fakestoreapi.com/products/category/' + keyword
    );
  }
  sendToBack(model: any) {
    return this.http.post('https://fakestoreapi.com/carts', model);
  }
}
