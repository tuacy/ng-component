import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';

@Component({
    selector: 'app-element-ref',
    templateUrl: './element-ref.component.html',
    styleUrls: ['./element-ref.component.less']
})
export class ElementRefComponent implements AfterViewInit {

    @ViewChild('buttonOne')
    buttonOne: ElementRef;

    /**
     * 我们在构造函数里面导入了ElementRef，咱们就得记住elementRef对应的nativeElement就是当前组件的顶部元素(不是DOM对象哦)
     */
    constructor(private elementRef: ElementRef) {
    }

    /**
     * 初始化完组件视图及其子视图之后调用,只会调用一次
     */
    ngAfterViewInit() {
        /**
         * this.elementRef.nativeElement是当前组件的顶部元素
         */
        console.log(this.elementRef.nativeElement);
        const divElement = this.elementRef.nativeElement.querySelector('div');
        // console.log(divElement);
        this.buttonOne.nativeElement.style.backgroundColor = 'red';
    }

}
