import { Injectable } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';

@Injectable()
export class ZapatillaService {
  public zapatillas: Array<Zapatilla>;

  constructor() {
    this.zapatillas = [
      new Zapatilla('Adidas Classic', 'Adidas', 'Blanco', 69.99, true),
      new Zapatilla('Adidas Ultra Boost', 'Adidas', 'Negro', 120.0, true),
      new Zapatilla('Nike Air', 'Nike', 'Blanco', 89.99, true),
      new Zapatilla('Puma Clyde Court', 'Puma', 'Rojo', 99.99, false),
      new Zapatilla('Reebok Classic Leather', 'Reebok', 'Blanco', 79.95, true),
    ];
  }

  getZapatillas() {
    return this.zapatillas;
  }

  getTexto() {
    return 'Hooooola Manolo';
  }
}
