import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenedorActividadesComponent } from './contenedor-actividades.component';

describe('ContenedorActividadesComponent', () => {
  let component: ContenedorActividadesComponent;
  let fixture: ComponentFixture<ContenedorActividadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContenedorActividadesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContenedorActividadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
