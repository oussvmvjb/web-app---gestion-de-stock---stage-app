import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EddartComponent } from './eddart.component';

describe('EddartComponent', () => {
  let component: EddartComponent;
  let fixture: ComponentFixture<EddartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EddartComponent]
    });
    fixture = TestBed.createComponent(EddartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
