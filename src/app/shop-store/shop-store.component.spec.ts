import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopStoreComponent } from './shop-store.component';

describe('ShopStoreComponent', () => {
  let component: ShopStoreComponent;
  let fixture: ComponentFixture<ShopStoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopStoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
