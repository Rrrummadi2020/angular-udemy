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
      // transition('normal=>highlighted', animate(300)),
      // transition('highlighted=>normal', animate(600)),
      transition('highlighted<=>normal', animate(600)),
    ]),

    trigger('wildState', [
      state(
        'normal',
        style({
          'background-color': 'red',
          transform: 'translateX(0px) scale(1)',
        })
      ),
      state(
        'highlighted',
        style({
          'background-color': 'yellow',
          transform: 'translateX(100px) scale(1)',
        })
      ),
      state(
        'shrunken',
        style({
          'background-color': 'orange',
          transform: 'translateX(0px) scale(0.5)',
        })
      ),
      // transition('normal=>highlighted', animate(300)),
      // transition('highlighted=>normal', animate(600)),
      transition('highlighted<=>normal', animate(600)),
      transition(
        'shrunken <=> *',
        // animate(600, style({ 'border-radius': '50px' })),
        [
          style({ 'background-color': 'green' }),
          animate(1000, style({ 'border-radius': '50px' })),
          animate(1200),
        ]
      ),
    ]),
  ],
})
export class AnimationPComponent {
  state!: string;
  wild!: string;

  list = ['Milk', 'Sugar', 'Bread'];

  onAdd(item: string) {
    this.list.push(item);
  }
  onAnimate() {
    this.state = this.state == 'normal' ? 'highlighted' : 'normal';
    this.wild = this.wild == 'normal' ? 'highlighted' : 'normal';
  }
  onShrink() {
    this.wild = 'shrunken';
  }
  onDelete(item: string) {}
}
