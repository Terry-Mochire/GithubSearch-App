import { Component, OnInit } from '@angular/core';
import { UserAPIService } from '../user-api.service'; 
import { Repo } from '../repository';
import {faStar,faCode,faEye,faLink,faFolder,faArrowLeft} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {
 
  repos!: Repo[];

  faEye = faEye;
  faStar = faStar;
  faCode = faCode;
  faFolder = faFolder;
  faLink = faLink;
  faArrowLeft = faArrowLeft;

  constructor(private createdUser: UserAPIService ) { }

  ngOnInit(): void {
    this.getRepos("fight")
  }



  getRepos(repoName:string){
      this.createdUser.searchRepos(repoName).then(
        ()=>{
             this.repos = this.createdUser.repos;
             console.log(this.repos);
        },
        (error)=>{
          alert("An error occured please try again");
        }
      )

  }

}