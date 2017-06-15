import { Component, ElementRef, OnInit, ViewChild, NgZone } from "@angular/core";
import { TextField } from "ui/text-field";

import { Grocery } from "../../shared/grocery/grocery";
import { GroceryListService } from "../../shared/grocery/grocery-list.service";
import * as SocialShare from "nativescript-social-share";

@Component({
	selector: "list",
	templateUrl: "pages/list/list.html",
	styleUrls: ["pages/list/list-common.css", "pages/list/list.css"]
})
export class ListComponent implements OnInit {
	groceryList: Grocery[] = [];
	grocery: string = "";
	isLoading: boolean =  false;
	listLoaded: boolean = false;

	@ViewChild("groceryTextField") groceryTextField: ElementRef;

	constructor(
		private groceryListService: GroceryListService,
		private zone: NgZone
	) {}

	ngOnInit() {
		this.isLoading = true;

		this.groceryListService.load().subscribe(
			loadGroceries => {
				loadGroceries.forEach(groceryObject => {
					this.groceryList.unshift(groceryObject);
				});
				this.isLoading = false;
				this.listLoaded = true;
			},
			error => alert(error)
		);
	}

	add(): void {
		if (this.grocery.trim() === "") {
			alert("Enter a grocery item");
			return;
		}

		const textField = this.groceryTextField.nativeElement as TextField;
		textField.dismissSoftInput();

		this.groceryListService.add(this.grocery)
			.subscribe(
				(groceryObject: Grocery) => {
					this.groceryList.unshift(groceryObject);
					this.grocery = "";
				},
				error => {
					alert({
						message: "An error occurred while adding an item to your list",
						okButtonText: "OK"
					});
					this.grocery = "";
				}
			);
	}

	delete(grocery: Grocery) {
		this.isLoading = true;

		this.groceryListService.delete(grocery.id).subscribe(
			() => {
				// Running the array splice in a zone ensures that change detection gets triggered.
				this.zone.run(() => {
					const index = this.groceryList.indexOf(grocery);
					this.groceryList.splice(index, 1);

					this.isLoading = false;
				});
			},
			error => alert(error)
		);
	}

	share(): void {
		const listString: string = this.groceryList
			.map(grocery => grocery.name)
			.join(", ")
			.trim();

		SocialShare.shareText(listString);
	}
}