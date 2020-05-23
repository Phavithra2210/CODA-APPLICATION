import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { LoginModel } from './login-model'

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  url='http://localhost:3000/api/login';
  constructor(private http:HttpClient) {

   }

   authenticate(user:any)
   {
     var username="user1";
     var password="qwerty"
     var u=JSON.parse('{"username":"user1","password":"qwerty"}');
          return this.http.post<any>(this.url,user);
   }
}
