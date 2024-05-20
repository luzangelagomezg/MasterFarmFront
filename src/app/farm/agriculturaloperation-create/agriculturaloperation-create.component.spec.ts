import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgriculturaloperationCreateComponent } from './agriculturaloperation-create.component';

describe('AgriculturaloperationCreateComponent', () => {
  let component: AgriculturaloperationCreateComponent;
  let fixture: ComponentFixture<AgriculturaloperationCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgriculturaloperationCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgriculturaloperationCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
