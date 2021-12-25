import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product1 } from '../product1';

@Component({
  selector: 'app-showoneproduct',
  templateUrl: './showoneproduct.component.html',
  styleUrls: ['./showoneproduct.component.css']
})
export class ShowoneproductComponent implements OnInit {

  @Input() product !:Product1;
  @Output() notif= new EventEmitter<Product1>();
  @Output() notif1= new EventEmitter<Product1>();
  constructor() { }

  ngOnInit(): void {
  }

  Like(){
    this.notif.emit(this.product)
  }
  DisLike(){
    this.notif1.emit(this.product)
  }
}
