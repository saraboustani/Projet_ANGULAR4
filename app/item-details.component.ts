import { Component } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { ItemService, AlertService } from './_services/index';
import { Item } from './_models/index';
@Component({
  
  selector: 'my-app',
  template: `
	<div class="header">
            <h1 id="mainTitle">Item Details</h1>
            <div><a class="headerButton" [routerLink]="['/items']">\< Back to Items</a></div>
	</div>
	
    <div class="col-md-6 col-md-offset-3">
        <div *ngFor="let item of items">
            <h2 *ngIf="item.id==getItemId()">
                {{item.title}}
            </h2>

            <ul *ngIf="item.id==getItemId()">
                {{item.description}}
            </ul>
            <div *ngIf="item.id==getItemId()">
                <img src={{item.url}} width="500px"/>
            </div>
        </div>
        <button style="margin-top:30px;" (click)="delete()" [disabled]="loading" class="btn btn-primary">Delete</button>
    </div>
	`
})

export class ItemDetailsComponent  {
	private items : Item[];
    private loading=false;
	//private item : Item;
	constructor(private router: Router,private route: ActivatedRoute, private itemService : ItemService, private alertService: AlertService){
		itemService.getAll().subscribe(items => { this.items = items; }); //TODO (!) code sale!!recuperer le bon item avec itemservice.getById(id)
	}

	getItemId(){
		return this.route.snapshot.params["itemID"];
	}

    delete(){
        this.itemService.delete(this.getItemId())
            .subscribe(
                data => {

                    this.alertService.success('Delete successful', true);
                    this.router.navigate(['/items']);
                },
                error => {
 
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
}
