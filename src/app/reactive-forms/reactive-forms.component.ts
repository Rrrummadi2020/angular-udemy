import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {
  myForm!: FormGroup;
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.myForm = new FormGroup({
      userName: new FormControl('rama',Validators.required),
      email: new FormControl(null,[Validators.required,Validators.email]),
      subscribe: new FormControl()
    })
  }
  onSubmit() {
    console.log(this.myForm!);
  }
}
