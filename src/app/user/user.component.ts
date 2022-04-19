import { Component, Input, OnInit } from '@angular/core';
import { UserAPIService } from '../user-api.service';
import { User } from '../user';
import { FormControl } from '@angular/forms';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  myUser!: User
  name: any = new FormControl();
 
 
  constructor( private userService: UserAPIService) { }
  
  ngOnInit(): void {
    this.searchRepos();
    this.userService.getUserDetails(this.searchRepos()); 
    this.myUser = this.userService.user;
    console.log(this.myUser)
  }

  searchRepos(){
    
   const username = new FormControl(this.name.value);
    console.log(username.value);
    return false;
  }

}
