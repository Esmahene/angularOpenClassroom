import { Component, Input } from '@angular/core';
import * as firebase from 'firebase';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'my-posts';

	constructor() {
		var firebaseConfig = {
			apiKey: "AIzaSyDAbfM3Bu5QoRUwqUGTwgXc_Y74EQTZGzY",
			authDomain: "ocposts-565a5.firebaseapp.com",
			databaseURL: "https://ocposts-565a5.firebaseio.com",
			projectId: "ocposts-565a5",
			storageBucket: "",
			messagingSenderId: "887910314360",
			appId: "1:887910314360:web:836a4436e95b5187"
		};
		// Initialize Firebase
		firebase.initializeApp(firebaseConfig);
	}
}
