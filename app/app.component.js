"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.email = "nativescriptrocks@telerik.com";
        this.isLoggingIn = true;
    }
    AppComponent.prototype.submit = function () {
        alert("Submit " + this.email);
    };
    AppComponent.prototype.toggleDisplay = function () {
        this.isLoggingIn = !this.isLoggingIn;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        template: "\n\t\t<StackLayout>\n\t\t\t<Image src=\"res://logo_login\" stretch=\"none\" horizontalAlignment=\"center\"></Image>\n\n\t\t\t<TextField hint=\"Email Address\" keyboardType=\"email\" [(ngModel)]=\"email\"\n\t\t\t\tautocorrect=\"false\" autocapitalizationType=\"none\"></TextField>\n\t\t\t<TextField hint=\"Password\" secure=\"true\"></TextField>\n\n\t\t\t<Button [text]=\"isLoggingIn ? 'Sign in' : 'Sign up'\" class=\"submit-button\" (tap)=\"submit()\"></Button>\n\t\t\t<Button [text]=\"isLoggingIn ? 'Sign up for Groceries' : 'Back to login'\" (tap)=\"toggleDisplay()\"></Button>\n\t\t</StackLayout>\n\t",
        styleUrls: ["pages/login/login-common.css", "pages/login/login.css"]
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFrQjFDLElBQWEsWUFBWTtJQWhCekI7UUFpQkMsVUFBSyxHQUFHLCtCQUErQixDQUFDO1FBQ3hDLGdCQUFXLEdBQUcsSUFBSSxDQUFDO0lBU3BCLENBQUM7SUFQQSw2QkFBTSxHQUFOO1FBQ0MsS0FBSyxDQUFDLFlBQVUsSUFBSSxDQUFDLEtBQU8sQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFRCxvQ0FBYSxHQUFiO1FBQ0MsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDdEMsQ0FBQztJQUNGLG1CQUFDO0FBQUQsQ0FBQyxBQVhELElBV0M7QUFYWSxZQUFZO0lBaEJ4QixnQkFBUyxDQUFDO1FBQ1YsUUFBUSxFQUFFLFFBQVE7UUFDbEIsUUFBUSxFQUFFLDZsQkFXVDtRQUNBLFNBQVMsRUFBRSxDQUFDLDhCQUE4QixFQUFFLHVCQUF1QixDQUFDO0tBQ3JFLENBQUM7R0FDVyxZQUFZLENBV3hCO0FBWFksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6IFwibXktYXBwXCIsXG5cdHRlbXBsYXRlOiBgXG5cdFx0PFN0YWNrTGF5b3V0PlxuXHRcdFx0PEltYWdlIHNyYz1cInJlczovL2xvZ29fbG9naW5cIiBzdHJldGNoPVwibm9uZVwiIGhvcml6b250YWxBbGlnbm1lbnQ9XCJjZW50ZXJcIj48L0ltYWdlPlxuXG5cdFx0XHQ8VGV4dEZpZWxkIGhpbnQ9XCJFbWFpbCBBZGRyZXNzXCIga2V5Ym9hcmRUeXBlPVwiZW1haWxcIiBbKG5nTW9kZWwpXT1cImVtYWlsXCJcblx0XHRcdFx0YXV0b2NvcnJlY3Q9XCJmYWxzZVwiIGF1dG9jYXBpdGFsaXphdGlvblR5cGU9XCJub25lXCI+PC9UZXh0RmllbGQ+XG5cdFx0XHQ8VGV4dEZpZWxkIGhpbnQ9XCJQYXNzd29yZFwiIHNlY3VyZT1cInRydWVcIj48L1RleHRGaWVsZD5cblxuXHRcdFx0PEJ1dHRvbiBbdGV4dF09XCJpc0xvZ2dpbmdJbiA/ICdTaWduIGluJyA6ICdTaWduIHVwJ1wiIGNsYXNzPVwic3VibWl0LWJ1dHRvblwiICh0YXApPVwic3VibWl0KClcIj48L0J1dHRvbj5cblx0XHRcdDxCdXR0b24gW3RleHRdPVwiaXNMb2dnaW5nSW4gPyAnU2lnbiB1cCBmb3IgR3JvY2VyaWVzJyA6ICdCYWNrIHRvIGxvZ2luJ1wiICh0YXApPVwidG9nZ2xlRGlzcGxheSgpXCI+PC9CdXR0b24+XG5cdFx0PC9TdGFja0xheW91dD5cblx0YCxcbiAgc3R5bGVVcmxzOiBbXCJwYWdlcy9sb2dpbi9sb2dpbi1jb21tb24uY3NzXCIsIFwicGFnZXMvbG9naW4vbG9naW4uY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG5cdGVtYWlsID0gXCJuYXRpdmVzY3JpcHRyb2Nrc0B0ZWxlcmlrLmNvbVwiO1xuXHRpc0xvZ2dpbmdJbiA9IHRydWU7XG5cblx0c3VibWl0KCkge1xuXHRcdGFsZXJ0KGBTdWJtaXQgJHt0aGlzLmVtYWlsfWApO1xuXHR9XG5cblx0dG9nZ2xlRGlzcGxheSgpIHtcblx0XHR0aGlzLmlzTG9nZ2luZ0luID0gIXRoaXMuaXNMb2dnaW5nSW47XG5cdH1cbn0iXX0=