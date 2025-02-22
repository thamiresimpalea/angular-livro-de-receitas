import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavoryComponent } from './savory.component';

describe('SavoryComponent', () => {
  let component: SavoryComponent;
  let fixture: ComponentFixture<SavoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SavoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SavoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
