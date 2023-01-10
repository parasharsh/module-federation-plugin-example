import { NgModule } from '@angular/core';
import { SharedLibComponent } from './shared-lib.component';
import { OtherComponent } from './other/other.component';
import { AuthLibModule } from 'auth-lib';
import { I18nModule } from 'ui-sdk';



@NgModule({
  declarations: [SharedLibComponent, OtherComponent],
  imports: [
    AuthLibModule,
    I18nModule
  ],
  exports: [SharedLibComponent, OtherComponent]
})
export class SharedLibModule { }
