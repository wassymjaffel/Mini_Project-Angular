import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { Invoice } from 'src/model/Invoice';
@Component({
  selector: 'app-update-invoice',
  templateUrl: './update-invoice.component.html',
  styleUrls: ['./update-invoice.component.css']
})
export class UpdateInvoiceComponent implements OnInit,OnChanges {
  @Input() item:any
  @Output() newItemEvent = new EventEmitter<any>();
  newItem:any
  isUpdate=true
  constructor() { }

  ngOnInit(): void {
    
  }

  updateItem(){
    
    //this.newItemEvent.emit(this.item);

  }
  addItem(){
    this.newItemEvent.emit(this.item);
  }
  ngOnChanges(){
    if(!this.item){
      this.item=new Invoice()
      this.isUpdate=false
 
      console.log(this.item)
     }else {
       this.isUpdate=true
     }
  }

}
