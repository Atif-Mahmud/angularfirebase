import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth.service';
import { AngularFireAuthModule } from "../../../node_modules/angularfire2/auth";
import { AngularFirestore } from "../../../node_modules/angularfire2/firestore";

@NgModule({
  imports: [
    CommonModule,
    AngularFireAuthModule,
    AngularFirestore
  ],
  declarations: [],
  providers: [AuthService]
})
export class CoreModule { }
