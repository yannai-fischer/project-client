import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyBusinessCardComponent } from './company-business-card.component';

describe('AddTutorialComponent', () => {
  let component: CompanyBusinessCardComponent;
  let fixture: ComponentFixture<CompanyBusinessCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyBusinessCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyBusinessCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
