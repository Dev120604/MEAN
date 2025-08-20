import { Component, OnInit } from '@angular/core';
import { ProductCard } from './product-card/product-card';
import { Product } from '../services/product';
@Component({
  selector: 'app-product-list',
  imports: [ProductCard],
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss',
})
export class ProductList implements OnInit {

  products: any = [];

  constructor(
    private productService: Product
  ) {};
  
  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }


}
