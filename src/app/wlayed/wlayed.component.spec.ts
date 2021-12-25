import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WlayedComponent } from './wlayed.component';

describe('WlayedComponent', () => {
  let component: WlayedComponent;
  let fixture: ComponentFixture<WlayedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WlayedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WlayedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
