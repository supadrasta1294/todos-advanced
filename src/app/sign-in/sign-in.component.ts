import { Component, OnInit } from '@angular/core';
import {ReactiveFormsModule,FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms'

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  public frm:FormGroup;

  constructor(private fb:FormBuilder) 
  {

    this.frm= fb.group({
      username:['',Validators.required],
      password:['',Validators.required]
    })
  }

public doSigIn(){
const username= this.frm.get('username');
const password= this.frm.get('password');
}
 
  ngOnInit() {
   
     
    }
  }
