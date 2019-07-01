import { Component, OnInit } from '@angular/core';
import {ReactiveFormsModule,FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms'
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';
import { SessionService } from '../session.service';
import { error } from 'util';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  public frm:FormGroup;
  public hasFailed:boolean;

  constructor(private router:Router,private fb:FormBuilder, private http:HttpClient,private api:ApiService, private session:SessionService) 
  {

    this.frm= fb.group({
      username:['',Validators.required],
      password:['',Validators.required]
    })
  }

public doSigIn(){
const username= this.frm.get('username').value;
const password= this.frm.get('password').value;

this.api.signIn(username,password).subscribe(
  (result: any) => {
    console.log("Result is ",result);
    this.session.accessToken=result.token;
       this.session.name=result.name;
       this.hasFailed=false;
       this.router.navigate(['todos']);
  },
    (error:any)=>
    {
      this.hasFailed=true;
       console.log("Invalid credentials");
    }
  );

  console.log("username", username);
  console.log("password", password);
}
 
  ngOnInit() {
   
     
    }
  }
