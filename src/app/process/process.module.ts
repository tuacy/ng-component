import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProcessRoutingModule} from './process-routing.module';
import {ProcessComponent} from './process.component';
import {ElementRefComponent} from './element-ref/element-ref.component';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {Renderer2Component} from './renderer2/renderer2.component';
import {GetChildComponent} from './get-child/get-child.component';
import {ChildInnerComponent} from './get-child/child-inner/child-inner.component';
import {ChildItemDirective} from './get-child/child-inner/child-item.directive';
import { HostBindComponent } from './host-bind/host-bind.component';
import { HostBindDirective } from './host-bind/host-bind.directive';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ProcessRoutingModule
    ],
    declarations: [
        ProcessComponent,
        ElementRefComponent,
        Renderer2Component,
        GetChildComponent,
        ChildInnerComponent,
        ChildItemDirective,
        HostBindComponent,
        HostBindDirective
    ]
})
export class ProcessModule {
}
