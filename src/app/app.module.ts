import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableModule } from 'primeng/table';
import { MenuModule } from 'primeng/menu';
import { BadgeModule } from 'primeng/badge';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { RouterOutlet } from '@angular/router';
import { AuthenticationComponent } from './shared/authentication/authentication.component';
import { ListClientsComponent } from './clients/list-clients/list-clients.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateClientsComponent } from './clients/create-clients/create-clients.component';
import { UpdateClientComponent } from './clients/update-client/update-client.component';
import { FormularioClientComponent } from './shared/formulario-client/formulario-client.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    ListClientsComponent,
    CreateClientsComponent,
    UpdateClientComponent,
    FormularioClientComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    TableModule,
    MenuModule,
    BadgeModule,
    InputTextModule,
    FormsModule,
    ButtonModule,
    CardModule,
    ToastModule,
    ConfirmDialogModule,
    HttpClientModule
  ],
  providers: [MessageService, ConfirmationService],
  bootstrap: [AppComponent],
})
export class AppModule {}
