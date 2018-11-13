import {AfterContentInit, Component, ContentChildren, ElementRef, QueryList} from '@angular/core';
import {ChildItemDirective} from "./child-item.directive";


@Component({
    selector: 'app-child-inner',
    templateUrl: './child-inner.component.html',
    styleUrls: ['./child-inner.component.less']
})
export class ChildInnerComponent implements AfterContentInit {

    @ContentChildren(ChildItemDirective, { read: ElementRef }) items: QueryList<ElementRef>;

    ngAfterContentInit(): void {
        if (this.items) {
            console.log('content children list');
            this.items.forEach((item: ElementRef, index: number, array: ElementRef[]) => {
                console.log(item.nativeElement);
            });
        }
    }

}
