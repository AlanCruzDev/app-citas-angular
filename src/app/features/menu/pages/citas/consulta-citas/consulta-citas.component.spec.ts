import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaCitasComponent } from './consulta-citas.component';

describe('ConsultaCitasComponent', () => {
  let component: ConsultaCitasComponent;
  let fixture: ComponentFixture<ConsultaCitasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaCitasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultaCitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
