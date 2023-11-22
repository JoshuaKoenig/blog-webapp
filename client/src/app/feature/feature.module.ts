import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SharedModule } from './shared/shared.module';
import { UserModule } from './user/user.module';
import { CreatorModule } from './creator/creator.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    UserModule,
    CreatorModule,
    RouterModule
  ],
  exports: [
    NavbarComponent
  ]

})
export class FeatureModule { }
