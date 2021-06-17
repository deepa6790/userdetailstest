import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {delay} from 'rxjs/operators';
import {IUserData} from '../interfaces/user-data.interface';
import {IUserIdentity} from '../interfaces/user-indentity.interface';
import {UserType} from '../enums/user-type.enum';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {

  public getCurrentUser(): Observable<IUserIdentity> {
    return of({
      id: '38a0983f-8e1c-41bd-915c-905f9279c41d',
      type: UserType.Admin
    })
      .pipe(
        delay(1000)
      );
  }

  public getUserData(userId: string): Observable<IUserData | null> {
    if (!userId) {
      return of(null).pipe(
        delay(2000)
      );
    }

    return of({
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
    }).pipe(
      delay(2000)
    );
  }
}
