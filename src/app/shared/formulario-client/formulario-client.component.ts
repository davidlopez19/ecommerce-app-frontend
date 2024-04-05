import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ClientModel } from '../../models/clients/clients-response.model';

@Component({
  selector: 'app-formulario-client',
  templateUrl: './formulario-client.component.html',
  styleUrl: './formulario-client.component.css',
})
export class FormularioClientComponent {
  @Input() client: ClientModel = new ClientModel();

  @Output() eventSaveFormClient = new EventEmitter<ClientModel>();

  saveClient() {
    this.eventSaveFormClient.emit(this.client);
  }
}
