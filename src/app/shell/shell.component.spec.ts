import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@app/material.module';

import { CoreModule } from '@core';
import { CredentialsService } from '@app/auth';
import { MockAuthenticationService } from '@app/@shared/services/authentication.service.mock';
import { MockCredentialsService } from '@app/auth/credentials.service.mock';

import { I18nModule } from '@app/i18n';
import { ShellComponent } from './shell.component';
import { HeaderComponent } from './header/header.component';
import { SharedModule, AuthenticationService } from '@app/@shared';

describe('ShellComponent', () => {
  let component: ShellComponent;
  let fixture: ComponentFixture<ShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        TranslateModule.forRoot(),
        I18nModule,
        BrowserAnimationsModule,
        FlexLayoutModule,
        MaterialModule,
        CoreModule,
        SharedModule,
      ],
      declarations: [HeaderComponent, ShellComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
