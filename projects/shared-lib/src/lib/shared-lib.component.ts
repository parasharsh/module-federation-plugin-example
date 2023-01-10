import { Component, OnInit } from '@angular/core';
import { I18NService } from 'ui-sdk';

@Component({
  selector: 'lib-shared-lib',
  template: `
    <h1>Shared</h1>
    <lib-auth-lib></lib-auth-lib>
  `
})
export class SharedLibComponent implements OnInit {

  constructor(i18nService:I18NService) { }

  ngOnInit(): void {
  }

}
