import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private router: Router) {
    this.isDisable = false;
  }
  isDisable:boolean|undefined;
  goToProducts() {
    this.router.navigate(['/product']);
  }
}
