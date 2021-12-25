import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(private acr:ActivatedRoute) { }

  ngOnInit(): void {
    this.acr.params.subscribe((test)=>{
      console.log(test)
      console.log(test.id)
    });
    console.log(this.acr.snapshot.params.id)
  }

}
