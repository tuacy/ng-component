import {NgModule} from '@angular/core';

import {RouteRoutingModule} from './routes-routing.module';
import {SharedModule} from '../shared/shared.module';
// dashboard pages
// passport pages
// single pages


const COMPONENTS = [];
const COMPONENTS_NOROUNT = [];

@NgModule({
  imports: [SharedModule, RouteRoutingModule],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_NOROUNT
  ],
  entryComponents: COMPONENTS_NOROUNT
})
export class RoutesModule {
}
