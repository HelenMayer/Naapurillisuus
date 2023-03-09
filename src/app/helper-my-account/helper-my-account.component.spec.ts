import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelperMyAccountComponent } from './helper-my-account.component';

describe('HelperMyAccountComponent', () => {
  let component: HelperMyAccountComponent;
  let fixture: ComponentFixture<HelperMyAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelperMyAccountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelperMyAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
