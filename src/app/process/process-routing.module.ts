import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ProcessComponent} from './process.component';
import {ElementRefComponent} from './element-ref/element-ref.component';
import {Renderer2Component} from './renderer2/renderer2.component';

const processRoutes: Routes = [
    {
        path: '',
        component: ProcessComponent,
        children: [
            {
                path: 'elementRef',
                component: ElementRefComponent
            }, {
                path: 'renderer2',
                component: Renderer2Component
            }, {
                path: '',
                redirectTo: '/process/elementRef',
                pathMatch: 'full'
            },
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(processRoutes),
        CommonModule
    ],
    exports: [
        RouterModule
    ],
    providers: []
})
export class ProcessRoutingModule {
}
