import {  ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
      ],
      imports: [
        RouterTestingModule,
      ],
      providers: [
      ]     
    }).compileComponents();
  });

  beforeEach(async () => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  })

  it('should create the home component', () => {
    expect(component).toBeTruthy();
  });
  it('should check the address format', waitForAsync(() => {
    const testUserData ={
      firstName: 'Rodney',
      lastName: 'trotter',
      address: {
        line1: 'Nelson Mandela House',
        line2: '',
        line3: '',
        city: 'Peckham',
        county: 'London',
        postcode: 'SE15'
      }
    };
    component.ngOnInit();

    

    expect(component.userData).toEqual(testUserData);
}));
});
