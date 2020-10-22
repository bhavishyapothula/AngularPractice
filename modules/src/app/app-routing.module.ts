import {NgModule} from '@angular/core';
import {Routes,RouterModule, PreloadAllModules} from '@angular/router';
import { ViewComponentComponent } from './view/view-component/view-component.component';
const routes:Routes=[
    {
        path:'view',component:ViewComponentComponent
    },
    {
        path:'load',
        loadChildren: () => import('./load/load.module').then(file => file.LoadModule)
   
    }
    
];
@NgModule({
    imports:[RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules})],
    exports:[RouterModule]
})
export class AppRoutingModule{}