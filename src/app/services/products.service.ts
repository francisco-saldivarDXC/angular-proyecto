import { Injectable } from '@angular/core';

export interface IProducts {
  id?: number,
  name?: string,
  description?: string,
  price?: number
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  public products : IProducts[] = [
    {
      id: 1,
      name: "Laptop",
      description: "Lenovo legion",
      price: 60000
    },
    {
      id: 2,
      name: "Celular",
      description: "Iphone 15",
      price: 30000
    },
    {
      id: 3,
      name: "Tablet",
      description: "IPad air 2",
      price: 15000
    },
    {
      id: 4,
      name: "Monitor",
      description: "Monitor BenQ",
      price: 10000
    }
  ];

  constructor() { }

  public getProducts() : IProducts[] {
    return this.products;
  }

  public createItem(product: IProducts) {
    this.products.push(product);
  }

  public deleteItem(id : number) {
    const newArray = this.products.filter((item) => item.id !== id)
    this.products = newArray;
  }

  updateItem(product: IProducts){
    let aux : IProducts = {};
    const auxArray = this.products.map(element => {
      if(product.id === element.id){
        return{
          ...product
        }
      }else{
        return{
          ...element
        }
      }
    });
    this.products = auxArray;
    console.log(this.products);
  }
}
