import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigsOrdersComponent } from './sigs-orders.component';

describe('SigsOrdersComponent', () => {
  let component: SigsOrdersComponent;
  let fixture: ComponentFixture<SigsOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SigsOrdersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SigsOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
