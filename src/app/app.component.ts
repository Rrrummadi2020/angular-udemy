import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

import { init } from './store/counter.action';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'weather';
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.dataService.getApiData().subscribe({
      next: (data) => {
        console.log(data);
        this.title = data.toString();
      },
      error: (error) => {
        console.log(error);
      },
    });
    this.store.dispatch(init());
  }
  constructor(private dataService: DataService, private store: Store) {}
}
