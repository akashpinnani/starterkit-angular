import { TestBed, inject } from '@angular/core/testing';

import { AuthenticationGuard } from '@app/auth';
import { AuthenticationService } from '@app/@shared/services/authentication.service';
import { MockAuthenticationService } from '@app/@shared/services/authentication.service.mock';

import { ShellComponent } from './shell.component';
import { Shell } from './shell.service';

describe('Shell', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShellComponent],
      providers: [AuthenticationGuard, { provide: AuthenticationService, useClass: MockAuthenticationService }],
    });
  });

  describe('childRoutes', () => {
    it('should create routes as children of shell', () => {
      // Prepare
      const testRoutes = [{ path: 'test' }];

      // Act
      const result = Shell.childRoutes(testRoutes);

      // Assert
      expect(result.path).toBe('');
      expect(result.children).toBe(testRoutes);
      expect(result.component).toBe(ShellComponent);
    });
  });
});
