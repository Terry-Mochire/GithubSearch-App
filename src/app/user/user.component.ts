import { Component, OnInit } from '@angular/core';
import { UserAPIService } from '../user-api.service';
import { User } from '../user';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  myUser!: User
  constructor( private userService: UserAPIService) { }
  
  ngOnInit(): void {
    this.userService.getUserDetails();
    this.myUser = this.userService.user;
    console.log(this.myUser)
}
}
