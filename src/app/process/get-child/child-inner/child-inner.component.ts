import {AfterContentInit, Component, ContentChildren, QueryList} from '@angular/core';
import {ChildItemDirective} from "./child-item.directive";


@Component({
    selector: 'app-child-inner',
    templateUrl: './child-inner.component.html',
    styleUrls: ['./child-inner.component.less']
})
export class ChildInnerComponent implements AfterContentInit {

    @ContentChildren(ChildItemDirective) items: QueryList<ChildItemDirective>;

    ngAfterContentInit(): void {
        if (this.items) {
            console.log('content children list');
            this.items.forEach((item: ChildItemDirective, index: number, array: ChildItemDirective[]) => {
                console.log(item);
            });
        }
    }

}
