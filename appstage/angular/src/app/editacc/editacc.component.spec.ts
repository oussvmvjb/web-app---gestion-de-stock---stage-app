import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaccComponent } from './editacc.component';

describe('EditaccComponent', () => {
  let component: EditaccComponent;
  let fixture: ComponentFixture<EditaccComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditaccComponent]
    });
    fixture = TestBed.createComponent(EditaccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
