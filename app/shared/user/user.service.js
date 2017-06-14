"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
var config_1 = require("../config");
var UserService = (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.login = function (user) {
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        return this.http.post(config_1.Config.apiUrl + "oauth/token", JSON.stringify({
            username: user.email,
            password: user.password,
            grant_type: "password"
        }), { headers: headers })
            .map(function (response) { return response.json(); })
            .do(function (data) { return config_1.Config.token = data.Result.access_token; })
            .catch(this.handleErrors);
    };
    UserService.prototype.register = function (user) {
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        return this.http.post(config_1.Config.apiUrl + "Users", JSON.stringify({
            Username: user.email,
            Email: user.email,
            Password: user.password
        }), { headers: headers })
            .catch(this.handleErrors);
    };
    UserService.prototype.handleErrors = function (error) {
        console.log(JSON.stringify(error.json()));
        return Observable_1.Observable.throw(error);
    };
    return UserService;
}());
UserService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLHNDQUF3RDtBQUN4RCw4Q0FBNkM7QUFDN0MsZ0NBQThCO0FBQzlCLGlDQUErQjtBQUMvQixtQ0FBaUM7QUFHakMsb0NBQW1DO0FBR25DLElBQWEsV0FBVztJQUNwQixxQkFBb0IsSUFBVTtRQUFWLFNBQUksR0FBSixJQUFJLENBQU07SUFBRyxDQUFDO0lBRXJDLDJCQUFLLEdBQUwsVUFBTSxJQUFVO1FBQ2YsSUFBTSxPQUFPLEdBQVksSUFBSSxjQUFPLEVBQUUsQ0FBQztRQUN2QyxPQUFPLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBRW5ELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFNLENBQUMsTUFBTSxHQUFHLGFBQWEsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQ25FLFFBQVEsRUFBRSxJQUFJLENBQUMsS0FBSztZQUNwQixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7WUFDdkIsVUFBVSxFQUFFLFVBQVU7U0FDdEIsQ0FBQyxFQUFFLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBQyxDQUFDO2FBQ3JCLEdBQUcsQ0FBQyxVQUFDLFFBQWtCLElBQUssT0FBQSxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQWYsQ0FBZSxDQUFDO2FBQzVDLEVBQUUsQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLGVBQU0sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQXZDLENBQXVDLENBQUM7YUFDbkQsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRUQsOEJBQVEsR0FBUixVQUFTLElBQVU7UUFDbEIsSUFBTSxPQUFPLEdBQVksSUFBSSxjQUFPLEVBQUUsQ0FBQztRQUN2QyxPQUFPLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBRW5ELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFNLENBQUMsTUFBTSxHQUFHLE9BQU8sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQ3RELFFBQVEsRUFBRSxJQUFJLENBQUMsS0FBSztZQUMxQixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDakIsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1NBQ3hCLENBQUMsRUFBRSxFQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUMsQ0FBQzthQUN0QixLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFFRCxrQ0FBWSxHQUFaLFVBQWEsS0FBZTtRQUMzQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUUxQyxNQUFNLENBQUMsdUJBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUNGLGtCQUFDO0FBQUQsQ0FBQyxBQWxDRCxJQWtDQztBQWxDWSxXQUFXO0lBRHZCLGlCQUFVLEVBQUU7cUNBRWlCLFdBQUk7R0FEckIsV0FBVyxDQWtDdkI7QUFsQ1ksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVzcG9uc2UgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9kb1wiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2hcIjtcclxuXHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi91c2VyXCI7XHJcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gXCIuLi9jb25maWdcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFVzZXJTZXJ2aWNlIHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkge31cclxuXHJcblx0bG9naW4odXNlcjogVXNlcikge1xyXG5cdFx0Y29uc3QgaGVhZGVyczogSGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcblx0XHRoZWFkZXJzLmFwcGVuZChcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XHJcblxyXG5cdFx0cmV0dXJuIHRoaXMuaHR0cC5wb3N0KENvbmZpZy5hcGlVcmwgKyBcIm9hdXRoL3Rva2VuXCIsIEpTT04uc3RyaW5naWZ5KHtcclxuXHRcdFx0dXNlcm5hbWU6IHVzZXIuZW1haWwsXHJcblx0XHRcdHBhc3N3b3JkOiB1c2VyLnBhc3N3b3JkLFxyXG5cdFx0XHRncmFudF90eXBlOiBcInBhc3N3b3JkXCJcclxuXHRcdH0pLCB7aGVhZGVyczogaGVhZGVyc30pXHJcblx0XHRcdC5tYXAoKHJlc3BvbnNlOiBSZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG5cdFx0XHQuZG8oZGF0YSA9PiBDb25maWcudG9rZW4gPSBkYXRhLlJlc3VsdC5hY2Nlc3NfdG9rZW4pXHJcblx0XHRcdC5jYXRjaCh0aGlzLmhhbmRsZUVycm9ycyk7XHJcblx0fVxyXG5cclxuXHRyZWdpc3Rlcih1c2VyOiBVc2VyKSB7XHJcblx0XHRjb25zdCBoZWFkZXJzOiBIZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuXHRcdGhlYWRlcnMuYXBwZW5kKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcclxuXHJcblx0XHRyZXR1cm4gdGhpcy5odHRwLnBvc3QoQ29uZmlnLmFwaVVybCArIFwiVXNlcnNcIiwgSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgVXNlcm5hbWU6IHVzZXIuZW1haWwsXHJcblx0XHQgIEVtYWlsOiB1c2VyLmVtYWlsLFxyXG5cdFx0ICBQYXNzd29yZDogdXNlci5wYXNzd29yZFxyXG5cdFx0fSksIHtoZWFkZXJzOiBoZWFkZXJzfSlcclxuXHRcdC5jYXRjaCh0aGlzLmhhbmRsZUVycm9ycyk7XHJcblx0fVxyXG5cclxuXHRoYW5kbGVFcnJvcnMoZXJyb3I6IFJlc3BvbnNlKSB7XHJcblx0XHRjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShlcnJvci5qc29uKCkpKTtcclxuXHJcblx0XHRyZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvcik7XHJcblx0fVxyXG59Il19