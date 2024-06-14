import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigsCartComponent } from './sigs-cart.component';

describe('SigsCartComponent', () => {
  let component: SigsCartComponent;
  let fixture: ComponentFixture<SigsCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SigsCartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SigsCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
