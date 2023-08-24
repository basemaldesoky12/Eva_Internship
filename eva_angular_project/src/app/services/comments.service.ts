import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private http : HttpClient) { }
  getComment (id : any){
    return this.http.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
  }
}
