import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlottypeCreateComponent } from './plottype-create.component';

describe('PlottypeCreateComponent', () => {
  let component: PlottypeCreateComponent;
  let fixture: ComponentFixture<PlottypeCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlottypeCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlottypeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
