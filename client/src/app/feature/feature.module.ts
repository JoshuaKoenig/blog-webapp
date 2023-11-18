import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SharedModule } from './shared/shared.module';
import { UserModule } from './user/user.module';
import { CreatorModule } from './creator/creator.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    UserModule,
    CreatorModule
  ],
  exports: [
    NavbarComponent
  ]

})
export class FeatureModule { }
