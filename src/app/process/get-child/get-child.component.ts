import {AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {ChildInnerComponent} from "./child-inner/child-inner.component";

@Component({
    selector: 'app-get-child',
    templateUrl: './get-child.component.html',
    styleUrls: ['./get-child.component.less']
})
export class GetChildComponent implements AfterViewInit {

    // 通过模板名字获取第一个组件
    @ViewChild('divTemplateName')
    divChildOne: ElementRef;
    // 通过模板名字获取所有的组件
    @ViewChildren('divTemplateName')
    divList: QueryList<ElementRef>;
    // 通过组件名字获取组件
    @ViewChild(ChildInnerComponent)
    childInner: ChildInnerComponent;

    constructor() {
    }

    ngAfterViewInit(): void {
        console.log('通过模板名字获取到第一个组件');
        console.log(this.divChildOne.nativeElement);

        console.log('通过模板名字获取到所有的组件');
        this.divList.forEach((item: ElementRef, index: number, array: ElementRef[]) => {
                console.log(item.nativeElement);
            }
        );

        console.log('通过模板名字获取到第一个组件');
        console.log(this.childInner);
    }

}
