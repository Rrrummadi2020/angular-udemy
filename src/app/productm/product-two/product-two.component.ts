import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-product-two',
  templateUrl: './product-two.component.html',
  styleUrls: ['./product-two.component.css'],
  // providers: [DataService]
})//if we inject the service at the component level every visiting time will get a new instance
export class ProductTwoComponent {
  counter: number | undefined;
  constructor(private dataService: DataService) { }
  ngOnInit(){
    this.counter = this.dataService.couter;
  }
  inc() {
    this.counter = this.dataService.increment()
  }
  dec() {
    this.counter = this.dataService.decrement();
  }
}
