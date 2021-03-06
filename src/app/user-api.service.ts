import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from './user';
import { Repo } from './repository';

@Injectable({
  providedIn: 'root',
})
export class UserAPIService{

  user!: User;
  errorMessage!: string;
  repoName!: string;
  userRepos!: Repo[];
  repos!:Repo[]
  constructor(private http: HttpClient) {
  
  }



  //search for a user
  getUser(userName: string) {
    const promise = new Promise<void>((resolve, reject) => {
      this.http
        .get<User>(`${environment.user_URL}/${userName}`,{
          headers:{
            Authorization:`token ${environment.access_token}`

          }
          
        })
        .subscribe({
          next: (res: any) => {
            this.user = res;
            resolve();
          },
          error: (error: any) => {
            reject(error);
          },
          complete: () => {
            console.log('complete');
          },
        });
    });

    return promise;
  }



  //search for a user's repo
  getUserRepos(userName: string) {
    const promise = new Promise<void>((resolve, reject) => {
      this.http
        .get<Repo[]>(`${environment.user_URL}/${userName}/repos`,{headers:{
          Authorization: `token ${environment.access_token}`
        }})
        .subscribe({
          next: (res: any) => {
            this.userRepos = res;
            console.log(this.userRepos);
            resolve();
          },
          error: (error: any) => {
            reject(error);
          },
          complete: () => {
            console.log('complete');
          },
        });
    });

    return promise;
  }




  //search For any Repo
  searchRepos(name:string){


    const promise =  new Promise<void>((resolve,reject)=>{
        this.http.get<Repo[]>(`${environment.userRepositories_URL}${name}*`,{
          headers: {
            Authorization: `token ${environment.access_token}`,
          },

        }).subscribe({
          next:(res:any)=>{
            this.repos = res.items;
            resolve();
          },
          error: (error:any)=>{
            resolve(error)
          },
          complete:()=>{
            console.log('complete')
          }
        })
    })



    return promise;

  }

}