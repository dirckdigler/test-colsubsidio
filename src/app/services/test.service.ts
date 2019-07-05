import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor( private http: HttpClient ) {
    console.log('servicio is working ok');
  }

  getUsers() {
    return this.http.get('https://reqres.in/api/users/')
      .pipe( map( data => data['data'] ));
  }

}
