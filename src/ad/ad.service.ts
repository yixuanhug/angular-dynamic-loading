import { Injectable } from '@angular/core';

import { HeroJobAdComponent } from './hero-job-ad.component';
import { AdItem } from './ad-item';

@Injectable({
  providedIn: 'root',
})
export class AdService {
  getAds() {
    return [
      new AdItem(HeroJobAdComponent, {
        headline: 'Hiring for several positions',
        body: 'Submit your resume today!',
      }),
      new AdItem(HeroJobAdComponent, {
        headline: 'Openings in all departments',
        body: 'Apply today',
      }),
    ];
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
