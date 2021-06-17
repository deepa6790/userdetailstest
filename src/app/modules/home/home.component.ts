import {Component, OnInit} from '@angular/core';
import { UserDataService } from '../../services/user-data.service';
import {  mergeMap, takeUntil, tap } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { IUserData } from '../../interfaces/user-data.interface';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  destroy$: Subject<boolean> = new Subject<boolean>();
  userData : IUserData  | null;
  isLoading: boolean;

  userForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormGroup({
      line1: new FormControl(''),
      line2: new FormControl(''),
      line3: new FormControl(''),
      city: new FormControl(''),
       county: new FormControl(''),
      postcode: new FormControl(''),
  })
    
  });

  constructor(private userDataService: UserDataService
  ) {
  }

  ngOnInit(): void {
    this.isLoading = true;
    
    
    this.userDataService.getCurrentUser().pipe(
      takeUntil(this.destroy$),
      tap(user => user),
      mergeMap(user => this.userDataService.getUserData(user.id))
    ) 
    .subscribe(userData => {
        this.userData = userData;
      
       this.userForm.setValue({
        firstName: this.userData?.firstName,
        lastName: this.userData?.lastName,
        address:{
          line1: this.userData?.address?.line1,
          line2: this.userData?.address?.line2,
          line3: this.userData?.address?.line3,
          city: this.userData?.address?.city,
          county: this.userData?.address?.county,
          postcode: this.userData?.address?.postcode
        }
      })
      this.isLoading = false;
    },
      error => console.log(error)
      );
    
    
  
  }
  onSubmit(): void {
    this.userData = this.userForm.value;
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
