import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Repository } from './repository';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RepositoryApiService {
  repositories! : Repository
  githubUserName:string = 'Terry-Mochire';
  userRepositories_URL:string = `https://api.github.com/users/Terry-Mochire/repos`
  constructor(private http: HttpClient) { 
  }
   getRepositories(): Observable<Repository[]>{
    return this.http.get<Repository[]>(this.userRepositories_URL)
   }
}