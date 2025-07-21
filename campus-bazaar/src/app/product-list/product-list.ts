import { Component } from '@angular/core';
import { ProductCard } from './product-card/product-card';
@Component({
  selector: 'app-product-list',
  imports: [ProductCard],
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss',
})
export class ProductList {
  products: any = [
    {
      title: 'Data Structures Book',
      description: 'Used but in great condition, covers DSA in C++.',
      price: 299,
      imageUrl: 'https://m.media-amazon.com/images/I/81WcnNQ-TBL._SL1500_.jpg', // Data Structures Using C++
    },
    {
      title: 'Engineering Drawing Tools',
      description: 'Mini Drafter and Drawing Set.',
      price: 180,
      imageUrl: 'https://m.media-amazon.com/images/I/81WcnNQ-TBL._SL1500_.jpg', // Mini Drafter
    },
    {
      title: 'Python Crash Course',
      description: 'Beginner friendly book for Python programming.',
      price: 350,
      imageUrl: 'https://m.media-amazon.com/images/I/81WcnNQ-TBL._SL1500_.jpg', // Python Crash Course Book
    },
  ];
}
