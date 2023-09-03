import { Component, ContentChild, DoCheck, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges, DoCheck {

  @Input() parentValue: string | undefined;
  interval: any;
  @Input() birds:any[]=[];
  @Output() sendData:EventEmitter<string>=new EventEmitter<string>();

  @ContentChild('projectedContent',{static:true}) cont: any;
  @ViewChild('childTemplateVari',{static:true}) child:any;//default static is false
  counter: number = 0;
  ngOnInit(): void {
    console.log('child ngOn Init called ');
    console.log(this.parentValue+" PARENT VALUE HERE GOT INITIALIZED");//value wil be available
    // this.interval=setInterval(() => {
    //   console.log('timer onned ' + this.counter++);
    // }, 1000)
  }
  constructor() {
    console.log('child constructor called ');
    console.log(this.cont+' projected content')
    console.log(this.child+' child content constructor');
    console.log(this.parentValue + "PARENT VALUE HERE NOT INITIALIZED");// value will not be availble diff

  }
  ngOnDestroy(): void {
    console.log('child ng on destroy  called ');
    clearInterval(this.interval);
    console.log(this.cont + ' projected content');
    console.log(this.child + ' child ng ondestroy');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ng on changes called ');
    console.log(changes);
    console.log(this.cont+' projected content')
    console.log(this.child+' child on changes ');
  }
  ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    console.log(this.cont+' projected content inside the ng after content init');
    console.log(this.child+' child after content init  ');
  }
  ngAfterContentChecked(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    console.log(this.cont + ' projected content inside the ng after content checked');
    console.log(this.child + ' child after content Checked');
  }
  ngDoCheck(): void {
    console.log('ng Do check is called');
    console.log(this.cont+' projected content')
  }
  sendDataToParent(val: Event) {
    this.sendData?.emit((<HTMLInputElement>val.target).value);
    console.log('CHILD DATA'+(<HTMLInputElement>val.target).value);
  }
}
