import {Directive, ElementRef, Renderer2} from '@angular/core';

@Directive({
    selector: 'li'
})
export class ChildItemDirective {

    constructor(public _elementRef: ElementRef, public _renderer: Renderer2) {

    }
}
