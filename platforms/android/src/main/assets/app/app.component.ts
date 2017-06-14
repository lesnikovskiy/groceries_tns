import { Component } from "@angular/core";

import { User } from "./shared/user/user";

import { UserService } from "./shared/user/user.service";

@Component({
	selector: "my-app",
	templateUrl: "pages/login/login.html",
  styleUrls: ["pages/login/login-common.css", "pages/login/login.css"]
})
export class AppComponent {
	user: User;
	isLoggingIn = true;

	constructor(private userService: UserService) {
		this.user = new User();
		this.user.email = "nativescriptrocks@telerik.com";
	}

	submit() {
		if (this.isLoggingIn) {
			this.login();
		} else {
			this.signUp();
		}
	}

	login() {
		//alert(`Submit ${this.user.email}`);
	}

	signUp() {
		this.userService.register(this.user);
	}

	toggleDisplay() {
		this.isLoggingIn = !this.isLoggingIn;
	}
}