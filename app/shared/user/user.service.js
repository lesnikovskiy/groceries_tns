"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var UserService = (function () {
    function UserService() {
    }
    UserService.prototype.register = function (user) {
        alert("About to register " + user.email);
    };
    return UserService;
}());
UserService = __decorate([
    core_1.Injectable()
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBSzNDLElBQWEsV0FBVztJQUF4QjtJQUlBLENBQUM7SUFIQSw4QkFBUSxHQUFSLFVBQVMsSUFBVTtRQUNsQixLQUFLLENBQUMsdUJBQXFCLElBQUksQ0FBQyxLQUFPLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBQ0Ysa0JBQUM7QUFBRCxDQUFDLEFBSkQsSUFJQztBQUpZLFdBQVc7SUFEdkIsaUJBQVUsRUFBRTtHQUNBLFdBQVcsQ0FJdkI7QUFKWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuL3VzZXJcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFVzZXJTZXJ2aWNlIHtcclxuXHRyZWdpc3Rlcih1c2VyOiBVc2VyKSB7XHJcblx0XHRhbGVydChgQWJvdXQgdG8gcmVnaXN0ZXIgJHt1c2VyLmVtYWlsfWApO1xyXG5cdH1cclxufSJdfQ==