import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgriculturaloperationtypeListComponent } from './agriculturaloperationtype-list.component';

describe('AgriculturaloperationtypeListComponent', () => {
  let component: AgriculturaloperationtypeListComponent;
  let fixture: ComponentFixture<AgriculturaloperationtypeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgriculturaloperationtypeListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgriculturaloperationtypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
