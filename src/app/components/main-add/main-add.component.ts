import { Component } from '@angular/core';
import { Product } from '../../services/productService';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductService } from '../../services/productService';
import { NgFor, NgIf } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-add',
  standalone: true,
  imports: [ NgFor, ReactiveFormsModule, NgIf],
  templateUrl: './main-add.component.html',
  styleUrl: './main-add.component.scss',
  providers:[ProductService]
})
export class MainAddComponent {
  product: Product=new Product("", "", "", "", "", "");
  showMessage:boolean=false;
  categories: string[]=[];
  category:string="category";
  urlPattern: string = "/^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9._]*)?@)?([a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})(:[0-9]{1,5})?(\/[a-zA-Z0-9.-_]*(\?[a-zA-Z0-9.&=%:]+)*#?.*)?$/";

  addProduct:FormGroup=new FormGroup({});

  constructor(private productService: ProductService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void{
    this.productService.getCategories().subscribe(categories=>this.categories=categories);
    this.addProduct=this.formBuilder.group({
      img: ['',[Validators.required, Validators.pattern(/^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9._]*)?@)?([a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})(:[0-9]{1,5})?(\/[a-zA-Z0-9.-_]*(\?[a-zA-Z0-9.&=%:]+)*#?.*)?$/)]],
      title: ['',Validators.required],
      description: ['',Validators.required],
      category: ['',Validators.required],
      price: ['',[Validators.required,Validators.min(1)]]
    })
  }

  add(){
    if(this.addProduct.valid){
      this.product.image=this.addProduct.get('img')?.value;
      this.product.title=this.addProduct.get('title')?.value;
      this.product.price=this.addProduct.get('price')?.value;
      this.product.description=this.addProduct.get('description')?.value;
      this.product.category=this.addProduct.get('category')?.value;
      this.productService.createProduct(this.product).subscribe(product=>console.log(product.title));
      this.router.navigate(['/add']); 
      this.showMessage=false;
    }else{
      this.showMessage=true;
    }
    
  }

}
