import { NgModule } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { AppComponent } from "./app.component";

import { UserService } from "./shared/user/user.service";

@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule
  ],
  declarations: [AppComponent],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
