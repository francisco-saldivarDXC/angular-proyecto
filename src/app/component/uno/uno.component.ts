import { Component } from '@angular/core';
import { IProducts, ProductsService } from 'src/app/services/products.service';


@Component({
  selector: 'app-uno',
  templateUrl: './uno.component.html',
  styleUrls: ['./uno.component.css']
})

export class UnoComponent {
  public products : IProducts[] = [];
  public product : IProducts = {};
  public showModifyItem : boolean = false;
  public showNewProduct : boolean = false;

  constructor(private service: ProductsService){
    this.products = this.service.getProducts();
  }

  public newItem() : void {
    this.service.createItem(this.product);
    this.products = this.service.getProducts();
    this.showNewProduct = false;
  }

  public deleteItem(id: number) : void {
    //Eliminar del servicio
    this.service.deleteItem(id);
    this.products = this.service.getProducts();
  }

  public updateItem() : void {
    this.service.updateItem(this.product);
    this.products = this.service.getProducts();
    this.showModifyItem = false;
    this.product = {};
  }

  public showModify(element : IProducts) : void {
    this.product = element;
    this.showModifyItem = !this.showModifyItem;
    this.products = this.service.getProducts();
  }

  public showNew() : void {
    this.product = {};
    this.showNewProduct = !this.showNewProduct;
  }
}
