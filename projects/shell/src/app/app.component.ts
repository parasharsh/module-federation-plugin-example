import { Component, ViewChild, ViewContainerRef, ɵrenderComponent as renderComponent, Inject, Injector, ComponentFactoryResolver } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthLibService } from 'auth-lib';
import { I18NService } from 'ui-sdk/i18n';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'shell';

  constructor(private service: AuthLibService, http: HttpClient, private i18nservice: I18NService) {
    this.service.login('Max1', null);
    this.i18nservice.login("ch");
  }

}

