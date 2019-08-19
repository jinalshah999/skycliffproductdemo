import { AbstractControl, AsyncValidatorFn } from "@angular/forms";
import { map } from 'rxjs/operators';
import { Observable } from "rxjs";
import { UserdataService } from './userdata.service';
import { User } from './user';
export class CheckEmail {
  static emailcheck(x:UserdataService): AsyncValidatorFn {

    return (c: AbstractControl): Observable<{ [s: string]: boolean } | null> => {
      return x.getUserByEmail(c.value).pipe(
        map((res: User[]) => {
          console.log(res);
          if (res.length != 0) {
            return {'invalidEmail': true };
          }
        })
      );
    }
  }
}
