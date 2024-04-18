import { Component } from '@angular/core';
import { ItemsModule } from '../../items/items.module';
import { NgFor } from '@angular/common';
import { ProductService } from '../../services/productService';
import {Product} from '../../services/productService';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-main-products',
  standalone: true,
  imports: [
    ItemsModule, 
    NgFor,
    FormsModule
  ],
  templateUrl: './main-products.component.html',
  styleUrl: './main-products.component.scss',
  providers:[ProductService]
})
export class MainProductsComponent {
  products: Product[]=[];
  categories: string[]=[];
  category:string="";
  sorting:string="";
  limit:string="";
  
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts();
    this.productService.getCategories().subscribe(categories=>this.categories=categories);
  }

  getProducts(): void {
    this.productService.getProducts()
      .subscribe(products => this.products = products);
      console.log(this.products);
  }

  filter(){
    if(this.category!="none" && this.category!=null && this.category!="" && this.limit!="none" && this.limit!=null && this.limit!=""){
      console.log("2");
      this.productService.getProductsByCategoryAndLimit(this.category,this.limit).subscribe(products=>this.products=products);
    }else if(this.category!="none" && this.category!=null && this.category!="" && this.sorting!="none" && this.sorting!=null && this.sorting!=""){
      console.log("3");
      this.productService.getProductsByCategoryAndSorted(this.category,this.sorting).subscribe(products=>this.products=products);
    }else if(this.limit!="none" && this.limit!=null && this.limit!="" && this.sorting!="none" && this.sorting!=null && this.sorting!=""){
      console.log("4");
      this.productService.getProductsByLimitAndSorted(this.limit, this.sorting).subscribe(products=>this.products=products);
    }else if(this.category!="none" && this.category!=null && this.category!=""){////////////////////////
      console.log("5");
      this.productService.getProductsByCategory(this.category).subscribe(products=>this.products=products);
    }else if(this.limit!="none" && this.limit!=null && this.limit!=""){
      console.log("6");
      this.productService.getProductsWithLimit(this.limit).subscribe(products=>this.products=products);
    }else if(this.sorting!="none" && this.sorting!=null && this.sorting!=""){
      console.log("7");
      this.productService.getProductsSorted(this.sorting).subscribe(products=>this.products=products);
    }else{
      console.log(this.category);
      console.log(this.limit);
      console.log(this.sorting);
    }
  }
  
}
