import { Component, OnInit } from '@angular/core';
import { Product1 } from '../product1';

@Component({
  selector: 'app-showproducts',
  templateUrl: './showproducts.component.html',
  styleUrls: ['./showproducts.component.css']
})
export class ShowproductsComponent implements OnInit {

  products : Product1[]=[
    {name:"gazouz",
     like:0,
     dislike:0},
     {name:"fanta",
     like:0,
     dislike:0},
     {name:"coca",
     like:0,
     dislike:0},
  ];
  constructor() { }

  ngOnInit(): void {
  }
  increaseLike(t:Product1){
    this.products[this.products.indexOf(t)].like++;
  }
  decreaseLike(t:Product1){
    this.products[this.products.indexOf(t)].dislike++;
  }

}
