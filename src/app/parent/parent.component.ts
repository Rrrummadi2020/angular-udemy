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
  luckyNumber:number|undefined;
isSubscribed:string|undefined;
  isStyleApplied: boolean | undefined;
  styleColor:string|undefined;
  ngOnInit(): void {
    this.isPresent = false;
    this.birds = [
      { name: 'peacock', flyable: true,id:1},
      { name: 'parrot', flyable: false,id:2 },
      { name: 'crow', flyable: true ,id:3}
    ]
    this.flyable = true
  }
  onStateChange(): void {
    this.isPresent = !this.isPresent;
  }
  onAdd() {
    this.birds.push({ name: this.name, flyable: this.flyable })
  }
  toggleStyle() {
    this.isStyleApplied = !this.isStyleApplied;
  }
  changeColor(color: string) {
    this.styleColor = color;
  }
  receivedDate(data:string){
    console.log('IN PARENT DATA')
    console.log(data);
  }
  onRefresh(){
    this.birds = [{ name: 'peacock', flyable: true, id: 1 },
    { name: 'kamal', flyable: false, id: 2 },
    { name: 'crow', flyable: true, id: 3 }]
  }
  trackById(index:number,item:Birds){
    return item.id;
  }
}
