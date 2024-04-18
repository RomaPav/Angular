import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/productService';
import { Product } from '../../services/productService';
import { Observable } from 'rxjs';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-main-edit',
  standalone: true,
  imports: [FormsModule,NgFor],
  templateUrl: './main-edit.component.html',
  styleUrl: './main-edit.component.scss',
  providers:[ProductService]
})
export class MainEditComponent {
    product: Product| null=null;
    
    id:string="";
    img: string="";
    title: string="";
    categories: string[]=[];
    category:string="";
    price: string="";
    description: string="";
    constructor(private activatedRoute: ActivatedRoute,private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if(id!=null){
      this.id=id;
    }
    this.productService.getCategories().subscribe(categories=>this.categories=categories);
    this.productService.getProductById(Number.parseInt(this.id)).subscribe(product=>{
      this.product = product;
      if (this.product != null) {
          this.img = this.product.image;
          this.price = this.product.price.toString();
          this.category=this.product.category
          this.description = this.product.description;
          this.title = this.product.title;
      }else{
        console.log("Product null");
      }
    });
  } 

  delete(){
    this.productService.deleteProduct(Number.parseInt(this.id)).subscribe(() => {
      console.log(`Deleted item with ID: ${this.id}`); 
    });
    this.router.navigate(['/products']); 
  }

  edit(){
    if(this.product!=null){
      this.product.image=this.img;
      this.product.title=this.title;
      this.product.category=this.category;
      this.product.description=this.description;
      this.product.price=this.price;
      this.productService.updateProduct(this.product).subscribe(product=>{
        this.product=product;
        console.log(product.id);
        console.log(product.title);
        console.log(product.description);
        console.log(product.price);
      });
      this.router.navigate(['/products']); 
    }else{
      console.log("Product null");
    }
   
  }
}
