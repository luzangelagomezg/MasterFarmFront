import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HarvestrecordListComponent } from './harvestrecord-list.component';

describe('HarvestrecordListComponent', () => {
  let component: HarvestrecordListComponent;
  let fixture: ComponentFixture<HarvestrecordListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HarvestrecordListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HarvestrecordListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
