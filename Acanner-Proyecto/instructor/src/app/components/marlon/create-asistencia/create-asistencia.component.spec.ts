import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAsistenciaComponent } from './create-asistencia.component';

describe('CreateAsistenciaComponent', () => {
  let component: CreateAsistenciaComponent;
  let fixture: ComponentFixture<CreateAsistenciaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateAsistenciaComponent]
    });
    fixture = TestBed.createComponent(CreateAsistenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
