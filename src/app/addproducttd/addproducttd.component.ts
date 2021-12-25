import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addproducttd',
  templateUrl: './addproducttd.component.html',
  styleUrls: ['./addproducttd.component.css']
})
export class AddproducttdComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  showform(f:any){
    console.log(f);
    }
}
