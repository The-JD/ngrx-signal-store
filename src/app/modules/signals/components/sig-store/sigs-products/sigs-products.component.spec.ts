import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigsProductsComponent } from './sigs-products.component';

describe('SigsProductsComponent', () => {
  let component: SigsProductsComponent;
  let fixture: ComponentFixture<SigsProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SigsProductsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SigsProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
