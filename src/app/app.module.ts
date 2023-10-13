import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RadioButtonModule } from 'primeng/radiobutton';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './component/principal/principal.component';
import { UnoComponent } from './component/uno/uno.component';
import { DosComponent } from './component/dos/dos.component';
import { TresComponent } from './component/tres/tres.component';
import { FormsModule } from '@angular/forms';
import { PadreComponent } from './component/padre/padre.component';
import { HijoComponent } from './component/padre/hijo/hijo.component';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    UnoComponent,
    DosComponent,
    TresComponent,
    PadreComponent,
    HijoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    PanelModule,
    RadioButtonModule,
    PasswordModule,
    InputTextModule,
    ButtonModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
