import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { Item } from '../_models/index';
import { User } from '../_models/index';

@Injectable()
export class ItemService {
    constructor(private http: Http) { }

    getAll() {
        return this.http.get('/api/items', this.jwt()).map((response: Response) => response.json());
    }

    getById(id: number) {
        return this.http.get('/api/items/' + id, this.jwt()).map((response: Response) => response.json());
    }

    create(item: Item) {
        return this.http.post('/api/items', item, this.jwt()).map((response: Response) => response.json());
    }

    update(item: Item) {
        return this.http.put('/api/items/' + item.id, item, this.jwt()).map((response: Response) => response.json());
    }

    delete(id: number) {
        return this.http.delete('/api/items/' + id, this.jwt()).map((response: Response) => response.json());
    }

    getItemsByUserId () {
      return this.http.get('/api/items/', this.jwt()).map((response: Response) => response.json());
    }//ne fonctionne pas!

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
