import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservaDeHorasComponent } from './reserva-de-horas.component';

describe('ReservaDeHorasComponent', () => {
  let component: ReservaDeHorasComponent;
  let fixture: ComponentFixture<ReservaDeHorasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReservaDeHorasComponent]
    });
    fixture = TestBed.createComponent(ReservaDeHorasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
