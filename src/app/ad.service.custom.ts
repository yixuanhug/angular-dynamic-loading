import { Injectable } from '@angular/core';

import { AdItem } from '../ad/ad-item';
import { HeroProfileComponent } from './hero-profile.component';
import { HeroProfileComponent } from './hero-profile.component';
@Injectable({
  providedIn: 'root',
})
export class AdServiceCustom {
  getAds() {
    return [
      new AdItem(HeroProfileComponent, {
        name: 'Thomas',
        bio: 'Superman!',
      }),
      new AdItem(HeroProfileComponent, {
        name: 'Rachel',
        bio: 'Spiderman!',
      }),
    ];
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
