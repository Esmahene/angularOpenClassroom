
import {Input } from '@angular/core';export class Post {

	@Input() title: string;
	@Input() content: string;
	@Input() loveIts: number;
	@Input() createdAt: string;


	constructor(creation: string, title: string , content: string) {
		this.createdAt = creation;
		this.title = title;
		this.content = content;
		this.loveIts = 0;
	}
}