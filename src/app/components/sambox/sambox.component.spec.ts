import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SamboxComponent } from './sambox.component';

describe('SamboxComponent', () => {
  let component: SamboxComponent;
  let fixture: ComponentFixture<SamboxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SamboxComponent]
    });
    fixture = TestBed.createComponent(SamboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
