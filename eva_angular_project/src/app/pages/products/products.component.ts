import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../shared-classes-types/IProduct';
import { ICategory } from '../../shared-classes-types/ICategory';
import { DiscountOffers } from '../../shared-classes-types/DiscountOffersEnum';
import { ProductServiceService } from '../../services/product-service.service';
import { NavbarService } from 'src/app/services/navbar.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  Discount: DiscountOffers;
  StoreName: string;
  StoreLogo: string;
  ProductList: IProduct[];
  CategoryList: ICategory[];
  ClientName: string;
  IsPurchased: boolean;
constructor(private productService: ProductServiceService, public nav : NavbarService){
  this.Discount = DiscountOffers.TenPercent;
        this.StoreName = "Eva Store";
        this.StoreLogo = "path/to/store-logo.png";
        this.ProductList = [];
        this.CategoryList = [
            // Initialize with actual category data
        ];
        this.ClientName = "John Doe";
        this.IsPurchased = false;
}
ngOnInit(){
  this.nav.show()
  this.productService.getAllProducts().subscribe(data => {
    this.ProductList = data;
    console.log(this.ProductList)
});
}
}
