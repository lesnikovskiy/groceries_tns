"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
var config_1 = require("../config");
var grocery_1 = require("./grocery");
var GroceryListService = (function () {
    function GroceryListService(http) {
        this.http = http;
    }
    GroceryListService.prototype.load = function () {
        var headers = new http_1.Headers();
        headers.append("Authorization", "Bearer " + config_1.Config.token);
        return this.http.get(config_1.Config.apiUrl + "Groceries", { headers: headers })
            .map(function (res) { return res.json(); })
            .map(function (data) {
            var groceryList = [];
            data.Result.forEach(function (grocery) {
                groceryList.push(new grocery_1.Grocery(grocery.Id, grocery.Name));
            });
            return groceryList;
        })
            .catch(this.handleErrors);
    };
    GroceryListService.prototype.add = function (name) {
        var headers = new http_1.Headers();
        headers.append("Authorization", "Bearer " + config_1.Config.token);
        headers.append("Content-Type", "application/json");
        return this.http.post(config_1.Config.apiUrl + "Groceries", JSON.stringify({
            Name: name
        }), { headers: headers })
            .map(function (res) { return res.json(); })
            .map(function (data) { return new grocery_1.Grocery(data.Result.Id, name); })
            .catch(this.handleErrors);
    };
    GroceryListService.prototype.delete = function (id) {
        var headers = new http_1.Headers();
        headers.append("Authorization", "Bearer " + config_1.Config.token);
        headers.append("Content-Type", "application/json");
        return this.http.delete(config_1.Config.apiUrl + "Groceries/" + id, { headers: headers })
            .map(function (res) {
            var resText = res.json();
            console.log(resText);
            return resText;
        })
            .catch(this.handleErrors);
    };
    GroceryListService.prototype.handleErrors = function (error) {
        console.log(JSON.stringify(error.json()));
        return Observable_1.Observable.throw(error);
    };
    return GroceryListService;
}());
GroceryListService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], GroceryListService);
exports.GroceryListService = GroceryListService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JvY2VyeS1saXN0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJncm9jZXJ5LWxpc3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyxzQ0FBd0Q7QUFDeEQsOENBQTZDO0FBQzdDLGlDQUErQjtBQUMvQixtQ0FBaUM7QUFFakMsb0NBQW1DO0FBQ25DLHFDQUFvQztBQUdwQyxJQUFhLGtCQUFrQjtJQUM5Qiw0QkFBb0IsSUFBVTtRQUFWLFNBQUksR0FBSixJQUFJLENBQU07SUFBRyxDQUFDO0lBRWxDLGlDQUFJLEdBQUo7UUFDQyxJQUFNLE9BQU8sR0FBWSxJQUFJLGNBQU8sRUFBRSxDQUFDO1FBQ3ZDLE9BQU8sQ0FBQyxNQUFNLENBQUMsZUFBZSxFQUFFLFlBQVUsZUFBTSxDQUFDLEtBQU8sQ0FBQyxDQUFDO1FBRTFELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBSSxlQUFNLENBQUMsTUFBTSxjQUFXLEVBQUUsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFDLENBQUM7YUFDbkUsR0FBRyxDQUFDLFVBQUMsR0FBYSxJQUFLLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQzthQUNsQyxHQUFHLENBQUMsVUFBQSxJQUFJO1lBQ1IsSUFBTSxXQUFXLEdBQWMsRUFBRSxDQUFDO1lBQ2xDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQUEsT0FBTztnQkFDMUIsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLGlCQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUN6RCxDQUFDLENBQUMsQ0FBQztZQUVILE1BQU0sQ0FBQyxXQUFXLENBQUM7UUFDcEIsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRUQsZ0NBQUcsR0FBSCxVQUFJLElBQVk7UUFDZixJQUFNLE9BQU8sR0FBWSxJQUFJLGNBQU8sRUFBRSxDQUFDO1FBQ3ZDLE9BQU8sQ0FBQyxNQUFNLENBQUMsZUFBZSxFQUFFLFlBQVUsZUFBTSxDQUFDLEtBQU8sQ0FBQyxDQUFDO1FBQzFELE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7UUFFbkQsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFJLGVBQU0sQ0FBQyxNQUFNLGNBQVcsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQ2pFLElBQUksRUFBRSxJQUFJO1NBQ1YsQ0FBQyxFQUFFLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBQyxDQUFDO2FBQ3JCLEdBQUcsQ0FBQyxVQUFDLEdBQWEsSUFBSyxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUM7YUFDbEMsR0FBRyxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxpQkFBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFqQyxDQUFpQyxDQUFDO2FBQzlDLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVELG1DQUFNLEdBQU4sVUFBTyxFQUFVO1FBQ2hCLElBQU0sT0FBTyxHQUFZLElBQUksY0FBTyxFQUFFLENBQUM7UUFDdkMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxlQUFlLEVBQUUsWUFBVSxlQUFNLENBQUMsS0FBTyxDQUFDLENBQUM7UUFDMUQsT0FBTyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUVuRCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUksZUFBTSxDQUFDLE1BQU0sa0JBQWEsRUFBSSxFQUFFLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBQyxDQUFDO2FBQzVFLEdBQUcsQ0FBQyxVQUFDLEdBQVk7WUFDakIsSUFBTSxPQUFPLEdBQUcsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7WUFFckIsTUFBTSxDQUFDLE9BQU8sQ0FBQztRQUNoQixDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFRCx5Q0FBWSxHQUFaLFVBQWEsS0FBZTtRQUMzQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMxQyxNQUFNLENBQUMsdUJBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUNGLHlCQUFDO0FBQUQsQ0FBQyxBQXBERCxJQW9EQztBQXBEWSxrQkFBa0I7SUFEOUIsaUJBQVUsRUFBRTtxQ0FFYyxXQUFJO0dBRGxCLGtCQUFrQixDQW9EOUI7QUFwRFksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlc3BvbnNlIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL2NhdGNoXCI7XHJcblxyXG5pbXBvcnQgeyBDb25maWcgfSBmcm9tIFwiLi4vY29uZmlnXCI7XHJcbmltcG9ydCB7IEdyb2NlcnkgfSBmcm9tIFwiLi9ncm9jZXJ5XCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBHcm9jZXJ5TGlzdFNlcnZpY2Uge1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkge31cclxuXHJcblx0bG9hZCgpOiBPYnNlcnZhYmxlPEdyb2NlcnlbXT4ge1xyXG5cdFx0Y29uc3QgaGVhZGVyczogSGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcblx0XHRoZWFkZXJzLmFwcGVuZChcIkF1dGhvcml6YXRpb25cIiwgYEJlYXJlciAke0NvbmZpZy50b2tlbn1gKTtcclxuXHJcblx0XHRyZXR1cm4gdGhpcy5odHRwLmdldChgJHtDb25maWcuYXBpVXJsfUdyb2Nlcmllc2AsIHtoZWFkZXJzOiBoZWFkZXJzfSlcclxuXHRcdFx0Lm1hcCgocmVzOiBSZXNwb25zZSkgPT4gcmVzLmpzb24oKSlcclxuXHRcdFx0Lm1hcChkYXRhID0+IHtcclxuXHRcdFx0XHRjb25zdCBncm9jZXJ5TGlzdDogR3JvY2VyeVtdID0gW107XHJcblx0XHRcdFx0ZGF0YS5SZXN1bHQuZm9yRWFjaChncm9jZXJ5ID0+IHtcclxuXHRcdFx0XHRcdGdyb2NlcnlMaXN0LnB1c2gobmV3IEdyb2NlcnkoZ3JvY2VyeS5JZCwgZ3JvY2VyeS5OYW1lKSk7XHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdHJldHVybiBncm9jZXJ5TGlzdDtcclxuXHRcdFx0fSlcclxuXHRcdFx0LmNhdGNoKHRoaXMuaGFuZGxlRXJyb3JzKTtcclxuXHR9XHJcblxyXG5cdGFkZChuYW1lOiBzdHJpbmcpOiBPYnNlcnZhYmxlPEdyb2Nlcnk+IHtcclxuXHRcdGNvbnN0IGhlYWRlcnM6IEhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG5cdFx0aGVhZGVycy5hcHBlbmQoXCJBdXRob3JpemF0aW9uXCIsIGBCZWFyZXIgJHtDb25maWcudG9rZW59YCk7XHJcblx0XHRoZWFkZXJzLmFwcGVuZChcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XHJcblxyXG5cdFx0cmV0dXJuIHRoaXMuaHR0cC5wb3N0KGAke0NvbmZpZy5hcGlVcmx9R3JvY2VyaWVzYCwgSlNPTi5zdHJpbmdpZnkoe1xyXG5cdFx0XHROYW1lOiBuYW1lXHJcblx0XHR9KSwge2hlYWRlcnM6IGhlYWRlcnN9KVxyXG5cdFx0XHQubWFwKChyZXM6IFJlc3BvbnNlKSA9PiByZXMuanNvbigpKVxyXG5cdFx0XHQubWFwKGRhdGEgPT4gbmV3IEdyb2NlcnkoZGF0YS5SZXN1bHQuSWQsIG5hbWUpKVxyXG5cdFx0XHQuY2F0Y2godGhpcy5oYW5kbGVFcnJvcnMpO1xyXG5cdH1cclxuXHJcblx0ZGVsZXRlKGlkOiBzdHJpbmcpIHtcclxuXHRcdGNvbnN0IGhlYWRlcnM6IEhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG5cdFx0aGVhZGVycy5hcHBlbmQoXCJBdXRob3JpemF0aW9uXCIsIGBCZWFyZXIgJHtDb25maWcudG9rZW59YCk7XHJcblx0XHRoZWFkZXJzLmFwcGVuZChcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XHJcblxyXG5cdFx0cmV0dXJuIHRoaXMuaHR0cC5kZWxldGUoYCR7Q29uZmlnLmFwaVVybH1Hcm9jZXJpZXMvJHtpZH1gLCB7aGVhZGVyczogaGVhZGVyc30pXHJcblx0XHRcdC5tYXAoKHJlczpSZXNwb25zZSkgPT4ge1xyXG5cdFx0XHRcdGNvbnN0IHJlc1RleHQgPSByZXMuanNvbigpO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKHJlc1RleHQpO1xyXG5cclxuXHRcdFx0XHRyZXR1cm4gcmVzVGV4dDtcclxuXHRcdFx0fSlcclxuXHRcdFx0LmNhdGNoKHRoaXMuaGFuZGxlRXJyb3JzKTtcclxuXHR9XHJcblxyXG5cdGhhbmRsZUVycm9ycyhlcnJvcjogUmVzcG9uc2UpIHtcclxuXHRcdGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGVycm9yLmpzb24oKSkpO1xyXG5cdFx0cmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3IpO1xyXG5cdH1cclxufSJdfQ==