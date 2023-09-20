import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexHorariosComponent } from './index-horarios.component';

describe('IndexHorariosComponent', () => {
  let component: IndexHorariosComponent;
  let fixture: ComponentFixture<IndexHorariosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndexHorariosComponent]
    });
    fixture = TestBed.createComponent(IndexHorariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
