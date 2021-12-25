import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Provider } from '../provider';

@Component({
  selector: 'app-show-one-provider',
  templateUrl: './show-one-provider.component.html',
  styleUrls: ['./show-one-provider.component.css']
})
export class ShowOneProviderComponent implements OnInit {

  @Input() provider !:Provider;
  @Input() search !:String;
  @Output() notif= new EventEmitter<Provider>();
  constructor() { }

  ngOnInit(): void {
  }
  sendDelete(){
    this.notif.emit(this.provider);
  }
}
