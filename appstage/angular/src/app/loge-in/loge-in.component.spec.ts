import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogeInComponent } from './loge-in.component';

describe('LogeInComponent', () => {
  let component: LogeInComponent;
  let fixture: ComponentFixture<LogeInComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogeInComponent]
    });
    fixture = TestBed.createComponent(LogeInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
