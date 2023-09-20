import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGuiasComponent } from './create-guias.component';

describe('CreateGuiasComponent', () => {
  let component: CreateGuiasComponent;
  let fixture: ComponentFixture<CreateGuiasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateGuiasComponent]
    });
    fixture = TestBed.createComponent(CreateGuiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
