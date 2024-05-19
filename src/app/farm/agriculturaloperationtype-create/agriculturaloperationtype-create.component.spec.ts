import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgriculturaloperationtypeCreateComponent } from './agriculturaloperationtype-create.component';

describe('AgriculturaloperationtypeCreateComponent', () => {
  let component: AgriculturaloperationtypeCreateComponent;
  let fixture: ComponentFixture<AgriculturaloperationtypeCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgriculturaloperationtypeCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgriculturaloperationtypeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
