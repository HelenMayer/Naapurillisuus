import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientMyAccountComponent } from './client-my-account.component';

describe('ClientMyAccountComponent', () => {
  let component: ClientMyAccountComponent;
  let fixture: ComponentFixture<ClientMyAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientMyAccountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientMyAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
