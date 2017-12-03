import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { Message } from '../_models/index';

@Injectable()
export class MessageService {
    //TODO modifier fakeBackend pour faire fonctionner ces methodes
    constructor(private http: Http) { }

    getAll() {
        return this.http.get('/api/messages', this.jwt()).map((response: Response) => response.json());
    }

    getMessagesByUserId () {
      return this.http.get('/api/messages/', this.jwt()).map((response: Response) => response.json());
    }//ne fonctionne pas!

    create(message: Message) {
        return this.http.post('/api/messages', message, this.jwt()).map((response: Response) => response.json());
    }

    update(message: Message) {
        return this.http.put('/api/messages/' + message.id, message, this.jwt()).map((response: Response) => response.json());
    }

    delete(id: number) {
        return this.http.delete('/api/messages/' + id, this.jwt()).map((response: Response) => response.json());
    }

    // private helper methods
    private jwt() {
        // create authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
            return new RequestOptions({ headers: headers });
        }
    }
}
