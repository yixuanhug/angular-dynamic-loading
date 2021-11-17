import { Injectable } from '@angular/core';

import { AdItem } from '../ad/ad-item';
import { AdService } from '../ad/ad.service';
import {HeroProfileComponent} from './hero-profile.component';
@Injectable({
  providedIn: 'root',
})
export class AdServiceCustom extends AdService {
  getAds() {
    return super.getAds().push(
      new AdItem(HeroProfileComponent, {
        name: 'Thomas',
        bio: 'Superman!',
      }).push(
      new AdItem(HeroProfileComponent, {
        name: 'Rachel',
        bio: 'Spiderman!',
      });
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
