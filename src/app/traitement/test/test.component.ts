import { Component, OnInit } from '@angular/core';
import { TestserviceService } from 'src/app/service/testservice.service';



@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private service :TestserviceService) { }

  ngOnInit(): void {
  
this.service.showMsg();

}

}
