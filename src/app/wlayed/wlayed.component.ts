import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/model/User';

@Component({
  selector: 'app-wlayed',
  templateUrl: './wlayed.component.html',
  styleUrls: ['./wlayed.component.css']
})
export class WlayedComponent implements OnInit {

  
  // @Input() test!:String;
  @Input() user!:User;
  // m child lel parent tetsama notif
  @Output() notif=new EventEmitter<User>();
  constructor() { }

  ngOnInit(): void {
    
  }
  SendNotif(u:User):any{
  this.notif.emit(u);
  }
}
