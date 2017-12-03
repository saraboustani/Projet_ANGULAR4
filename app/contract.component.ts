import { Component } from '@angular/core';

import { User } from './_models/index';
import { UserService } from './_services/index';

// LM: import Contracts
import { Contract } from './_models/index';
import { ContractService } from './_services/index';
import { Router} from '@angular/router';

@Component({
    moduleId: module.id,
    selector:'contracts',
    template: `
    <div class="header">
            <h1 id="mainTitle">Contracts</h1>
            <div><a class="headerButton" [routerLink]="['/new-contract']">+ Add</a></div>
    </div>

    <div style="margin-top:30px;" *ngFor="let contract of contracts">
	<table>
        <tr *ngFor="let clause of contract.clauses">
		<div *ngIf="clause.forId==currentUser.id || clause.fromId==currentUser.id"> 
            {{clause.fromUsername}} gives {{clause.itemName}} to {{clause.forUsername}} </div>
        </tr>
	</table>
    </div>

  `
  
})

export class ContractsComponent {
    currentUser: User;
    //users: User[] = [];

    contracts: Contract[] = [];

    constructor(private contractService: ContractService, private router :Router) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.loadUserContracts();
        //console.log("clause length"+this.contracts.length);
    }

    ngOnInit() {
        this.loadAllContracts();
    }

    deleteContract(id: number) {
        this.contractService.delete(id).subscribe(() => { this.loadAllContracts() });
    }


    private loadAllContracts() {
        this.contractService.getAll().subscribe(contracts => { this.contracts = contracts; });
    }

    private isUserContract(contract: Contract){
        let response=false;
        contract.clauses.map(clause=>{if(clause.forId==this.currentUser.id || clause.fromId==this.currentUser.id) response=true; });
        console.log("isUserContract:"+response);
        return response;
    }
    private loadUserContracts() {
      this.contractService.getAll().subscribe(contracts => { this.contracts = contracts; });
      this.contracts=this.contracts.filter(contract=>(this.isUserContract(contract)))
    }//TODO charge tous les contracts mais ne doit charger que les contracts du currentUser


}
