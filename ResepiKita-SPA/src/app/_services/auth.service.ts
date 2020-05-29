import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = environment.apiUrl+'auth/';
  jwtHelper = new JwtHelperService();
  decodedToken: any;
  values: any;

  constructor(private http: HttpClient) {}

  login(model: any) {
    return this.http.post(this.baseUrl+ 'login', model)
    .pipe(map((response: any) => {
      const user = response;
      if (user) {
        localStorage.setItem('token', user.token);
        this.decodedToken = this.jwtHelper.decodeToken(user.token);
      }
    }));
  }

  register(model: any) {
    return this.http.post(this.baseUrl+ 'register', model);
  }
  
  loggedIn() {
    const token = localStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(token);
  }
  
  getValue() {
    // const token = localStorage.getItem('token');
    // this.httpHeader.set('Authorization', 'Bearer'+token);
    this.http.get('http://localhost:5000/api/values').subscribe(response => {
      this.values = response;
    }, error => {
      console.log(error);
    });
  }
  
  getValueFromId(id: any) {
    return this.http.get('http://localhost:5000/api/value/' +id);
  }

}

