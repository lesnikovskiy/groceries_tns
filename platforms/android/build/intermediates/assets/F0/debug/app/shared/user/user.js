"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var validator = require("email-validator");
var User = (function () {
    function User() {
    }
    User.prototype.isValidEmail = function () {
        return validator.validate(this.email);
    };
    return User;
}());
exports.User = User;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInVzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLFNBQVMsR0FBRyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQztBQUU3QztJQUFBO0lBT0EsQ0FBQztJQUhBLDJCQUFZLEdBQVo7UUFDQyxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUNGLFdBQUM7QUFBRCxDQUFDLEFBUEQsSUFPQztBQVBZLG9CQUFJIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgdmFsaWRhdG9yID0gcmVxdWlyZShcImVtYWlsLXZhbGlkYXRvclwiKTtcclxuXHJcbmV4cG9ydCBjbGFzcyBVc2VyIHtcclxuXHRlbWFpbDogc3RyaW5nO1xyXG5cdHBhc3N3b3JkOiBzdHJpbmc7XHJcblxyXG5cdGlzVmFsaWRFbWFpbCgpIHtcclxuXHRcdHJldHVybiB2YWxpZGF0b3IudmFsaWRhdGUodGhpcy5lbWFpbCk7XHJcblx0fVxyXG59Il19