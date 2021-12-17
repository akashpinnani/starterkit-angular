/*
 * File: check-for-update.service.spec.ts
 * Project: tasky
 * File Created: Friday, 8th January 2021 12:07:33 pm
 * Author: Priya Gupta (priya.gupta@mutualmobile.com)
 * -----
 * Last Modified: Friday, 8th January 2021 12:07:45 pm
 * Modified By: Priya Gupta (priya.gupta@mutualmobile.com)
 * -----
 * Copyright 2020 - 2021 Mutual Mobile, Mutual Mobile
 */
import { TestBed } from '@angular/core/testing';
import { CheckForUpdateService } from './check-for-update.service';

describe('CheckForUpdateService', () => {
  let service: CheckForUpdateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckForUpdateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
