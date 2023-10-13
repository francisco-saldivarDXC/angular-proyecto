import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './component/principal/principal.component';
import { UnoComponent } from './component/uno/uno.component';
import { DosComponent } from './component/dos/dos.component';
import { TresComponent } from './component/tres/tres.component';
import { PadreComponent } from './component/padre/padre.component';

const routes: Routes = [
  {
    path: "", component: PrincipalComponent,
  },
  {
    path: "uno", component: UnoComponent,
  },
  {
    path: "dos", component: DosComponent,
  },
  {
    path: "tres", component: TresComponent,
  },
  {
    path: "padre", component: PadreComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
