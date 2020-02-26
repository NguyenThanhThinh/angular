import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductImageComponent } from './product-image/product-image.component';
import { ProductDepartmentComponent } from './product-department/product-department.component';
import { ProductRowComponent } from './product-row/product-row.component';
import { ProductDisplayComponent } from './product-display/product-display.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductImageComponent,
    ProductDepartmentComponent,
    ProductRowComponent,
    ProductDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
