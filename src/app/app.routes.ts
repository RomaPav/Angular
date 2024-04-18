import { Routes } from '@angular/router';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { EditProductComponent } from './pages/edit-product/edit-product.component';
import { ProductsComponent } from './pages/products/products.component';

export const routes: Routes = [ { path: '', redirectTo: "products",pathMatch: "full"},
{ path: 'products', component: ProductsComponent },
{path: 'add', component: AddProductComponent },
{path: 'edit', component: EditProductComponent },
{ path: 'products/:id', component: EditProductComponent }];
