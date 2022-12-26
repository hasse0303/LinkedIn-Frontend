import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(
    private http: HttpClient
  ) { }

  getSelectedPosts(params: HttpParams){
    return this.http.get<Post[]>(`http://localhost:3000/api/feed`, {params})
  }
}
