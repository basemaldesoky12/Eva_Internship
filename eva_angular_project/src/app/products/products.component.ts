import { Component } from '@angular/core';
import { IProduct } from '../shared-classes-types/IProduct';
import { ICategory } from '../shared-classes-types/ICategory';
import { DiscountOffers } from '../shared-classes-types/DiscountOffersEnum';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  Discount: DiscountOffers;
  StoreName: string;
  StoreLogo: string;
  ProductList: IProduct[];
  CategoryList: ICategory[];
  ClientName: string;
  IsPurchased: boolean;
constructor(){
  this.Discount = DiscountOffers.TenPercent;
        this.StoreName = "Eva Store";
        this.StoreLogo = "path/to/store-logo.png";
        this.ProductList = [
            {ID :1, Name : "iphone-14" , Quantity : 3 , img :"../../assets/images/iphone-14.jpg", Price : 900},
            {ID :2, Name : "pixel-7" , Quantity : 3 , img :"../../assets/images/google-pixel-7.jpg", Price : 900}

        ];
        this.CategoryList = [
            // Initialize with actual category data
        ];
        this.ClientName = "John Doe";
        this.IsPurchased = false;
}
}
