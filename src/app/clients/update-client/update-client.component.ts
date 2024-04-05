import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from '../../services/client/client.service';
import { ClientModel } from '../../models/clients/clients-response.model';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
  styleUrl: './update-client.component.css',
})
export class UpdateClientComponent implements OnInit {
  idClient = 0;

  clientModel = new ClientModel();

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private clientService: ClientService,
    private messageService: MessageService
  ) {
    let idClient = this.activeRoute.snapshot.paramMap.get('id');
    if (idClient != null) {
      this.idClient = Number(idClient);
    } else {
      this.router.navigateByUrl('listado-clientes');
    }
  }

  ngOnInit(): void {
    if (this.idClient != null) {
      this.clientService.getClient(this.idClient).subscribe((result) => {
        this.clientModel = result;
      });
    }
  }

  updateClient(newClient: ClientModel) {
    if (this.idClient != null) {
      this.clientService.updateClient(newClient).subscribe({
        next: (result) => {
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: `El cliente se actualizo correctamente`,
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
}
