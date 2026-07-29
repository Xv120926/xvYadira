import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortadaComponent } from './portada.component';

describe('Portada', () => {
  let component: PortadaComponent;
  let fixture: ComponentFixture<PortadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortadaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PortadaComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
