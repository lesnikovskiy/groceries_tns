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
        this.isLoading = true;
        this.groceryListService.delete(grocery.id).subscribe(function () {
            // Running the array splice in a zone ensures that change detection gets triggered.
            _this.zone.run(function () {
                var index = _this.groceryList.indexOf(grocery);
                _this.groceryList.splice(index, 1);
                _this.isLoading = false;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFpRjtBQUlqRixrRkFBK0U7QUFDL0UsdURBQXlEO0FBT3pELElBQWEsYUFBYTtJQVF6Qix1QkFDUyxrQkFBc0MsRUFDdEMsSUFBWTtRQURaLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFDdEMsU0FBSSxHQUFKLElBQUksQ0FBUTtRQVRyQixnQkFBVyxHQUFjLEVBQUUsQ0FBQztRQUM1QixZQUFPLEdBQVcsRUFBRSxDQUFDO1FBQ3JCLGNBQVMsR0FBYSxLQUFLLENBQUM7UUFDNUIsZUFBVSxHQUFZLEtBQUssQ0FBQztJQU96QixDQUFDO0lBRUosZ0NBQVEsR0FBUjtRQUFBLGlCQWFDO1FBWkEsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFFdEIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksRUFBRSxDQUFDLFNBQVMsQ0FDdkMsVUFBQSxhQUFhO1lBQ1osYUFBYSxDQUFDLE9BQU8sQ0FBQyxVQUFBLGFBQWE7Z0JBQ2xDLEtBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ3pDLENBQUMsQ0FBQyxDQUFDO1lBQ0gsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDdkIsS0FBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDeEIsQ0FBQyxFQUNELFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFaLENBQVksQ0FDckIsQ0FBQztJQUNILENBQUM7SUFFRCwyQkFBRyxHQUFIO1FBQUEsaUJBdUJDO1FBdEJBLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNoQyxLQUFLLENBQUMsc0JBQXNCLENBQUMsQ0FBQztZQUM5QixNQUFNLENBQUM7UUFDUixDQUFDO1FBRUQsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQTBCLENBQUM7UUFDbkUsU0FBUyxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFFN0IsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO2FBQ3ZDLFNBQVMsQ0FDVCxVQUFDLGFBQXNCO1lBQ3RCLEtBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ3hDLEtBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ25CLENBQUMsRUFDRCxVQUFBLEtBQUs7WUFDSixLQUFLLENBQUM7Z0JBQ0wsT0FBTyxFQUFFLHFEQUFxRDtnQkFDOUQsWUFBWSxFQUFFLElBQUk7YUFDbEIsQ0FBQyxDQUFDO1lBQ0gsS0FBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDbkIsQ0FBQyxDQUNELENBQUM7SUFDSixDQUFDO0lBRUQsOEJBQU0sR0FBTixVQUFPLE9BQWdCO1FBQXZCLGlCQWVDO1FBZEEsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFFdEIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUNuRDtZQUNDLG1GQUFtRjtZQUNuRixLQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztnQkFDYixJQUFNLEtBQUssR0FBRyxLQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDaEQsS0FBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUVsQyxLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUN4QixDQUFDLENBQUMsQ0FBQztRQUNKLENBQUMsRUFDRCxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBWixDQUFZLENBQ3JCLENBQUM7SUFDSCxDQUFDO0lBRUQsNkJBQUssR0FBTDtRQUNDLElBQU0sVUFBVSxHQUFXLElBQUksQ0FBQyxXQUFXO2FBQ3pDLEdBQUcsQ0FBQyxVQUFBLE9BQU8sSUFBSSxPQUFBLE9BQU8sQ0FBQyxJQUFJLEVBQVosQ0FBWSxDQUFDO2FBQzVCLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDVixJQUFJLEVBQUUsQ0FBQztRQUVULFdBQVcsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUNGLG9CQUFDO0FBQUQsQ0FBQyxBQTlFRCxJQThFQztBQXhFK0I7SUFBOUIsZ0JBQVMsQ0FBQyxrQkFBa0IsQ0FBQzs4QkFBbUIsaUJBQVU7dURBQUM7QUFOaEQsYUFBYTtJQUx6QixnQkFBUyxDQUFDO1FBQ1YsUUFBUSxFQUFFLE1BQU07UUFDaEIsV0FBVyxFQUFFLHNCQUFzQjtRQUNuQyxTQUFTLEVBQUUsQ0FBQyw0QkFBNEIsRUFBRSxxQkFBcUIsQ0FBQztLQUNoRSxDQUFDO3FDQVU0Qix5Q0FBa0I7UUFDaEMsYUFBTTtHQVZULGFBQWEsQ0E4RXpCO0FBOUVZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIFZpZXdDaGlsZCwgTmdab25lIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgVGV4dEZpZWxkIH0gZnJvbSBcInVpL3RleHQtZmllbGRcIjtcclxuXHJcbmltcG9ydCB7IEdyb2NlcnkgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL2dyb2NlcnkvZ3JvY2VyeVwiO1xyXG5pbXBvcnQgeyBHcm9jZXJ5TGlzdFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL2dyb2NlcnkvZ3JvY2VyeS1saXN0LnNlcnZpY2VcIjtcclxuaW1wb3J0ICogYXMgU29jaWFsU2hhcmUgZnJvbSBcIm5hdGl2ZXNjcmlwdC1zb2NpYWwtc2hhcmVcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcImxpc3RcIixcclxuXHR0ZW1wbGF0ZVVybDogXCJwYWdlcy9saXN0L2xpc3QuaHRtbFwiLFxyXG5cdHN0eWxlVXJsczogW1wicGFnZXMvbGlzdC9saXN0LWNvbW1vbi5jc3NcIiwgXCJwYWdlcy9saXN0L2xpc3QuY3NzXCJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRncm9jZXJ5TGlzdDogR3JvY2VyeVtdID0gW107XHJcblx0Z3JvY2VyeTogc3RyaW5nID0gXCJcIjtcclxuXHRpc0xvYWRpbmc6IGJvb2xlYW4gPSAgZmFsc2U7XHJcblx0bGlzdExvYWRlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuXHRAVmlld0NoaWxkKFwiZ3JvY2VyeVRleHRGaWVsZFwiKSBncm9jZXJ5VGV4dEZpZWxkOiBFbGVtZW50UmVmO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgZ3JvY2VyeUxpc3RTZXJ2aWNlOiBHcm9jZXJ5TGlzdFNlcnZpY2UsXHJcblx0XHRwcml2YXRlIHpvbmU6IE5nWm9uZVxyXG5cdCkge31cclxuXHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHR0aGlzLmlzTG9hZGluZyA9IHRydWU7XHJcblxyXG5cdFx0dGhpcy5ncm9jZXJ5TGlzdFNlcnZpY2UubG9hZCgpLnN1YnNjcmliZShcclxuXHRcdFx0bG9hZEdyb2NlcmllcyA9PiB7XHJcblx0XHRcdFx0bG9hZEdyb2Nlcmllcy5mb3JFYWNoKGdyb2NlcnlPYmplY3QgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5ncm9jZXJ5TGlzdC51bnNoaWZ0KGdyb2NlcnlPYmplY3QpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcblx0XHRcdFx0dGhpcy5saXN0TG9hZGVkID0gdHJ1ZTtcclxuXHRcdFx0fSxcclxuXHRcdFx0ZXJyb3IgPT4gYWxlcnQoZXJyb3IpXHJcblx0XHQpO1xyXG5cdH1cclxuXHJcblx0YWRkKCk6IHZvaWQge1xyXG5cdFx0aWYgKHRoaXMuZ3JvY2VyeS50cmltKCkgPT09IFwiXCIpIHtcclxuXHRcdFx0YWxlcnQoXCJFbnRlciBhIGdyb2NlcnkgaXRlbVwiKTtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdGNvbnN0IHRleHRGaWVsZCA9IHRoaXMuZ3JvY2VyeVRleHRGaWVsZC5uYXRpdmVFbGVtZW50IGFzIFRleHRGaWVsZDtcclxuXHRcdHRleHRGaWVsZC5kaXNtaXNzU29mdElucHV0KCk7XHJcblxyXG5cdFx0dGhpcy5ncm9jZXJ5TGlzdFNlcnZpY2UuYWRkKHRoaXMuZ3JvY2VyeSlcclxuXHRcdFx0LnN1YnNjcmliZShcclxuXHRcdFx0XHQoZ3JvY2VyeU9iamVjdDogR3JvY2VyeSkgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5ncm9jZXJ5TGlzdC51bnNoaWZ0KGdyb2NlcnlPYmplY3QpO1xyXG5cdFx0XHRcdFx0dGhpcy5ncm9jZXJ5ID0gXCJcIjtcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdGVycm9yID0+IHtcclxuXHRcdFx0XHRcdGFsZXJ0KHtcclxuXHRcdFx0XHRcdFx0bWVzc2FnZTogXCJBbiBlcnJvciBvY2N1cnJlZCB3aGlsZSBhZGRpbmcgYW4gaXRlbSB0byB5b3VyIGxpc3RcIixcclxuXHRcdFx0XHRcdFx0b2tCdXR0b25UZXh0OiBcIk9LXCJcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0dGhpcy5ncm9jZXJ5ID0gXCJcIjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdCk7XHJcblx0fVxyXG5cclxuXHRkZWxldGUoZ3JvY2VyeTogR3JvY2VyeSkge1xyXG5cdFx0dGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xyXG5cclxuXHRcdHRoaXMuZ3JvY2VyeUxpc3RTZXJ2aWNlLmRlbGV0ZShncm9jZXJ5LmlkKS5zdWJzY3JpYmUoXHJcblx0XHRcdCgpID0+IHtcclxuXHRcdFx0XHQvLyBSdW5uaW5nIHRoZSBhcnJheSBzcGxpY2UgaW4gYSB6b25lIGVuc3VyZXMgdGhhdCBjaGFuZ2UgZGV0ZWN0aW9uIGdldHMgdHJpZ2dlcmVkLlxyXG5cdFx0XHRcdHRoaXMuem9uZS5ydW4oKCkgPT4ge1xyXG5cdFx0XHRcdFx0Y29uc3QgaW5kZXggPSB0aGlzLmdyb2NlcnlMaXN0LmluZGV4T2YoZ3JvY2VyeSk7XHJcblx0XHRcdFx0XHR0aGlzLmdyb2NlcnlMaXN0LnNwbGljZShpbmRleCwgMSk7XHJcblxyXG5cdFx0XHRcdFx0dGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSxcclxuXHRcdFx0ZXJyb3IgPT4gYWxlcnQoZXJyb3IpXHJcblx0XHQpO1xyXG5cdH1cclxuXHJcblx0c2hhcmUoKTogdm9pZCB7XHJcblx0XHRjb25zdCBsaXN0U3RyaW5nOiBzdHJpbmcgPSB0aGlzLmdyb2NlcnlMaXN0XHJcblx0XHRcdC5tYXAoZ3JvY2VyeSA9PiBncm9jZXJ5Lm5hbWUpXHJcblx0XHRcdC5qb2luKFwiLCBcIilcclxuXHRcdFx0LnRyaW0oKTtcclxuXHJcblx0XHRTb2NpYWxTaGFyZS5zaGFyZVRleHQobGlzdFN0cmluZyk7XHJcblx0fVxyXG59Il19