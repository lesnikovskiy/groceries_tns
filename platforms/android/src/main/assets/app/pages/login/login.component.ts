import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { Page } from "ui/page";
import { Color } from "color";
import { View } from "ui/core/view";
import { TextField } from "ui/text-field";
import { setHintColor } from "../../utils/hint-util";

import { User } from "../../shared/user/user";
import { UserService } from "../../shared/user/user.service";

@Component({
	selector: "my-app",
	templateUrl: "pages/login/login.html",
	styleUrls: ["pages/login/login-common.css", "pages/login/login.css"]
})
export class LoginComponent implements OnInit {
	user: User;
	isLoggingIn = true;

	@ViewChild("container") container: ElementRef;

	@ViewChild("email") email: ElementRef;
	@ViewChild("password") password: ElementRef;

	constructor(
		private userService: UserService,
		private router: Router,
		private page: Page
	) {
		this.user = new User();
		this.user.email = "user@nativescript.org";
		this.user.password = "password";
	}

	ngOnInit() {
		this.page.actionBarHidden = true;
		this.page.backgroundImage = "res://bg_login";
	}

	submit() {
		if (!this.user.isValidEmail()) {
			alert("Enter a valid email address.");
			return;
		}

		if (this.isLoggingIn) {
			this.login();
		} else {
			this.signUp();
		}
	}

	login() {
		this.userService.login(this.user)
			.subscribe(
				() => this.router.navigate(["/list"]),
				(error) => alert("Unfortunately we could not find your account")
			);
	}

	signUp() {
		this.userService.register(this.user)
			.subscribe(() => {
				alert("Your account was  successfully created");
				this.toggleDisplay();
			}, () => alert("Unfortunately we were unable to create your account."));
	}

	toggleDisplay() {
		this.isLoggingIn = !this.isLoggingIn;
		this.setTextFieldColors();

		const container = this.container.nativeElement as View;
		container.animate({
			backgroundColor: this.isLoggingIn ? new Color("white") : new Color("#301217"),
			duration: 200
		});
	}

	setTextFieldColors() {
		const emailTextField: TextField = this.email.nativeElement as TextField;
		const passwordTextField: TextField = this.password.nativeElement as TextField;

		let mainTextColor: Color = new Color(this.isLoggingIn ? "black" : "#C4AFB4");
		emailTextField.color = mainTextColor;
		passwordTextField.color = mainTextColor;

		let hintColor: Color = new Color(this.isLoggingIn ? "#ACA6A7" : "#C4AFB4");
		setHintColor({ view: emailTextField, color: hintColor });
		setHintColor({ view: passwordTextField, color: hintColor });
	}
}