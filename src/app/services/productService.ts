import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
export class Product {
    id: string;
    title: string;
    price: string;
    category:string;
    description: string;
    image: string;
    constructor(id: string, title: string, price: string, category: string, description: string, image: string) {
      this.id = id;
      this.title = title;
      this.price = price;
      this.category = category;
      this.description = description;
      this.image = image;
    }
  }
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'https://fakestoreapi.com/products';
  private limitApiUrl='';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }
  
  getProductsSorted(sorting:String): Observable<Product[]> {
    const url = `${this.apiUrl}?sort=${sorting}`;
    return this.http.get<Product[]>(url);
  }

  getProductsByCategory(category:String): Observable<Product[]> {
    const url = `${this.apiUrl}/category/${category}`;
    return this.http.get<Product[]>(url);
  }

  getProductsWithLimit(limit:String): Observable<Product[]> {
    const url = `${this.apiUrl}?limit=${limit}`;
    return this.http.get<Product[]>(url);
  }

  getProductsByCategoryAndLimit(category:String,limit:String): Observable<Product[]> {
    const url = `${this.apiUrl}/category/${category}?limit=${limit}`;
    return this.http.get<Product[]>(url);
  }
  
  getProductsByCategoryAndSorted(category:String,sorting:String): Observable<Product[]> {
    const url = `${this.apiUrl}/category/${category}?sort=${sorting}`;
    return this.http.get<Product[]>(url);
  }

  getProductsByLimitAndSorted(limit:String,sorting:String): Observable<Product[]> {
    const url = `${this.apiUrl}?limit=${limit}?sort=${sorting}`;
    return this.http.get<Product[]>(url);
  }

  getProductById(id: number): Observable<Product> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Product>(url);
  }

  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.apiUrl, product)
      .pipe(
        catchError(this.handleError)
      );
  }

  updateProduct(product: Product): Observable<Product> {
    const url = `${this.apiUrl}/${product.id}`;
    return this.http.put<Product>(url, product)
      .pipe(
        catchError(this.handleError)
      );
  }

  deleteProduct(id: number): Observable<any> { 
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url)
      .pipe(
        map(() => null), 
        catchError(this.handleError)
      );
  }

  getCategories():Observable<string[]>{
    const url=`${this.apiUrl}/categories`;
    return this.http.get<string[]>(url);
  }

  private handleError(error: any): Observable<any> {
    console.error('Error: ', error);
    return throwError(error);
  }
}