import { Injectable } from '@angular/core';
import { Post } from '../models/post';
import { Subject } from 'rxjs';
import * as firebase from 'firebase';

@Injectable({
	providedIn: 'root'
})
export class PostsService {

	private posts: Post[] = [];
	postsSubject = new Subject<Post[]>();

	constructor() { }

	emitPostsSubject() {
		this.postsSubject.next(this.posts);
	}

	getAllPosts() {
		firebase.database().ref('/posts')
			.on('value', (data: firebase.database.DataSnapshot) => {
				this.posts = data.val() ? data.val() : [];
				this.emitPostsSubject();
				console.log('get All posts ok');
			}
			);
	}

	removeOnePost(post: Post) {
		const postIndexToRemove = this.posts.findIndex(
			(postEl) => {
				if (postEl === post) {
					return true;
				}
			}
		)
		this.posts.splice(postIndexToRemove, 1);
		this.savePosts();
		this.emitPostsSubject();
	}

	createNewPost(post: Post) {
		this.posts.push(post);
		this.savePosts();
		this.emitPostsSubject();
	}

	savePosts() {
		firebase.database().ref('/posts').set(this.posts);
	}

	updateLoveIt(post: Post, diff: number) {
		const postIndexToUpdate = this.posts.findIndex(
			(postEl) => {
				if (postEl === post) {
					return true;
				}
			}
		)
		this.posts[postIndexToUpdate].loveIts += diff;
		this.savePosts()
		this.emitPostsSubject();
	}
}
