import { Component } from '@angular/core';

@Component({
  selector: 'my-index',
  // TODO ルーターで一覧取れないかなー.
  template: `
    <ul>
      <li><a routerLink="/form">Form</a></li>
    </ul>
  `
})
export class IndexComponent {}
