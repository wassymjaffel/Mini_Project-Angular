import { Component, Input, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
invoices=[
  {idInvoice:1,discountAmount:20,billAmount:500,dateBill:"14/07/2021",status:true}
,
{idInvoice:2,discountAmount:10,billAmount:1000,dateBill:"02/10/2021",status:false}
,
{idInvoice:3,discountAmount:50,billAmount:200,dateBill:"15/12/2021",status:false}

]
update:boolean=false
 updatedItem:any

  constructor() { }

  ngOnInit(): void {
  }

addInvoice(){
  this.updatedItem=null
  this.update=true
}
updateInvoice(index:number){
  this.update=true
  
  this.updatedItem=this.invoices[index]
}
deleteInvoice(index:number){
this.invoices.splice(index,1)
}

addItem(newItem: any) {
  console.log(newItem)
  this.invoices.push(newItem);
  this.update=false

}
}
