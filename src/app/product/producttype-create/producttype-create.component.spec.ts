import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducttypeCreateComponent } from './producttype-create.component';

describe('ProducttypeCreateComponent', () => {
  let component: ProducttypeCreateComponent;
  let fixture: ComponentFixture<ProducttypeCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProducttypeCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProducttypeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
