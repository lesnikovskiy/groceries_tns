"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var grocery_list_service_1 = require("../../shared/grocery/grocery-list.service");
var SocialShare = require("nativescript-social-share");
var ListComponent = (function () {
    function ListComponent(groceryListService, zone) {
        this.groceryListService = groceryListService;
        this.zone = zone;
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
    ListComponent.prototype.delete = function (grocery) {
        var _this = this;
        this.groceryListService.delete(grocery.id).subscribe(function () {
            // Running the array splice in a zone ensures that change detection gets triggered.
            _this.zone.run(function () {
                var index = _this.groceryList.indexOf(grocery);
                _this.groceryList.splice(index, 1);
            });
        }, function (error) { return alert(error); });
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
    __metadata("design:paramtypes", [grocery_list_service_1.GroceryListService,
        core_1.NgZone])
], ListComponent);
exports.ListComponent = ListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFpRjtBQUlqRixrRkFBK0U7QUFDL0UsdURBQXlEO0FBT3pELElBQWEsYUFBYTtJQVF6Qix1QkFDUyxrQkFBc0MsRUFDdEMsSUFBWTtRQURaLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFDdEMsU0FBSSxHQUFKLElBQUksQ0FBUTtRQVRyQixnQkFBVyxHQUFjLEVBQUUsQ0FBQztRQUM1QixZQUFPLEdBQVcsRUFBRSxDQUFDO1FBQ3JCLGNBQVMsR0FBYSxLQUFLLENBQUM7UUFDNUIsZUFBVSxHQUFZLEtBQUssQ0FBQztJQU96QixDQUFDO0lBRUosZ0NBQVEsR0FBUjtRQUFBLGlCQWFDO1FBWkEsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFFdEIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksRUFBRSxDQUFDLFNBQVMsQ0FDdkMsVUFBQSxhQUFhO1lBQ1osYUFBYSxDQUFDLE9BQU8sQ0FBQyxVQUFBLGFBQWE7Z0JBQ2xDLEtBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ3pDLENBQUMsQ0FBQyxDQUFDO1lBQ0gsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDdkIsS0FBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDeEIsQ0FBQyxFQUNELFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFaLENBQVksQ0FDckIsQ0FBQztJQUNILENBQUM7SUFFRCwyQkFBRyxHQUFIO1FBQUEsaUJBdUJDO1FBdEJBLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNoQyxLQUFLLENBQUMsc0JBQXNCLENBQUMsQ0FBQztZQUM5QixNQUFNLENBQUM7UUFDUixDQUFDO1FBRUQsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQTBCLENBQUM7UUFDbkUsU0FBUyxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFFN0IsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO2FBQ3ZDLFNBQVMsQ0FDVCxVQUFDLGFBQXNCO1lBQ3RCLEtBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ3hDLEtBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ25CLENBQUMsRUFDRCxVQUFBLEtBQUs7WUFDSixLQUFLLENBQUM7Z0JBQ0wsT0FBTyxFQUFFLHFEQUFxRDtnQkFDOUQsWUFBWSxFQUFFLElBQUk7YUFDbEIsQ0FBQyxDQUFDO1lBQ0gsS0FBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDbkIsQ0FBQyxDQUNELENBQUM7SUFDSixDQUFDO0lBRUQsOEJBQU0sR0FBTixVQUFPLE9BQWdCO1FBQXZCLGlCQVdDO1FBVkEsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUNuRDtZQUNDLG1GQUFtRjtZQUNuRixLQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztnQkFDYixJQUFNLEtBQUssR0FBRyxLQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDaEQsS0FBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ25DLENBQUMsQ0FBQyxDQUFDO1FBQ0osQ0FBQyxFQUNELFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFaLENBQVksQ0FDckIsQ0FBQztJQUNILENBQUM7SUFFRCw2QkFBSyxHQUFMO1FBQ0MsSUFBTSxVQUFVLEdBQVcsSUFBSSxDQUFDLFdBQVc7YUFDekMsR0FBRyxDQUFDLFVBQUEsT0FBTyxJQUFJLE9BQUEsT0FBTyxDQUFDLElBQUksRUFBWixDQUFZLENBQUM7YUFDNUIsSUFBSSxDQUFDLElBQUksQ0FBQzthQUNWLElBQUksRUFBRSxDQUFDO1FBRVQsV0FBVyxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBQ0Ysb0JBQUM7QUFBRCxDQUFDLEFBMUVELElBMEVDO0FBcEUrQjtJQUE5QixnQkFBUyxDQUFDLGtCQUFrQixDQUFDOzhCQUFtQixpQkFBVTt1REFBQztBQU5oRCxhQUFhO0lBTHpCLGdCQUFTLENBQUM7UUFDVixRQUFRLEVBQUUsTUFBTTtRQUNoQixXQUFXLEVBQUUsc0JBQXNCO1FBQ25DLFNBQVMsRUFBRSxDQUFDLDRCQUE0QixFQUFFLHFCQUFxQixDQUFDO0tBQ2hFLENBQUM7cUNBVTRCLHlDQUFrQjtRQUNoQyxhQUFNO0dBVlQsYUFBYSxDQTBFekI7QUExRVksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgVmlld0NoaWxkLCBOZ1pvbmUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBUZXh0RmllbGQgfSBmcm9tIFwidWkvdGV4dC1maWVsZFwiO1xyXG5cclxuaW1wb3J0IHsgR3JvY2VyeSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvZ3JvY2VyeS9ncm9jZXJ5XCI7XHJcbmltcG9ydCB7IEdyb2NlcnlMaXN0U2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvZ3JvY2VyeS9ncm9jZXJ5LWxpc3Quc2VydmljZVwiO1xyXG5pbXBvcnQgKiBhcyBTb2NpYWxTaGFyZSBmcm9tIFwibmF0aXZlc2NyaXB0LXNvY2lhbC1zaGFyZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwibGlzdFwiLFxyXG5cdHRlbXBsYXRlVXJsOiBcInBhZ2VzL2xpc3QvbGlzdC5odG1sXCIsXHJcblx0c3R5bGVVcmxzOiBbXCJwYWdlcy9saXN0L2xpc3QtY29tbW9uLmNzc1wiLCBcInBhZ2VzL2xpc3QvbGlzdC5jc3NcIl1cclxufSlcclxuZXhwb3J0IGNsYXNzIExpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdGdyb2NlcnlMaXN0OiBHcm9jZXJ5W10gPSBbXTtcclxuXHRncm9jZXJ5OiBzdHJpbmcgPSBcIlwiO1xyXG5cdGlzTG9hZGluZzogYm9vbGVhbiA9ICBmYWxzZTtcclxuXHRsaXN0TG9hZGVkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG5cdEBWaWV3Q2hpbGQoXCJncm9jZXJ5VGV4dEZpZWxkXCIpIGdyb2NlcnlUZXh0RmllbGQ6IEVsZW1lbnRSZWY7XHJcblxyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBncm9jZXJ5TGlzdFNlcnZpY2U6IEdyb2NlcnlMaXN0U2VydmljZSxcclxuXHRcdHByaXZhdGUgem9uZTogTmdab25lXHJcblx0KSB7fVxyXG5cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcclxuXHJcblx0XHR0aGlzLmdyb2NlcnlMaXN0U2VydmljZS5sb2FkKCkuc3Vic2NyaWJlKFxyXG5cdFx0XHRsb2FkR3JvY2VyaWVzID0+IHtcclxuXHRcdFx0XHRsb2FkR3JvY2VyaWVzLmZvckVhY2goZ3JvY2VyeU9iamVjdCA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLmdyb2NlcnlMaXN0LnVuc2hpZnQoZ3JvY2VyeU9iamVjdCk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0dGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcclxuXHRcdFx0XHR0aGlzLmxpc3RMb2FkZWQgPSB0cnVlO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRlcnJvciA9PiBhbGVydChlcnJvcilcclxuXHRcdCk7XHJcblx0fVxyXG5cclxuXHRhZGQoKTogdm9pZCB7XHJcblx0XHRpZiAodGhpcy5ncm9jZXJ5LnRyaW0oKSA9PT0gXCJcIikge1xyXG5cdFx0XHRhbGVydChcIkVudGVyIGEgZ3JvY2VyeSBpdGVtXCIpO1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc3QgdGV4dEZpZWxkID0gdGhpcy5ncm9jZXJ5VGV4dEZpZWxkLm5hdGl2ZUVsZW1lbnQgYXMgVGV4dEZpZWxkO1xyXG5cdFx0dGV4dEZpZWxkLmRpc21pc3NTb2Z0SW5wdXQoKTtcclxuXHJcblx0XHR0aGlzLmdyb2NlcnlMaXN0U2VydmljZS5hZGQodGhpcy5ncm9jZXJ5KVxyXG5cdFx0XHQuc3Vic2NyaWJlKFxyXG5cdFx0XHRcdChncm9jZXJ5T2JqZWN0OiBHcm9jZXJ5KSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLmdyb2NlcnlMaXN0LnVuc2hpZnQoZ3JvY2VyeU9iamVjdCk7XHJcblx0XHRcdFx0XHR0aGlzLmdyb2NlcnkgPSBcIlwiO1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0ZXJyb3IgPT4ge1xyXG5cdFx0XHRcdFx0YWxlcnQoe1xyXG5cdFx0XHRcdFx0XHRtZXNzYWdlOiBcIkFuIGVycm9yIG9jY3VycmVkIHdoaWxlIGFkZGluZyBhbiBpdGVtIHRvIHlvdXIgbGlzdFwiLFxyXG5cdFx0XHRcdFx0XHRva0J1dHRvblRleHQ6IFwiT0tcIlxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHR0aGlzLmdyb2NlcnkgPSBcIlwiO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0KTtcclxuXHR9XHJcblxyXG5cdGRlbGV0ZShncm9jZXJ5OiBHcm9jZXJ5KSB7XHJcblx0XHR0aGlzLmdyb2NlcnlMaXN0U2VydmljZS5kZWxldGUoZ3JvY2VyeS5pZCkuc3Vic2NyaWJlKFxyXG5cdFx0XHQoKSA9PiB7XHJcblx0XHRcdFx0Ly8gUnVubmluZyB0aGUgYXJyYXkgc3BsaWNlIGluIGEgem9uZSBlbnN1cmVzIHRoYXQgY2hhbmdlIGRldGVjdGlvbiBnZXRzIHRyaWdnZXJlZC5cclxuXHRcdFx0XHR0aGlzLnpvbmUucnVuKCgpID0+IHtcclxuXHRcdFx0XHRcdGNvbnN0IGluZGV4ID0gdGhpcy5ncm9jZXJ5TGlzdC5pbmRleE9mKGdyb2NlcnkpO1xyXG5cdFx0XHRcdFx0dGhpcy5ncm9jZXJ5TGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRlcnJvciA9PiBhbGVydChlcnJvcilcclxuXHRcdCk7XHJcblx0fVxyXG5cclxuXHRzaGFyZSgpOiB2b2lkIHtcclxuXHRcdGNvbnN0IGxpc3RTdHJpbmc6IHN0cmluZyA9IHRoaXMuZ3JvY2VyeUxpc3RcclxuXHRcdFx0Lm1hcChncm9jZXJ5ID0+IGdyb2NlcnkubmFtZSlcclxuXHRcdFx0LmpvaW4oXCIsIFwiKVxyXG5cdFx0XHQudHJpbSgpO1xyXG5cclxuXHRcdFNvY2lhbFNoYXJlLnNoYXJlVGV4dChsaXN0U3RyaW5nKTtcclxuXHR9XHJcbn0iXX0=