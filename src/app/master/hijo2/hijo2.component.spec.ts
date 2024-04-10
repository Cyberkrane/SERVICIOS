import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hijo2Component } from './hijo2.component';
import { ListadoComponent } from 'src/app/components/listado/listado.component';

describe('Hijo2Component', () => {
  let component: Hijo2Component;
  let fixture: ComponentFixture<Hijo2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
                      Hijo2Component,
                      ListadoComponent
                    ]
    });
    fixture = TestBed.createComponent(Hijo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
