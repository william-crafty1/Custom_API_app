import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../cart-service.service';
import { Item } from '../item';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  cart: Item[]
  showForm: boolean;

  constructor(private cartService: CartServiceService) { }

  ngOnInit(): void {
    this.cartService.getAllItems().subscribe(data => {
      console.log(data);
      this.cart = data;
      this.showForm = false;
    });
  }

  deleteCartItem(id){
    this.cartService.deleteItem(id).subscribe(() => {
      this.cartService.getAllItems().subscribe(d => {
        this.cart = d;
      });
    });
  }

  // editCartItemQuantity(quantity){
  //   this.cartService.editItem(quantity).subscribe(() => {
  //     this.cartService.getAllItems().subscribe(d => {
  //       this.cart = d;
  //     })
  //   })
  // }

  addItem(){
    this.showForm = true;
  }
  
  closeForm(){
    this.showForm = false;
  }

  submitItem(item){
    this.cartService.addItem(item).subscribe(data => {
      this.cartService.getAllItems().subscribe(d => {
        this.cart = d;
      });
    });
    this.showForm = false;
  }

}
