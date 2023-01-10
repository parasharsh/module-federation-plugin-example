import { Injectable } from '@angular/core';
import { I18NService } from 'ui-sdk/i18n';

@Injectable({
  providedIn: 'root'
})
export class UiSdkService {

  constructor(i18nService: I18NService) { 
    console.log("Inside UiSdkService", i18nService.lang)

  }
}
