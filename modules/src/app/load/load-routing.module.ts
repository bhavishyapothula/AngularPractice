import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import { LazycompComponent } from './lazycomp/lazycomp.component';
const approutes:Routes=[
    {path:'',component:LazycompComponent}
];
@NgModule({
    imports:[RouterModule.forChild(approutes)],
    exports:[RouterModule]
})
export class LoadRoutingModule{}