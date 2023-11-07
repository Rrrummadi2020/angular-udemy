import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChild,
  DoCheck,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { ChildChildComponent } from '../child-child/child-child.component';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent
  implements OnInit, OnChanges, DoCheck, AfterViewInit, AfterViewChecked
{
  @Input() parentValue: string | undefined;
  interval: any;
  @Input() birds: any[] = [];
  @Output() sendData: EventEmitter<string> = new EventEmitter<string>();

  @ContentChild('projectedContent', { static: true }) cont: any;
  @ViewChild('childTemplateVari', { static: true }) child: any; //default static is false
  @ViewChild(ChildChildComponent) childChild!: ChildChildComponent;
  counter: number = 0;
  ngOnInit(): void {
    console.log('child ngOn Init called ');
    console.log(this.parentValue + ' PARENT VALUE HERE GOT INITIALIZED'); //value wil be available
    // this.interval=setInterval(() => {
    //   console.log('timer onned ' + this.counter++);
    // }, 1000)
    console.log('ChildChildComponent onit', this.childChild);
  }
  constructor() {
    console.log('child constructor called ');
    console.log(this.cont + ' projected content');
    console.log(this.child + ' child content constructor');
    console.log('ChildChildComponent constructor', this.childChild);
    console.log(this.parentValue + 'PARENT VALUE HERE NOT INITIALIZED'); // value will not be availble diff
  }
  ngOnDestroy(): void {
    console.log('child ng on destroy  called ');
    clearInterval(this.interval);
    console.log(this.cont + ' projected content');
    console.log('ChildChildComponent on desctroy', this.childChild);
    console.log(this.child + ' child ng ondestroy');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ng on changes called ');
    console.log(changes);
    console.log(this.cont + ' projected content');
    console.log('ChildChildComponent onchanges', this.childChild);
    console.log(this.child + ' child on changes ');
  }
  ngAfterViewInit() {
    console.log('ChildChildComponent viewinit', this.childChild);
    console.log('after view init');
  }
  ngAfterViewChecked(): void {
    console.log('ChildChildComponent viewchecked', this.childChild);
    console.log('after view checked');
  }
  ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    console.log('ChildChildComponent content init', this.childChild);

    console.log(
      this.cont + ' projected content inside the ng after content init'
    );
    console.log(this.child + ' child after content init  ');
  }
  ngAfterContentChecked(): void {
    console.log('ChildChildComponent content checked', this.childChild);

    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    console.log(
      this.cont + ' projected content inside the ng after content checked'
    );
    console.log(this.child + ' child after content Checked');
  }
  ngDoCheck(): void {
    console.log('ChildChildComponent doheck', this.childChild);

    console.log('ng Do check is called');
    console.log(this.cont + ' projected content');
  }
  sendDataToParent(val: Event) {
    this.sendData?.emit((<HTMLInputElement>val.target).value);
    console.log('CHILD DATA' + (<HTMLInputElement>val.target).value);
  }
}
