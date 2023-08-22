import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private API_URL = '/first-project/api/hello';
  constructor(private http: HttpClient) {

  }

  getApiData() {
    return this.http.get(this.API_URL);
  }
}
