import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class OneComponent implements OnInit {
  counter!: number;
  myObservable!: Observable<number[]>;
  datas: number[] = []

  ngOnInit(): void {
    this.counter = 0;
    this.myObservable = new Observable(observer => {
      setInterval(() => {
        this.counter++;
        this.datas.push(this.counter);
        observer.next(this.datas);
        if(this.datas.length>5){
          observer.complete();
        }
      }, 1000)
    })
    this.myObservable.subscribe(res=>{
      console.log(res);
    })
  }

  getData() {
    console.log(this.datas);
  }
}
