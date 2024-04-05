import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListClientsComponent } from './clients/list-clients/list-clients.component';
import { AuthenticationComponent } from './shared/authentication/authentication.component';
import { AuthGuard } from './services/shared/authorize.service';
import { CreateClientsComponent } from './clients/create-clients/create-clients.component';
import { UpdateClientComponent } from './clients/update-client/update-client.component';

const routes: Routes = [
  { path: 'authentication', component: AuthenticationComponent },
  {
    path: 'listado-clientes',
    component: ListClientsComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'crear-clientes',
    component: CreateClientsComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'update-cliente/:id',
    component: UpdateClientComponent,
    canActivate:[AuthGuard]
  },
  { path: '', redirectTo: '/authentication', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
