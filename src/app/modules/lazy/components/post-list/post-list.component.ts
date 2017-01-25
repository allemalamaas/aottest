import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {EndpointService} from "../../../core/services/endpoint.service";
import 'rxjs/add/operator/mergeMap';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  private posts: Observable<any[]>;

  constructor(private endpoint: EndpointService) { }

  ngOnInit() {
    this.posts = this.endpoint.getPosts();
  }
  getComments(post:any):void {
    post.comments = this.endpoint.getComments(post.id);
  }
}
