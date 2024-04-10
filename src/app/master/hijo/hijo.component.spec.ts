import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HijoComponent } from './hijo.component';
import { ListadoComponent } from 'src/app/components/listado/listado.component';

describe('HijoComponent', () => {
  let component: HijoComponent;
  let fixture: ComponentFixture<HijoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
                      HijoComponent,
                      ListadoComponent
                    ]
    });
    fixture = TestBed.createComponent(HijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
