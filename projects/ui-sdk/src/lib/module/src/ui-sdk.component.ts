import { Component, OnInit } from '@angular/core';
import { UiSdkService } from './ui-sdk.service';

@Component({
  selector: 'lib-ui-sdk',
  template: `
    <p>
      ui-sdk works!
    </p>
  `,
  styles: [
  ]
})
export class UiSdkComponent implements OnInit {

  constructor(uisdkservice: UiSdkService) { 
    console.log("Inside", uisdkservice);
  }

  ngOnInit(): void {
  }

}
