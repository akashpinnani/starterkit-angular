import { Observable, of } from 'rxjs';

import { LoginContext } from './authentication.service';
import { Credentials } from '../../auth/credentials.service';
import { MockCredentialsService } from '@app/auth/credentials.service.mock';

export class MockAuthenticationService {
  constructor(private credentialService: MockCredentialsService) {}

  login(context: LoginContext): Observable<Credentials> {
    return of({
      username: context.username,
      token: '123456',
    });
  }

  logout(): Observable<boolean> {
    this.credentialService.setCredentials = null;
    return of(true);
  }
}
