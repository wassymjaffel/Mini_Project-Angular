import { Component, OnInit } from '@angular/core';
import { Provider } from '../provider';

@Component({
  selector: 'app-list-provider-component',
  templateUrl: './list-provider-component.component.html',
  styleUrls: ['./list-provider-component.component.css']
})
export class ListProviderComponentComponent implements OnInit {

  name:String="";
  show=false;
  ListProviders:Provider[] =[
    { idProvider: 1, code: "F-1978",libelle: "PC"},
    { idProvider: 2, code: "F-1978",libelle: "TV"},
    { idProvider: 3, code: "F-1978",libelle: "Table"},
    ];
  constructor() { }

  ngOnInit(): void {
  }

  deleteFromList(t:Provider){
    this.ListProviders.splice(this.ListProviders.indexOf(t),1);
  }
  saveData(t:any){
    this.ListProviders.push(t);
    this.show=false;
  }
  showAdd(){
    this.show=true;
  }
}
