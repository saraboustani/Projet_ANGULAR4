import { Component } from '@angular/core';
import { User } from './_models/index';
import { Router} from '@angular/router';
import { AlertService, UserService } from './_services/index';


@Component({
moduleId: module.id,
selector: 'change-password',
template: `
	<div class="header">
    	        <h1 id="mainTitle">Settings</h1>
        	    <div><a class="headerButton" [routerLink]="['/settings']">\< Back</a></div>
	</div>

	<div class="col-md-6 col-md-offset-3">
    <h2>Change Password</h2>
	<form name="form" (ngSubmit)="f.form.valid && register()" #f="ngForm" novalidate>

        <div class="form-group" [ngClass]="{ 'has-error': f.submitted && !password.valid }">
                <label for="password">Actual password</label>
                <input type="password" class="form-control" name="password" [(ngModel)]="actualPassword" #password="ngModel" required />
                <div *ngIf="f.submitted && !password.valid" class="help-block">Actual password is required</div>
                
        </div>
		<div class="form-group" [ngClass]="{ 'has-error': f.submitted && !password.valid }">
    	        <label for="password">New password</label>
        	    <input type="password" class="form-control" name="password" [(ngModel)]="model.password" #password="ngModel" required />
            	<div *ngIf="f.submitted && !password.valid" class="help-block">New password is required</div>
	    </div>
    	<div class="form-group" [ngClass]="{ 'has-error': f.submitted && !password.valid }">
        	    <label for="password">Confirm password</label>
            	<input type="password" class="form-control" name="password" [(ngModel)]="confirmation" #password="ngModel" required />
	            <div *ngIf="f.submitted && !password.valid" class="help-block">Password confirmation is required</div>
                <div *ngIf="f.submitted && model.password!=confirmation" class="help-block">Password confirmation failed</div>
    	</div>

   	 	<div class="form-group">
    	        <button [disabled]="loading" class="btn btn-primary">Register</button>
        	    <img *ngIf="loading" src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
            	<a [routerLink]="['/settings']" class="btn btn-link">Cancel</a>
       	</div>
   	</form>
	</div>

	`
})
 
export class ChangePasswordComponent {
	model: any = {};
    loading = false;
	confirmation: string;
    actualPassword: string;
    currentUser: User;

	constructor(
        private router: Router,
        private userService: UserService,
        private alertService: AlertService) {

        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        console.log("password:"+this.currentUser.password+" "+"username:"+this.currentUser.username+" id:"+this.currentUser.id);
        this.model.id=this.currentUser.id;
        //this.model.firstName=this.currentUser.firstName;
        //this.model.lastName=this.currentUser.lastName;
        //this.model.username=this.currentUser.username;
    }
    register() {
        //console.log(this.model.id+" "+this.model.firstName+" "+this.model.lastName+" "+this.model.username+" "+this.model.password);
        this.loading = true;
        this.userService.update(this.model)
            .subscribe(
                data => {
                    this.alertService.success('Registration successful', true);
                    this.router.navigate(['/settings']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }//Ne fonctionne pas, à corriger
}