import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private API_URL = '/first-project/api/hello';
  couter:number|undefined;
  constructor(private http: HttpClient) {
    this.couter =5
  }
  increment(){
    if(this.couter){
      this.couter++;
      return this.couter;
    }
    return 0;
  }
  decrement(){
    if(this.couter){
      this.couter--;
      return this.couter;
    }
    return 0;
  }
  getApiData() {
    return this.http.get(this.API_URL);
  }
  getNumbers(): Observable<number[]> {
    return of<number[]>([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
  }
}
