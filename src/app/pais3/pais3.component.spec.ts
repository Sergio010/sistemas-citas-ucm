import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pais3Component } from './pais3.component';

describe('Pais3Component', () => {
  let component: Pais3Component;
  let fixture: ComponentFixture<Pais3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Pais3Component]
    });
    fixture = TestBed.createComponent(Pais3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
