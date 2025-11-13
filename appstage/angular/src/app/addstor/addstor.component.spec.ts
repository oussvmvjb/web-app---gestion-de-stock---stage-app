import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddstorComponent } from './addstor.component';

describe('AddstorComponent', () => {
  let component: AddstorComponent;
  let fixture: ComponentFixture<AddstorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddstorComponent]
    });
    fixture = TestBed.createComponent(AddstorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
