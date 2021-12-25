import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddproducttdComponent } from './addproducttd.component';

describe('AddproducttdComponent', () => {
  let component: AddproducttdComponent;
  let fixture: ComponentFixture<AddproducttdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddproducttdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddproducttdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
