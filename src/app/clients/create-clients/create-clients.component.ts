import { Component } from '@angular/core';
import { ClientService } from '../../services/client/client.service';
import { ClientModel } from '../../models/clients/clients-response.model';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-create-clients',
  templateUrl: './create-clients.component.html',
  styleUrl: './create-clients.component.css',
})
export class CreateClientsComponent {
  constructor(
    private clientService: ClientService,
    private router: Router,
    private messageService: MessageService
  ) {}

  saveNewClient(newClient: ClientModel) {
    this.clientService.saveClient(newClient).subscribe({
      next: (result) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: `El cliente se creo correctamente y su id es ${result.id_cliente}`,
        });
        this.router.navigateByUrl('listado-clientes');
      },
      error: (error) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: `Ocurrio un error ${error.error.message}`,
        });
      },
    });
  }
}
