import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginvalComponent } from './loginval.component';

describe('LoginvalComponent', () => {
  let component: LoginvalComponent;
  let fixture: ComponentFixture<LoginvalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginvalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginvalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
