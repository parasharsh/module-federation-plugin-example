import {Component} from '@angular/core';
import { AuthLibService } from 'auth-lib';
import { I18NService } from 'ui-sdk/i18n';


@Component({
  selector: 'app-flights-search',
  templateUrl: './flights-search.component.html'
})
export class FlightsSearchComponent {
  constructor(private service: AuthLibService, private i18nservice: I18NService) {
    console.log('User Name', this.service.user);
    console.log("Language is", i18nservice.lang);
  }
}
