import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUsers } from '../shared-classes-types/IUsers';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {
apiURl ='https://jsonplaceholder.typicode.com/users'
  constructor(private http : HttpClient) { }
  getAllUsers() : Observable<IUsers[]>{
    return this.http.get<IUsers[]>(this.apiURl)
  }
}
