import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgriculturaloperationListComponent } from './agriculturaloperation-list.component';

describe('AgriculturaloperationListComponent', () => {
  let component: AgriculturaloperationListComponent;
  let fixture: ComponentFixture<AgriculturaloperationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgriculturaloperationListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgriculturaloperationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
