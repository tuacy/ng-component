import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollableTabsComponent } from './scrollable-tabs.component';

describe('ScrollableTabsComponent', () => {
  let component: ScrollableTabsComponent;
  let fixture: ComponentFixture<ScrollableTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrollableTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollableTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
