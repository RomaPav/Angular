import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainAddComponent } from './main-add/main-add.component';
import { MainProductsComponent } from './main-products/main-products.component';
import { MainEditComponent } from './main-edit/main-edit.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    MainAddComponent,
    MainProductsComponent,
    MainEditComponent
  ],
  exports:[
    HeaderComponent, 
    FooterComponent,
    MainAddComponent,
    MainProductsComponent,
    MainEditComponent
  ]
})
export class ComponentsModule { }
