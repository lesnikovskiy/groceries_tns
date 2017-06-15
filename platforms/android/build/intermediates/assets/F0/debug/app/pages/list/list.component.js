"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var grocery_list_service_1 = require("../../shared/grocery/grocery-list.service");
var SocialShare = require("nativescript-social-share");
var ListComponent = (function () {
    function ListComponent(groceryListService) {
        this.groceryListService = groceryListService;
        this.groceryList = [];
        this.grocery = "";
        this.isLoading = false;
        this.listLoaded = false;
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        this.groceryListService.load().subscribe(function (loadGroceries) {
            loadGroceries.forEach(function (groceryObject) {
                _this.groceryList.unshift(groceryObject);
            });
            _this.isLoading = false;
            _this.listLoaded = true;
        }, function (error) { return alert(error); });
    };
    ListComponent.prototype.add = function () {
        var _this = this;
        if (this.grocery.trim() === "") {
            alert("Enter a grocery item");
            return;
        }
        var textField = this.groceryTextField.nativeElement;
        textField.dismissSoftInput();
        this.groceryListService.add(this.grocery)
            .subscribe(function (groceryObject) {
            _this.groceryList.unshift(groceryObject);
            _this.grocery = "";
        }, function (error) {
            alert({
                message: "An error occurred while adding an item to your list",
                okButtonText: "OK"
            });
            _this.grocery = "";
        });
    };
    ListComponent.prototype.share = function () {
        var listString = this.groceryList
            .map(function (grocery) { return grocery.name; })
            .join(", ")
            .trim();
        SocialShare.shareText(listString);
    };
    return ListComponent;
}());
__decorate([
    core_1.ViewChild("groceryTextField"),
    __metadata("design:type", core_1.ElementRef)
], ListComponent.prototype, "groceryTextField", void 0);
ListComponent = __decorate([
    core_1.Component({
        selector: "list",
        templateUrl: "pages/list/list.html",
        styleUrls: ["pages/list/list-common.css", "pages/list/list.css"]
    }),
    __metadata("design:paramtypes", [grocery_list_service_1.GroceryListService])
], ListComponent);
exports.ListComponent = ListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RTtBQUl6RSxrRkFBK0U7QUFDL0UsdURBQXlEO0FBT3pELElBQWEsYUFBYTtJQVF6Qix1QkFBb0Isa0JBQXNDO1FBQXRDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFQMUQsZ0JBQVcsR0FBYyxFQUFFLENBQUM7UUFDNUIsWUFBTyxHQUFXLEVBQUUsQ0FBQztRQUNyQixjQUFTLEdBQWEsS0FBSyxDQUFDO1FBQzVCLGVBQVUsR0FBWSxLQUFLLENBQUM7SUFJaUMsQ0FBQztJQUU5RCxnQ0FBUSxHQUFSO1FBQUEsaUJBYUM7UUFaQSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUV0QixJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxFQUFFLENBQUMsU0FBUyxDQUN2QyxVQUFBLGFBQWE7WUFDWixhQUFhLENBQUMsT0FBTyxDQUFDLFVBQUEsYUFBYTtnQkFDbEMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDekMsQ0FBQyxDQUFDLENBQUM7WUFDSCxLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUN2QixLQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUN4QixDQUFDLEVBQ0QsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQVosQ0FBWSxDQUNyQixDQUFDO0lBQ0gsQ0FBQztJQUVELDJCQUFHLEdBQUg7UUFBQSxpQkF1QkM7UUF0QkEsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2hDLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1lBQzlCLE1BQU0sQ0FBQztRQUNSLENBQUM7UUFFRCxJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBMEIsQ0FBQztRQUNuRSxTQUFTLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUU3QixJQUFJLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7YUFDdkMsU0FBUyxDQUNULFVBQUMsYUFBc0I7WUFDdEIsS0FBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDeEMsS0FBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDbkIsQ0FBQyxFQUNELFVBQUEsS0FBSztZQUNKLEtBQUssQ0FBQztnQkFDTCxPQUFPLEVBQUUscURBQXFEO2dCQUM5RCxZQUFZLEVBQUUsSUFBSTthQUNsQixDQUFDLENBQUM7WUFDSCxLQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUNuQixDQUFDLENBQ0QsQ0FBQztJQUNKLENBQUM7SUFFRCw2QkFBSyxHQUFMO1FBQ0MsSUFBTSxVQUFVLEdBQVcsSUFBSSxDQUFDLFdBQVc7YUFDekMsR0FBRyxDQUFDLFVBQUEsT0FBTyxJQUFJLE9BQUEsT0FBTyxDQUFDLElBQUksRUFBWixDQUFZLENBQUM7YUFDNUIsSUFBSSxDQUFDLElBQUksQ0FBQzthQUNWLElBQUksRUFBRSxDQUFDO1FBRVQsV0FBVyxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBQ0Ysb0JBQUM7QUFBRCxDQUFDLEFBMURELElBMERDO0FBcEQrQjtJQUE5QixnQkFBUyxDQUFDLGtCQUFrQixDQUFDOzhCQUFtQixpQkFBVTt1REFBQztBQU5oRCxhQUFhO0lBTHpCLGdCQUFTLENBQUM7UUFDVixRQUFRLEVBQUUsTUFBTTtRQUNoQixXQUFXLEVBQUUsc0JBQXNCO1FBQ25DLFNBQVMsRUFBRSxDQUFDLDRCQUE0QixFQUFFLHFCQUFxQixDQUFDO0tBQ2hFLENBQUM7cUNBU3VDLHlDQUFrQjtHQVI5QyxhQUFhLENBMER6QjtBQTFEWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBUZXh0RmllbGQgfSBmcm9tIFwidWkvdGV4dC1maWVsZFwiO1xyXG5cclxuaW1wb3J0IHsgR3JvY2VyeSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvZ3JvY2VyeS9ncm9jZXJ5XCI7XHJcbmltcG9ydCB7IEdyb2NlcnlMaXN0U2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvZ3JvY2VyeS9ncm9jZXJ5LWxpc3Quc2VydmljZVwiO1xyXG5pbXBvcnQgKiBhcyBTb2NpYWxTaGFyZSBmcm9tIFwibmF0aXZlc2NyaXB0LXNvY2lhbC1zaGFyZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwibGlzdFwiLFxyXG5cdHRlbXBsYXRlVXJsOiBcInBhZ2VzL2xpc3QvbGlzdC5odG1sXCIsXHJcblx0c3R5bGVVcmxzOiBbXCJwYWdlcy9saXN0L2xpc3QtY29tbW9uLmNzc1wiLCBcInBhZ2VzL2xpc3QvbGlzdC5jc3NcIl1cclxufSlcclxuZXhwb3J0IGNsYXNzIExpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdGdyb2NlcnlMaXN0OiBHcm9jZXJ5W10gPSBbXTtcclxuXHRncm9jZXJ5OiBzdHJpbmcgPSBcIlwiO1xyXG5cdGlzTG9hZGluZzogYm9vbGVhbiA9ICBmYWxzZTtcclxuXHRsaXN0TG9hZGVkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG5cdEBWaWV3Q2hpbGQoXCJncm9jZXJ5VGV4dEZpZWxkXCIpIGdyb2NlcnlUZXh0RmllbGQ6IEVsZW1lbnRSZWY7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgZ3JvY2VyeUxpc3RTZXJ2aWNlOiBHcm9jZXJ5TGlzdFNlcnZpY2UpIHt9XHJcblxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0dGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xyXG5cclxuXHRcdHRoaXMuZ3JvY2VyeUxpc3RTZXJ2aWNlLmxvYWQoKS5zdWJzY3JpYmUoXHJcblx0XHRcdGxvYWRHcm9jZXJpZXMgPT4ge1xyXG5cdFx0XHRcdGxvYWRHcm9jZXJpZXMuZm9yRWFjaChncm9jZXJ5T2JqZWN0ID0+IHtcclxuXHRcdFx0XHRcdHRoaXMuZ3JvY2VyeUxpc3QudW5zaGlmdChncm9jZXJ5T2JqZWN0KTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHR0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG5cdFx0XHRcdHRoaXMubGlzdExvYWRlZCA9IHRydWU7XHJcblx0XHRcdH0sXHJcblx0XHRcdGVycm9yID0+IGFsZXJ0KGVycm9yKVxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG5cdGFkZCgpOiB2b2lkIHtcclxuXHRcdGlmICh0aGlzLmdyb2NlcnkudHJpbSgpID09PSBcIlwiKSB7XHJcblx0XHRcdGFsZXJ0KFwiRW50ZXIgYSBncm9jZXJ5IGl0ZW1cIik7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCB0ZXh0RmllbGQgPSB0aGlzLmdyb2NlcnlUZXh0RmllbGQubmF0aXZlRWxlbWVudCBhcyBUZXh0RmllbGQ7XHJcblx0XHR0ZXh0RmllbGQuZGlzbWlzc1NvZnRJbnB1dCgpO1xyXG5cclxuXHRcdHRoaXMuZ3JvY2VyeUxpc3RTZXJ2aWNlLmFkZCh0aGlzLmdyb2NlcnkpXHJcblx0XHRcdC5zdWJzY3JpYmUoXHJcblx0XHRcdFx0KGdyb2NlcnlPYmplY3Q6IEdyb2NlcnkpID0+IHtcclxuXHRcdFx0XHRcdHRoaXMuZ3JvY2VyeUxpc3QudW5zaGlmdChncm9jZXJ5T2JqZWN0KTtcclxuXHRcdFx0XHRcdHRoaXMuZ3JvY2VyeSA9IFwiXCI7XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRlcnJvciA9PiB7XHJcblx0XHRcdFx0XHRhbGVydCh7XHJcblx0XHRcdFx0XHRcdG1lc3NhZ2U6IFwiQW4gZXJyb3Igb2NjdXJyZWQgd2hpbGUgYWRkaW5nIGFuIGl0ZW0gdG8geW91ciBsaXN0XCIsXHJcblx0XHRcdFx0XHRcdG9rQnV0dG9uVGV4dDogXCJPS1wiXHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdHRoaXMuZ3JvY2VyeSA9IFwiXCI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHQpO1xyXG5cdH1cclxuXHJcblx0c2hhcmUoKTogdm9pZCB7XHJcblx0XHRjb25zdCBsaXN0U3RyaW5nOiBzdHJpbmcgPSB0aGlzLmdyb2NlcnlMaXN0XHJcblx0XHRcdC5tYXAoZ3JvY2VyeSA9PiBncm9jZXJ5Lm5hbWUpXHJcblx0XHRcdC5qb2luKFwiLCBcIilcclxuXHRcdFx0LnRyaW0oKTtcclxuXHJcblx0XHRTb2NpYWxTaGFyZS5zaGFyZVRleHQobGlzdFN0cmluZyk7XHJcblx0fVxyXG59Il19