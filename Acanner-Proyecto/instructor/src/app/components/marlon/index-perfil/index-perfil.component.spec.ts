import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexPerfilComponent } from './index-perfil.component';

describe('IndexPerfilComponent', () => {
  let component: IndexPerfilComponent;
  let fixture: ComponentFixture<IndexPerfilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndexPerfilComponent]
    });
    fixture = TestBed.createComponent(IndexPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
