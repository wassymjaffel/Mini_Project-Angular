import { Component, OnInit } from '@angular/core';
import { User } from 'src/model/User';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  user = new User();
  list :User[]=[

  ];
  constructor() { }

  ngOnInit(): void {
  }

  add(f:any):void{
    this.list.push(f)
  }
}
