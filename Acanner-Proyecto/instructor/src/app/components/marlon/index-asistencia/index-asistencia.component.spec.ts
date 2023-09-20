import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexAsistenciaComponent } from './index-asistencia.component';

describe('IndexAsistenciaComponent', () => {
  let component: IndexAsistenciaComponent;
  let fixture: ComponentFixture<IndexAsistenciaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndexAsistenciaComponent]
    });
    fixture = TestBed.createComponent(IndexAsistenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
