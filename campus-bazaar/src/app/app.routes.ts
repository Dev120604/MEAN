import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path: '',
        loadComponent: () => import('./home/home').then(route => route.Home)
    },
    {
        path: 'about',
        loadComponent: () => import('./about/about').then(route => route.About)
    },
    {
        path: 'contact',
        loadComponent: () => import('./contact/contact').then(route => route.Contact)
    },
    {
        path: 'product-list',
        loadComponent: () => import('./product-list/product-list').then(route => route.ProductList) 
    }
];
