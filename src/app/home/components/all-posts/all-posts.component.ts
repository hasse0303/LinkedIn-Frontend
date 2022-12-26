import { HttpParams } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { Post } from '../../models/post';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.scss'],
})
export class AllPostsComponent implements OnInit {

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  allLoadedPosts: Post[] = [];
  max = 5;
  offset = 0;
  constructor(
    private postService: PostService
  ) { }

  ngOnInit() {
    this.getPosts(false);
  }

    getPosts(isInit: boolean, event?: any){
      if(this.max === 20){
        event.target.disable = true
      }
      const params = new HttpParams().set('max', this.max).set('offset', this.offset);
      this.postService.getSelectedPosts(params).subscribe((posts: Post[]) => {
        this.allLoadedPosts.push(...posts);
        if(isInit) event.target.complete();
      })
    }

    loadData(event){
    this.offset += 5;
    this.getPosts(true,event)
  }
}
