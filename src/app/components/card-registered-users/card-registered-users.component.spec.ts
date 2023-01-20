import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardRegisteredUsersComponent } from './card-registered-users.component';

describe('CardRegisteredUsersComponent', () => {
  let component: CardRegisteredUsersComponent;
  let fixture: ComponentFixture<CardRegisteredUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardRegisteredUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardRegisteredUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
