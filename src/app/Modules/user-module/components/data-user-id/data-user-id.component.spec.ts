import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataUserIdComponent } from './data-user-id.component';

describe('DataUserIdComponent', () => {
  let component: DataUserIdComponent;
  let fixture: ComponentFixture<DataUserIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DataUserIdComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DataUserIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
