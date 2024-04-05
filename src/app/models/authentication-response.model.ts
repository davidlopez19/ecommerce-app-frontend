export class AuthenticationResponseModel {
  idCliente: number;
  nombre: string;
  email: string;
  token: string;

  constructor() {
    this.idCliente = 0;
    this.nombre = '';
    this.email = '';
    this.token = '';
  }
}
