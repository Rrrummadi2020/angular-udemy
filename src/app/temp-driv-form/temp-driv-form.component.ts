import { NgFor } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-temp-driv-form',
  templateUrl: './temp-driv-form.component.html',
  styleUrls: ['./temp-driv-form.component.css']
})
export class TempDrivFormComponent {
  @ViewChild('myForm', { static: true }) myForm: NgForm | undefined;
  onSubmit(val: NgForm) {
    console.log(val);
    console.log(this.myForm);
    // this.myForm?.reset();
  }
}
