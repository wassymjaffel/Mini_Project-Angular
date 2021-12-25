import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Provider } from '../provider';

@Component({
  selector: 'app-addproviderform',
  templateUrl: './addproviderform.component.html',
  styleUrls: ['./addproviderform.component.css']
})
export class AddproviderformComponent implements OnInit {

  @Output() notif=new EventEmitter<Provider>();
  constructor() { }

  ngOnInit(): void {
  }
  save(f:any){
    this.notif.emit(f)
  }
}
