import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  counter: number | undefined;
  numbers?:Observable<number[]> ;
  constructor(private router: Router,private dataService: DataService) {
    this.isDisable = false;
  }
  isDisable:boolean|undefined;
  goToProducts() {
    this.router.navigate(['/product']);
  }
  ngOnInit(){
    this.counter = this.dataService.couter;
    this.numbers = this.dataService.getNumbers();
  }
  inc() {
    this.counter = this.dataService.increment()
  }
  dec() {
    this.counter = this.dataService.decrement();
  }
}
