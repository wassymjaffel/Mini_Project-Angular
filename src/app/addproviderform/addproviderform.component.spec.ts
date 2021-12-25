import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddproviderformComponent } from './addproviderform.component';

describe('AddproviderformComponent', () => {
  let component: AddproviderformComponent;
  let fixture: ComponentFixture<AddproviderformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddproviderformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddproviderformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
