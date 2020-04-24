import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-scrollable-tabs',
  templateUrl: './scrollable-tabs.component.html',
  styleUrls: ['./scrollable-tabs.component.less']
})
export class ScrollableTabsComponent implements OnInit {

  @Input() tabs;
  @Output() emitSelectedTab = new EventEmitter();

  selectedIndex = 0;
  translateX: string;
  leftTabIdx = 0;
  atStart = true;
  atEnd = false;

  constructor() {
  }

  ngOnInit() {
    this.emitSelectedTab.emit(this.tabs[0]);
    this.translateX = `translateX(0px)`;
  }

  /**
   * 点击按钮选中某个tab
   * @param index tab对应的小标
   */
  selectTab(index) {
    this.selectedIndex = index;
    this.emitSelectedTab.emit(this.tabs[index]);
    this.scrollTab(index - this.leftTabIdx - 1);
  }

  scrollTab(x) {
    if (this.atStart && x < 0 || this.atEnd && x > 0) {
      return;
    }
    this.leftTabIdx = this.leftTabIdx + x;
    this.translateX = `translateX(${(this.leftTabIdx) * -140}px)`;
    this.atStart = this.leftTabIdx === 0;
    this.atEnd = this.leftTabIdx === this.tabs.length - 1;
  }
}
