/*
 * File: check-for-update.service.ts
 * Project: tasky
 * File Created: Friday, 8th January 2021 12:07:10 pm
 * Author: Priya Gupta (priya.gupta@mutualmobile.com)
 * -----
 * Last Modified: Friday, 8th January 2021 12:07:47 pm
 * Modified By: Priya Gupta (priya.gupta@mutualmobile.com)
 * -----
 * Copyright 2020 - 2021 Mutual Mobile, Mutual Mobile
 */
import { ApplicationRef, Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { concat, interval } from 'rxjs';
import { first } from 'rxjs/operators';

@Injectable()
export class CheckForUpdateService {
  constructor(private appRef: ApplicationRef, private updates: SwUpdate) {}

  checkForUpdates() {
    this.handleUpdates();
    this.updates.checkForUpdate();
    // Allow the app to stabilize first, before starting polling for updates with `interval()`.
    const appIsStable$ = this.appRef.isStable.pipe(first((isStable) => isStable === true));
    const everyOneMinute$ = interval(60 * 1000);
    const everyOneMinuteOnceAppIsStable$ = concat(appIsStable$, everyOneMinute$);
    everyOneMinuteOnceAppIsStable$.subscribe(() => {
      this.updates.checkForUpdate();
    });
  }

  handleUpdates() {
    this.updates.available.subscribe((update) => {
      const r = confirm('There is a new version of the app available!\nWould you like to reload the screen to update?');
      if (r === true) {
        window.location.reload();
      }
    });
  }
}
