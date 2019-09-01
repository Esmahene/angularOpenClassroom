import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Post } from '../models/post';
import { PostsService } from '../services/posts.service';

@Component({
	selector: 'app-post-list-item',
	templateUrl: './post-list-item.component.html',
	styleUrls: ['./post-list-item.component.scss']
})

export class PostListItemComponent implements OnInit {

	@Input() postItem: Post;

	constructor(private postService: PostsService) { }

	updateLoveIts(nb) {
		this.postItem.loveIts = this.postItem.loveIts + nb;
		this.postService.savePosts();
	}

	onDelete() {
		if (confirm ("Etes vous certain de vouloir supprimer le post intitulé "+ this.postItem.title + " ?")){
				this.postService.removeOnePost(this.postItem);
		}
	}

	ngOnInit() {
	}

}
