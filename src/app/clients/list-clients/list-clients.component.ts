import { Component, OnInit } from '@angular/core';
import { ClientModel } from '../../models/clients/clients-response.model';
import { ClientService } from '../../services/client/client.service';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-list-clients',
  standalone: false,
  templateUrl: './list-clients.component.html',
  styleUrl: './list-clients.component.css',
})
export class ListClientsComponent implements OnInit {
  clientList: ClientModel[] = [];

  constructor(
    private clientService: ClientService,
    private router: Router,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit(): void {
    this.clientService.getAllClients().subscribe((result) => {
      this.clientList = result;
    });
  }

  updateClient(client: ClientModel) {
    this.router.navigate(['/update-cliente', client.id_cliente]);
  }

  deleteClient(event: Event, client: ClientModel) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: `Esta seguro que quiere eliminar el client ${client.nombre}?`,
      header: 'Confirmacion',
      icon: 'pi pi-exclamation-triangle',
      acceptIcon: 'none',
      rejectIcon: 'none',
      rejectButtonStyleClass: 'p-button-text',
      accept: () => {
        // this.clientService.deleteClient(client.id_cliente);
        this.ngOnInit();
      },
      reject: () => {},
    });
  }
}
