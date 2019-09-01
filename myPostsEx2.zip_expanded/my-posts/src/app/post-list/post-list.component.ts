import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { PostListItemComponent } from '../post-list-item/post-list-item.component';
import { Subscription } from 'rxjs';
import { PostsService } from '../services/posts.service';

@Component({
	selector: 'app-post-list',
	templateUrl: './post-list.component.html',
	styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit, OnDestroy {

	@Input() listPosts: PostListItemComponent[];
	postsSubscripton: Subscription;

	constructor(private postsService : PostsService) { }

	ngOnInit() {
		
		this.postsSubscripton = this.postsService.postsSubject.subscribe(
			(posts: any[]) => {
				this.listPosts = posts;
			}
		);
		this.postsService.getAllPosts();
		this.postsService.emitPostsSubject();
	}

	ngOnDestroy(){
		this.postsSubscripton.unsubscribe();
	}
}
