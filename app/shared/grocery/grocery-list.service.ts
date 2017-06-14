import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

import { Config } from "../config";
import { Grocery } from "./grocery";

@Injectable()
export class GroceryListService {
	constructor(private http: Http) {}

	load() {
		const headers = new Headers();
		headers.append("Authorization", `Bearer ${Config.token}`);

		return this.http.get(`${Config.apiUrl}Groceries`, {headers: headers})
			.map((res: Response) => res.json())
			.map(data => {
				const groceryList: Grocery[] = [];
				data.Result.forEach(grocery => {
					groceryList.push(new Grocery(grocery.Id, grocery.Name));
				});

				return groceryList;
			})
			.catch(this.handleErrors);
	}

	handleErrors(error: Response) {
		console.log(JSON.stringify(error.json()));
		return Observable.throw(error);
	}
}