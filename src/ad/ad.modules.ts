import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HeroJobAdComponent } from './hero-job-ad.component';
import { AdBannerComponent } from './ad-banner.component';
import { AdDirective } from './ad.directive';
@NgModule({
  imports: [BrowserModule],
  declarations: [AdBannerComponent, HeroJobAdComponent, AdDirective],
  entryComponents: [HeroJobAdComponent],
  exports: [AdBannerComponent],
})
export class AdModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
