export class ClientModel {
  id_cliente: number;
  nombre: string;
  correo: string;
  password: string;
  telefono: number;
  direccionfacturacion: string;

  constructor() {
    this.id_cliente = 0;
    this.nombre = '';
    this.correo = '';
    this.password = '';
    this.telefono = 0;
    this.direccionfacturacion = '';
  }
}
