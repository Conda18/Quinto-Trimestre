import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAsistenciaComponent } from './edit-asistencia.component';

describe('EditAsistenciaComponent', () => {
  let component: EditAsistenciaComponent;
  let fixture: ComponentFixture<EditAsistenciaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditAsistenciaComponent]
    });
    fixture = TestBed.createComponent(EditAsistenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
