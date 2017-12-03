import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
    //Variable isLogged observé par appComponent et modifier par loginComponent via les methodes login() et logout()
    // https://angular.io/guide/component-interaction#parent-and-children-communicate-via-a-service
    isLogged = new Subject<boolean>();
    isLogged$ = this.isLogged.asObservable();

    constructor(private http: Http) { }

    login(username: string, password: string) {
        return this.http.post('/api/authenticate', JSON.stringify({ username: username, password: password }))
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let user = response.json();
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    this.isLogged.next(true);
                }
            });

    }

    logout() {
        this.isLogged.next(false);
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}
