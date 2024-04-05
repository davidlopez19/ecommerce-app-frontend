import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioClientComponent } from './formulario-client.component';

describe('FormularioClientComponent', () => {
  let component: FormularioClientComponent;
  let fixture: ComponentFixture<FormularioClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormularioClientComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormularioClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
