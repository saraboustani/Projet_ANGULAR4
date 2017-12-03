import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { Contract } from '../_models/index';

@Injectable()
export class ContractService {
    constructor(private http: Http) { }

    getAll() {
        return this.http.get('/api/contracts', this.jwt()).map((response: Response) => response.json());
    }

    getContractsByUserId () {
      return this.http.get('/api/contracts/', this.jwt()).map((response: Response) => response.json());
    }//ne fonctionne pas!

    create(contract: Contract) {
        return this.http.post('/api/contracts', contract, this.jwt()).map((response: Response) => response.json());
    }

    update(contract: Contract) {
        return this.http.put('/api/contracts/' + contract.id, contract, this.jwt()).map((response: Response) => response.json());
    }

    delete(id: number) {
        return this.http.delete('/api/contracts/' + id, this.jwt()).map((response: Response) => response.json());
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