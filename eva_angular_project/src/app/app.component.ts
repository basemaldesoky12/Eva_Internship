import { Component, ViewChild } from '@angular/core';
import { ProductsComponent } from './products/products.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('childProducts') childProducts!: ProductsComponent;

  title = 'eva_angular_project';

  renderChildValues() {
    this.childProducts.renderValues();
}
}
