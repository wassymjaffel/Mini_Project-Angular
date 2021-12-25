import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/model/User';

@Component({
  selector: 'app-userformreactive',
  templateUrl: './userformreactive.component.html',
  styleUrls: ['./userformreactive.component.css']
})
export class UserformreactiveComponent implements OnInit {

  user = new User();
  form= new FormGroup({
    firstName : new FormControl('',Validators.required),
    lastName : new FormControl('',Validators.required)

  });
  //firstName= new FormControl('',[Validators.required,Validators.minLength(2)]),
  f=this.fb.group({
    firstName:["",[Validators.required,Validators.email]],
    lastName:['',[Validators.required]],
    cours : this.fb.array([
      new FormControl('angular'),
      new FormControl('react')
    ])
  });
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  getfirstName(){
    return this.form.get('firstName');
  }
  getlastName(){
    return this.form.get('lasttName');
  }
  get cours(){
    return this.f.get('cours') as FormArray
  }
  addcours(){
    this.cours.push(new FormControl(''));
  }
  deletecours(j:any){
    this.cours.removeAt(j);
  }
}
