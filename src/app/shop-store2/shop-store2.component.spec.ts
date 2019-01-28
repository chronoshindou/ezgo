import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopStore2Component } from './shop-store2.component';

describe('ShopStore2Component', () => {
  let component: ShopStore2Component;
  let fixture: ComponentFixture<ShopStore2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopStore2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopStore2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
