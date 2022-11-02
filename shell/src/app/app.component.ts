import { Component } from '@angular/core';
import { ConfigLibService, Configs } from 'config-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shell';
  constructor(configLibService: ConfigLibService) {
    const config = new Configs({app: {domain: 'demo', port: 'itworked'}})
     configLibService.write(config);
  }
}
