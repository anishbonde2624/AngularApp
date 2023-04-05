import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { LoginUserService } from '../login-user.service';



@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit{
  user:User = new User();
  constructor(private loginUserService: LoginUserService){   }

  ngOnInit(): void {    
  }

  userlogin(){
    console.log(this.user)
    this.loginUserService.loginuser(this.user).subscribe(data => {
      alert("Login Successful!")
    },error => alert("Enter correct credentials"));
    
  }


}
