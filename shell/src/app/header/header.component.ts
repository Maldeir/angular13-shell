import { loadRemoteModule } from '@angular-architects/module-federation';
import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @ViewChild('headerRef', {read: ViewContainerRef})
  viewContainer!: ViewContainerRef

  constructor() { }

  ngOnInit(): void {
    this.load();
  }

  async load(): Promise<void> {
    const module = await loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:4201/remoteEntry.js',
      exposedModule: './HeaderComponent'
    });

    const ref = this.viewContainer.createComponent(module.HeaderCompComponent);
  }

}
