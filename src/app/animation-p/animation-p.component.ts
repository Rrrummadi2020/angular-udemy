import {
  animate,
  keyframes,
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

    trigger('list1', [
      state(
        'in',
        style({
          opacity: 1,
          transform: 'translateX(0px)',
        })
      ),
      transition('void => *', [
        style({ opacity: '0', transform: 'translateX(-100px)' }),
        animate(600),
      ]),
      transition('* => void', [
        animate(600),
        style({ opacity: '0', transform: 'translateX(100px)' }),
      ]),
    ]),

    trigger('list2', [
      state(
        'in',
        style({
          opacity: 1,
          transform: 'translateX(0px)',
        })
      ),
      transition('void => *', [
        animate(
          1000,
          keyframes([
            style({
              opacity: 0,
              transform: 'translateX(-100px)',
              offset: 0,
            }),
            style({
              opacity: 0.5,
              transform: 'translateX(-50px)',
              offset: 0.3,
            }),
            style({
              opacity: 0.8,
              transform: 'translateX(-20px)',
              offset: 0.8,
            }),
            style({
              opacity: 1,
              transform: 'translateX(0px)',
              offset: 1,
            }),
          ])
        ),
      ]),
      transition('* => void', [
        animate(600),
        style({ opacity: '0', transform: 'translateX(100px)' }),
      ]),
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
  onDelete(item: string) {
    this.list.splice(
      this.list.findIndex((e) => e == item),
      1
    );
  }

  onAnimationStarted(data: any) {
    console.log(data);
  }
  onAnimationDone(data: any) {
    console.log(data);
  }
}
