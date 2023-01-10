import { Component, Input } from '@angular/core';
import { I18NService } from 'ui-sdk/i18n';

@Component({
  selector: 'lib-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input()
  label = 'Click me';
  constructor(i18nService: I18NService) {
    console.log('http', i18nService);
  }
}
