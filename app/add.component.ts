import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService, ItemService } from './_services/index';

import { User } from './_models/index';


@Component({
moduleId: module.id,
selector: 'add',
template: `
<div class="header">
            <h1 id="mainTitle">Add Item</h1>
            <div><a class="headerButton" [routerLink]="['/items']">\< Back</a></div>
    </div>

<div class="col-md-6 col-md-offset-3">
    <h2>Add a new item</h2>
    <form name="form" (ngSubmit)="f.form.valid && addItem()" #f="ngForm" novalidate>
        <div class="form-group" [ngClass]="{ 'has-error': f.submitted && !title.valid }">
            <label for="title">Title</label>
            <input type="text" class="form-control" name="title" [(ngModel)]="model.title" #title="ngModel" required />
            <div *ngIf="f.submitted && !title.valid" class="help-block">Title is required</div>
        </div>
        <div class="form-group" [ngClass]="{ 'has-error': f.submitted && !description.valid }">
            <label for="description">Description</label>
            <input type="text" class="form-control" name="description" [(ngModel)]="model.description" #description="ngModel" required />
            <div *ngIf="f.submitted && !description.valid" class="help-block">Description is required</div>
        </div>

        <label for="picture">Picture</label>
        <input type="file" id="selectFile" class="btn btn-success" (change)="openFile($event)"/>

        <div class="form-group" style="padding-top:20px">
            <button [disabled]="loading" class="btn btn-primary">Submit</button>
            <img *ngIf="loading" src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
            <a [routerLink]="['/items']" class="btn btn-link">Cancel</a>
        </div>
    </form>
</div>
`,

})

export class AddComponent {
    currentUser: User;

    model: any = {};
    pathFile:string=null;
    url:string;
    //user: currentUser;

		loading = false;

	constructor(
        private router: Router,
        private itemService: ItemService,
        private alertService: AlertService) {

        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    addItem() {
        this.loading = true;
        this.model.url=this.url;
        this.itemService.create(this.model)
            .subscribe(
                data => {
                    this.alertService.success('Adding successful', true);
                    this.router.navigate(['/items']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }

    openFile(event:any) {

        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();

            reader.onload = (event:any) => {
              this.url = event.target.result;
            }
            console.log(this.url);
            reader.readAsDataURL(event.target.files[0]);
        }
    }
    
}

