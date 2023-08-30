import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit{
  isPresent:boolean|undefined;
  originalValue:string|undefined;
  ngOnInit(): void {
      this.isPresent = false;
  }
  onStateChange():void{
    this.isPresent = !this.isPresent;
  }

}
