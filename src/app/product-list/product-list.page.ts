import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Product, ProductsService } from '../services/products.service';
import { ThemeButtonComponent } from '../theme-button/theme-button.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.page.html',
  styleUrls: ['./product-list.page.scss'],
  standalone: true,
  imports: [ThemeButtonComponent, IonicModule, CommonModule, FormsModule]
})
export class ProductListPage implements OnInit {

  products: Product[]=[];

  productService = inject(ProductsService)

  async ngOnInit() {
    const response = await this.productService.getAll();
    this.products = response;

    console.log(this.products)
  }

}
