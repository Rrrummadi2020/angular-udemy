import { Component, OnInit } from '@angular/core';
import { Birds } from '../birds';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  isPresent: boolean | undefined;
  originalValue: string | undefined;
  birds: Birds[] = [];
  name: string | undefined;
  flyable: boolean | undefined;

  ngOnInit(): void {
    this.isPresent = false;
    this.birds = [
      { name: 'peacock', flyable: true },
      { name: 'parrot', flyable: false },
      { name: 'crow', flyable: true }
    ]
    this.flyable = true
  }
  onStateChange(): void {
    this.isPresent = !this.isPresent;
  }
  onAdd() {
    this.birds.push({ name: this.name, flyable: this.flyable })
  }

}
