import { TestBed } from '@angular/core/testing';

import { Servicio2EmpleadosService } from './servicio2-empleados.service';

describe('Servicio2EmpleadosService', () => {
  let service: Servicio2EmpleadosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Servicio2EmpleadosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
