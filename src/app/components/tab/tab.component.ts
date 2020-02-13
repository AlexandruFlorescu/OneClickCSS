import { Component, Input } from '@angular/core';
import { TabsComponent } from '../tabs/tabs.component';

@Component({
  selector: 'tab',
  templateUrl: './tab.template.html',
  styleUrls: ['./tab.style.css']
})
export class TabComponent {

  @Input() tabTitle: string;

  active: Boolean;

  constructor(tabs:TabsComponent) {
    tabs.addTab(this);
  }
}
