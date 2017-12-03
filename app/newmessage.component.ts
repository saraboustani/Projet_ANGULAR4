import { Component } from '@angular/core';

import { User } from './_models/index';
import { UserService } from './_services/index';
import { AlertService, ItemService } from './_services/index';

// LM: import Contracts
import { Message } from './_models/index';
import { MessageService } from './_services/index';
import { Router} from '@angular/router';


@Component({
moduleId: module.id,
selector: 'newmessage',
template: `
<div class="header">
            <h1 id="mainTitle">Send a Message</h1>
            <div><a class="headerButton" [routerLink]="['/messages']">\< Back</a></div>
    </div>

<div class="col-md-6 col-md-offset-3">
    <h2>write a new message</h2>
    <form name="form" (ngSubmit)="f.form.valid && send()" #f="ngForm" novalidate>
     
	   <div class="form-group" [ngClass]="{ 'has-error': f.submitted && !fromId.valid }">
            <label for="fromId"> your username </label>
            <input type="text" class="form-control" name="fromId" [(ngModel)]="model.fromId" #fromId="ngModel" required />
            <div *ngIf="f.submitted && !fromId.valid" class="help-block">your username is required</div>
        </div>



	   <div class="form-group" [ngClass]="{ 'has-error': f.submitted && !forId.valid }">
            <label for="forId"> To :  </label>
            <input type="text" class="form-control" name="fromId" [(ngModel)]="model.forId" #forId="ngModel" required />
            <div *ngIf="f.submitted && !forId.valid" class="help-block"> To is required</div>
        </div>




        <div class="form-group" [ngClass]="{ 'has-error': f.submitted && !body.valid }">
            <label for="body">Your Message</label>
            <input type="text" class="form-control" name="body" [(ngModel)]="model.body" #body="ngModel" required />
            <div *ngIf="f.submitted && !body.valid" class="help-block">Message is required</div>
        </div>


       

        <div class="form-group" style="padding-top:20px">
            <button [disabled]="loading" class="btn btn-primary">Submit</button>
            <img *ngIf="loading" src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
            <a [routerLink]="['/messages']" class="btn btn-link">Cancel</a>
        </div>
    </form>
</div>
`,

})

export class NewMessageComponent {
    currentUser: User;

    model: any = {};
    pathFile:string=null;
    //user: currentUser;

	loading = false;

	constructor(
        private router: Router,
       private messageService: MessageService,
        private alertService: AlertService ,
	 private itemService: ItemService)
	{

        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    	}

    send() {
        this.loading = true;
        this.messageService.create(this.model)
            .subscribe(
                data => {
                    this.alertService.success('Adding successful', true);
                    this.router.navigate(['/messages']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
    openFile() {}
}

