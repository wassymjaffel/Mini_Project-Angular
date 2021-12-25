import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-loginuser',
  templateUrl: './loginuser.component.html',
  styleUrls: ['./loginuser.component.css']
})
export class LoginuserComponent implements OnInit {
f=this.fb.group({
 email:['',[Validators.required,Validators.email]],
 password:['',[Validators.required,Validators.pattern("^[a-zA-Z0-9]{8,}?")]]
});
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  get email(){
    return this.f.get("email");
  }
  get password(){
    return this.f.get("password");
  }
  showform(f:any){
    console.log(f.value);
  }
}
