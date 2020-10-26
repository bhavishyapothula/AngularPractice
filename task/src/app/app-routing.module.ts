import {NgModule} from '@angular/core';
import {Routes,RouterModule, PreloadAllModules} from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { LoginComponent } from './login/login.component';
import { LoguserGuard } from './loguser.guard';
const routes:Routes=[
    {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'details',canActivate:[LoguserGuard],component:DetailsComponent}
    
];
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{}