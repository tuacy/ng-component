import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ComponentComponent} from './component.component';

const componentRoutes: Routes = [
    {
        path: '',
        component: ComponentComponent,
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(componentRoutes),
        CommonModule
    ],
    exports: [
        RouterModule
    ],
    providers: []
})
export class ComponentRoutingModule {
}
