import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ComponentRoutingModule} from './component-routing.module';
import {ComponentComponent} from './component.component';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ComponentRoutingModule
    ],
    declarations: [ComponentComponent]
})
export class ComponentModule {
}
