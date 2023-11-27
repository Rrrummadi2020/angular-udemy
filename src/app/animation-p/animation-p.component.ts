import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-animation-p',
  templateUrl: './animation-p.component.html',
  styleUrls: ['./animation-p.component.css'],
  animations: [
    trigger('divState', [
      state(
        'normal',
        style({ 'background-color': 'red', transform: 'translateX(0px)' })
      ),
      state(
        'highlighted',
        style({ 'background-color': 'yellow', transform: 'translateX(100px)' })
      ),
      transition('normal=>highlighted', animate(300)),
      transition('highlighted=>normal', animate(600)),
    ]),
  ],
})
export class AnimationPComponent {
  state!: string;
  list = ['Milk', 'Sugar', 'Bread'];

  onAdd(item: string) {
    this.list.push(item);
  }
  onAnimate() {
    this.state = this.state == 'normal' ? 'highlighted' : 'normal';
  }
  onDelete(item: string) {}
}
