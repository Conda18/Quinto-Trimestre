import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexGuiasComponent } from './index-guias.component';

describe('IndexGuiasComponent', () => {
  let component: IndexGuiasComponent;
  let fixture: ComponentFixture<IndexGuiasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndexGuiasComponent]
    });
    fixture = TestBed.createComponent(IndexGuiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
