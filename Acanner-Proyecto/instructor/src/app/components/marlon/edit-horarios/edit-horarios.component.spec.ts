import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHorariosComponent } from './edit-horarios.component';

describe('EditHorariosComponent', () => {
  let component: EditHorariosComponent;
  let fixture: ComponentFixture<EditHorariosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditHorariosComponent]
    });
    fixture = TestBed.createComponent(EditHorariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
