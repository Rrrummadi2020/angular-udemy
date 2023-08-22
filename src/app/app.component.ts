import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'weather';
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.dataService.getApiData().subscribe({
      next: data => {
        console.log(data);
        this.title=data.toString();
      }, error: error => {
        console.log(error);
      }
    })
  }
  constructor(private dataService: DataService) {

  }

}
