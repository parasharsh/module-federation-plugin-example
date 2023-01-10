import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { APP_ROUTES } from './app.routes';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthLibModule } from 'auth-lib';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ButtonModule, I18nModule } from 'ui-sdk';
import { CardComponent } from 'ui-sdk';
import { UiSdkModule } from 'ui-sdk';
import { SharedLibModule } from 'shared-lib';
// import { SharedLibModule } from 'projects/shared-lib/src/public-api';

@NgModule({
  imports: [
    BrowserModule,
    AuthLibModule,
    // SharedLibModule,
    HttpClientModule,
    FormsModule,
    ButtonModule,
    CardComponent,
    UiSdkModule,
    SharedLibModule,
    I18nModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
