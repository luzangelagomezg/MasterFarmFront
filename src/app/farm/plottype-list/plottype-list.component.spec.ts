import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlottypeListComponent } from './plottype-list.component';

describe('PlottypeListComponent', () => {
  let component: PlottypeListComponent;
  let fixture: ComponentFixture<PlottypeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlottypeListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlottypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
