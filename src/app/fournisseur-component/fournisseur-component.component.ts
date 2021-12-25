import { Component, OnInit } from '@angular/core';
import { Fournisseur } from 'src/model/Fournissuer';

@Component({
  selector: 'app-fournisseur-component',
  templateUrl: './fournisseur-component.component.html',
  styleUrls: ['./fournisseur-component.component.css']
})
export class FournisseurComponentComponent implements OnInit {

list : Fournisseur[]= [
  {idFournisseur:1,code:"1ABC4522",libelle:"hp"},
  {idFournisseur:2,code:"2ABC4522",libelle:"dell"},
  {idFournisseur:3,code:"3ABC4522",libelle:"lenovo"},
  {idFournisseur:400,code:"40ABC452",libelle:"asus"}
  ];
  constructor() { }

  DeleteFournisseur(f:any){
    
    this.list.splice(this.list.indexOf(f),1);
  }
  ngOnInit(): void {
  }

}
