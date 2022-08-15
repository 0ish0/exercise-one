import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Shared/Models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

 
    user1 : User = {username: "FDMUser",password:"1234"};


}
