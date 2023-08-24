import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPosts } from '../shared-classes-types/IPosts';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PostService {
apiURL = 'https://jsonplaceholder.typicode.com/posts'
  constructor(private http : HttpClient) { }
  getAllPosts() : Observable<IPosts[]>
  {
    return this.http.get<IPosts[]>(this.apiURL)
  }
}
