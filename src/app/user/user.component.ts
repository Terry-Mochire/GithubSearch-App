import { Component, OnInit } from '@angular/core';
import { UserAPIService } from '../user-api.service';
import { User } from '../user'; 
import { Repo } from '../repository';
import { faEye, faStar, faCode, faSearch, faFolder, faLink } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {


  userDetails!: User;
  topics!:string;
  repos!: Repo[];
  defaultUser!:User;

  faEye = faEye;
  faStar = faStar;
  faCode = faCode;
  faSearch = faSearch;
  faFolder = faFolder;
  faLink = faLink;

  constructor(private createdUser: UserAPIService) {


  }
  ngOnInit(){
     this.getUserDetails('charity-bit')
  }



  getUserDetails(username:string){
    this.createdUser.getUser(username).then(

      (success)=>{
        this.userDetails = this.createdUser.user;
        console.log(success)
      },
      (error)=>{
        alert("User not found");
        console.log(error)
      }
    );

    this.createdUser.getUserRepos(username).then(
      ()=>{
        this.repos = this.createdUser.userRepos;
      },
      (error)=>{
        console.log(error)
      }
    )
   
  }



}