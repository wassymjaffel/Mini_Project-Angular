import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  list: any[]= [
    {
    idCustomer: 1,
    firstName: "Mila",
    lastName: " Kunis",
    birthDate: "1999-06-30",
    accountCategory: "Admin",
    email: "mila@kunis.com",
    password: "test",
    picture: "https://bootdey.com/img/Content/avatar/avatar3.png",
    profession: "Software Engineer",
    state:true
    },
    {
    idCustomer: 2,
    firstName: "George",
    lastName: "Clooney",
    birthDate: "1999-06-30",
    accountCategory: "Customer",
    email: "marlon@brando.com",
    password: "test",
    picture: "https://bootdey.com/img/Content/avatar/avatar2.png",
    profession: "Software Engineer",
    state:true
    },
    {
    idCustomer: 3,
    firstName: "George",
    lastName: "Clooney",
    birthDate: "1999-06-30",
    accountCategory: "Customer",
    email: "marlon@brando.com",
    password: "test",
    picture: "https://bootdey.com/img/Content/avatar/avatar1.png",
    profession: "Software Engineer",
    state:true
    },
    {
    idCustomer: 4,
    firstName: "Ryan",
    lastName: "Gossling",
    birthDate:"1999-06-30",
    accountCategory: "Golden",
    email: "Ryan@nicholson.com",
    password: "test",
    picture: "https://bootdey.com/img/Content/avatar/avatar4.png",
    profession: "Software Engineer",
    state:true
    },
    {
    idCustomer: 5,
    firstName: "Robert",
    lastName: "Downey",
    birthDate: "1999-06-30",
    accountCategory: "Blocked Account",
    email: "robert@nicholson.com",
    password: "test",
    picture: "https://bootdey.com/img/Content/avatar/avatar5.png",
    profession: "Software Engineer",
    state:true
    },
    ];
    cat:any;
    search:any[]=[];
  constructor(private activatedroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.search=this.list;
    //this.list=this.search.filter((k)=>{
     // return k.accountCategory==this.activatedroute.snapshot.params.cat
    //}
    //);
   this.activatedroute.params.subscribe((test)=>{
     this.list=this.search.filter((k)=>{
       return k.accountCategory==test.cat
      }
      );
   });
  }
}
