import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { ProductTwoComponent } from './product-two/product-two.component';
import { RouterModule, Routes } from '@angular/router';
import { DataService } from '../data.service';


const routes: Routes = [
  { path: 'one', component: ProductComponent },
  { path: 'two', component: ProductTwoComponent }
]
@NgModule({
  declarations: [ProductComponent, ProductTwoComponent],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ],
  providers:[DataService]
})//once the component loaded at the time new instance of this service will be created , that's it ,
export class ProductModule { }
