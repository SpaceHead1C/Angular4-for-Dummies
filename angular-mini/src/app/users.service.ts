import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RandomUsers } from './user/user.interface';

/* Can not inject any items without decorator
 * and for this service used @Injectable
 */
@Injectable()
export class UsersService {
    size = 8;

    constructor(private http: HttpClient) {} // for AJAX

    getUsers() {
        return this.http.get<RandomUsers>(`https://randomuser.me/api/?inc=gender,name,picture,location&results=${this.size}&nat=gb`)
    }

    setSize(size) {
        this.size = size;
    }
}