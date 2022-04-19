import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserAPIService {
  user! :User;
  githubUserName:string = 'Terry-Mochire';
  user_URL:string = `https://api.github.com/users/${this.githubUserName}`
  constructor(private http: HttpClient) {
    this.user = new User(" ", " ", " ", 0, " ", " ")
   }

  getUserDetails(){
    

    const promise = new Promise((resolve, reject) =>
    {
      this.http.get<User>(this.user_URL).toPromise().then(
       response => {
         this.user.login = response!.login;
         this.user.avatar_url = response!.avatar_url;
         this.user.bio = response!.bio;
         this.user.html_url = response!.html_url;
         this.user.public_repos = response!.public_repos;
         this.user.created_at = response!.created_at;
       }, error => {
          this.user.login = 'This user may not exist.'

          reject(error)
       })
    })
    return promise
  }
}