/*
 * File: ngxLoaderCongig.ts
 * Project: tasky
 * File Created: Thursday, 7th January 2021 2:30:14 pm
 * Author: Priya Gupta (priya.gupta@mutualmobile.com)
 * -----
 * Last Modified: Thursday, 7th January 2021 2:30:33 pm
 * Modified By: Priya Gupta (priya.gupta@mutualmobile.com)
 * -----
 * Copyright 2020 - 2021 Mutual Mobile, Mutual Mobile
 */
import { NgxUiLoaderConfig, PB_DIRECTION } from 'ngx-ui-loader';

export const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  fgsSize: 0,
  bgsSize: 0,
  pbDirection: PB_DIRECTION.leftToRight, // progress bar direction
  pbThickness: 5, // progress bar thickness
  pbColor: '#0cb8d4',
  overlayColor: 'rgba(255,255,255,0.5)',
};
