import {AfterViewInit, Component, ElementRef, Renderer2, ViewChild} from '@angular/core';

@Component({
    selector: 'app-renderer2',
    templateUrl: './renderer2.component.html',
    styleUrls: ['./renderer2.component.less']
})
export class Renderer2Component implements AfterViewInit {

    @ViewChild('parent')
    parentDiv: ElementRef;

    @ViewChild('buttonOne')
    buttonOne: ElementRef;

    constructor(private renderer2: Renderer2) {

    }

    /**
     * 初始化完组件视图及其子视图之后调用,只会调用一次
     */
    ngAfterViewInit(): void {

        // 给页面button添加样式
        this.renderer2.setStyle(this.buttonOne.nativeElement, 'backgroundColor', 'red');
        // 给页面button添加点击事件,点击添加一个空间到div节点
        this.renderer2.listen(this.buttonOne.nativeElement, "click", (event) => {
            console.log(event);
            // 我们创建一个input节点元素，并且把他添加到div下面
            const inputCreate: Element = this.renderer2.createElement("input");
            inputCreate.setAttribute("type", "text");
            inputCreate.setAttribute("name", "q");
            inputCreate.setAttribute("value", "使用setAttribute");
            inputCreate.setAttribute("onclick", "javascript:alert('This is a text!');");
            this.renderer2.appendChild(this.parentDiv.nativeElement, inputCreate);
        });

        // 创建文本元素
        const textCreate = this.renderer2.createText("我是创建的文本");
        this.renderer2.appendChild(this.parentDiv.nativeElement, textCreate);

        // 创建comment注解元素
        const commentCreate = this.renderer2.createComment("我是创建的注解");
        this.renderer2.appendChild(this.parentDiv.nativeElement, commentCreate);

    }

}
