import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerCreateComponent } from './farmer-create.component';

describe('FarmerCreateComponent', () => {
  let component: FarmerCreateComponent;
  let fixture: ComponentFixture<FarmerCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FarmerCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FarmerCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
