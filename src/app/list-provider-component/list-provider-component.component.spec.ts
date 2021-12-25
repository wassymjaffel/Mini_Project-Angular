import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProviderComponentComponent } from './list-provider-component.component';

describe('ListProviderComponentComponent', () => {
  let component: ListProviderComponentComponent;
  let fixture: ComponentFixture<ListProviderComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListProviderComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProviderComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
