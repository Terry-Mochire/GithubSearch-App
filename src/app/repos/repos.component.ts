import { Component, OnInit } from '@angular/core';
import { Repository } from '../repository';
import { RepositoryApiService } from '../repository-api.service';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {
  userRepositories: Repository[] = []
  constructor(private repos: RepositoryApiService) { }

  ngOnInit(): void {
      this.repos.getRepositories().subscribe(
        data => {
          this.userRepositories = data;
          console.log(this.userRepositories);
          
        }
      )
  }

}
