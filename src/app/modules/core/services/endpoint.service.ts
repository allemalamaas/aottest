import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs";
import 'rxjs/add/operator/map';

@Injectable()
export class EndpointService {

  constructor(private http:Http) { }

  private ROOT:string = 'https://jsonplaceholder.typicode.com';

  public getPosts():Observable<any[]> {
    return this.http.get(`${this.ROOT}/posts`).map(data => data.json());
  }
  public getComments(postId:number):Observable<any[]> {
    return this.http.get(`${this.ROOT}/posts/${postId}/comments`).map(data => {
      console.log(data);
      return data.json()
    });
  }
}
