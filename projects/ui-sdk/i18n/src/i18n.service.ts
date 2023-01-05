import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class I18NService {

  private language: string;

  public get lang(): string {
    return this.language;
  }

  constructor() { }

  public login(lang: string): void {
    // Authentication for **honest** users TM. (c) Manfred Steyer
    this.language = lang;
  }

}
