import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HarvestrecordCreateComponent } from './harvestrecord-create.component';

describe('HarvestrecordCreateComponent', () => {
  let component: HarvestrecordCreateComponent;
  let fixture: ComponentFixture<HarvestrecordCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HarvestrecordCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HarvestrecordCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
