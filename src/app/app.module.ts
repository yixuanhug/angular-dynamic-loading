import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AdModule } from '../ad/ad.modules';
import { HeroProfileComponent } from './hero-profile.component';
import { AdService } from '../ad/ad.service';
import { AdServiceCustom } from './ad.service.custom';

@NgModule({
  imports: [BrowserModule, AdModule],
  // providers: [{ provide: AdService, useClass: AdServiceCustom }],
  declarations: [AppComponent, HeroProfileComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
