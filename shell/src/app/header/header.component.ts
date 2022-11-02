import { loadRemoteModule } from '@angular-architects/module-federation';
import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import {environment} from '../../environments/environment';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @ViewChild('headerRef', {read: ViewContainerRef})
  viewContainer!: ViewContainerRef

  @ViewChild('headerRefs', {read: ViewContainerRef})
  viewContainers!: ViewContainerRef
  constructor() {
  }

  ngOnInit(): void {
    this.load();
  }

  async load(): Promise<void> {
    const module = await loadRemoteModule({
      type: 'module',
      remoteEntry: environment.header.url,
      exposedModule: './HeaderComponent'
    });

    const ref = this.viewContainer.createComponent(module.HeaderCompComponent);

    // Uncomment to show  off multiple static assets
    const modules = await loadRemoteModule({
      type: 'module',
      remoteEntry: environment.header.url,
      exposedModule: './HeaderComponent'
    });

    const refs = this.viewContainers.createComponent(modules.HeaderCompComponent);
  }

}
