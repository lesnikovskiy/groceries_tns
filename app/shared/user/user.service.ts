import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

import { User } from "./user";
import { Config } from "../config";

@Injectable()
export class UserService {
    constructor(private http: Http) {}

	register(user: User) {
        console.log(JSON.stringify(user));

		const headers: Headers = new Headers();
		headers.append("Content-Type", "application/json");

		return this.http.post(Config.apiUrl + "Users", JSON.stringify({
          Username: user.email,
		  Email: user.email,
		  Password: user.password
		}), {headers: headers})
		.catch(this.handleErrors);
	}

	handleErrors(error: Response) {
		console.log(JSON.stringify(error.json()));

		return Observable.throw(error);
	}
}