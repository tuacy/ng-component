import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IndexComponent} from './index/index.component';
import {RouterModule, Routes} from '@angular/router';

const appRoutes: Routes = [
    {
        path: 'index',
        component: IndexComponent
    }, {
        path: 'component',
        loadChildren: './component/component.module#ComponentModule',
    }, {
        path: 'process',
        loadChildren: './process/process.module#ProcessModule',
    }, {
        path: '',
        redirectTo: '/index',
        pathMatch: 'full'
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes),
        CommonModule
    ],
    exports: [
        RouterModule
    ],
    providers: []
})
export class AppRoutingModule {
}
