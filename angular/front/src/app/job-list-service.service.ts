import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class JobListServiceService {

  url='http://localhost:3000/api/jobList';

  constructor(private http:HttpClient) { }

  public getList()
  {
    return this.http.get<any>(this.url);
  }
}
