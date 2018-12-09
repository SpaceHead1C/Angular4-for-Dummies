import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RandomUsers } from './user/user.interface';

/* Can not inject any items without decorator
 * and for this service used @Injectable
 */
@Injectable()
export class UsersService {
    constructor(private http: HttpClient) {} // for AJAX

    getUsers() {
        return this.http.get<RandomUsers>('https://randomuser.me/api/?inc=gender,name,picture,location&results=8&nat=gb')
    }
}