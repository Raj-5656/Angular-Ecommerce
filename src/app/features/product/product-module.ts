import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing-module';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProductRoutingModule,
    ProductListComponent,
    ProductDetailsComponent
  ]
})
export class ProductModule { }
