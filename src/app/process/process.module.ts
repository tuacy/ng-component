import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProcessRoutingModule} from './process-routing.module';
import {ProcessComponent} from './process.component';
import {ElementRefComponent} from './element-ref/element-ref.component';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import { Renderer2Component } from './renderer2/renderer2.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ProcessRoutingModule
    ],
    declarations: [ProcessComponent, ElementRefComponent, Renderer2Component]
})
export class ProcessModule {
}
