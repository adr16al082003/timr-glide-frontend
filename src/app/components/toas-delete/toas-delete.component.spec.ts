import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToasDeleteComponent } from './toas-delete.component';

describe('ToasDeleteComponent', () => {
  let component: ToasDeleteComponent;
  let fixture: ComponentFixture<ToasDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToasDeleteComponent]
    });
    fixture = TestBed.createComponent(ToasDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
