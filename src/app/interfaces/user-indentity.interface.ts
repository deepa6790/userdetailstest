import {UserType} from '../enums/user-type.enum';

export interface IUserIdentity {
  id: string;
  type: UserType;
}
