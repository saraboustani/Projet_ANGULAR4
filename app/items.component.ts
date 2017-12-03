import { Component } from '@angular/core';

import { User } from './_models/index';
import { UserService } from './_services/index';

// LM: import items
import { Item } from './_models/index';
import { ItemService } from './_services/index';
import { Router} from '@angular/router';

@Component({
    moduleId: module.id,
    selector:'items',
    styles:[`
         #tableCustomers {
            font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
            border-collapse: collapse;
            width: 100%;
	    position: relative;
   	    top: 30px;
        }

        #tableCustomers td, #customers th {
            border: 1px solid #ddd;
            padding: 8px;
        }

        #tableCustomers tr:nth-child(even){background-color: #f2f2f2;}

        #tableCustomers tr:hover {background-color: #ddd;}

        #tableCustomers th {
            padding-top: 12px;
            padding-bottom: 12px;
            padding-left: 8px;
            background-color: #4CAF50;
            color: white;
        }
    `],
    template: `
    <div class="header">
            <h1 id="mainTitle">Item</h1>
            <div><a class="headerButton" [routerLink]="['/add']">+ Add</a></div>
    </div>
   
        <h1>Items of {{currentUser.firstName}}!</h1>
        <!-- <h2>Items of !</h2>
        <h3>All registered items:</h3> -->
	 <p><a [routerLink]="['/login']">Logout</a></p>
        <ul>
            <!-- better to show items without the userId, but for the moment its still like that -->
            <table id="tableCustomers">
                <th>  Item</th>
                <th>ID</th>
                <tr *ngFor="let item of items" [routerLink]="['/item-details',item.id]">
                    <td *ngIf="item.userId==currentUser.id">{{item.title}}</td>
                    <td *ngIf="item.userId==currentUser.id">{{item.id}}</td>
                </tr>
            </table>

        </ul>
       
    
  `
  
})

export class ItemsComponent {
    currentUser: User;
    //users: User[] = [];

    items: Item[] = [];

    constructor(private itemService: ItemService, private router :Router) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
        this.loadAllItems();
    }

    deleteItem(id: number) {
        this.itemService.delete(id).subscribe(() => { this.loadAllItems() });
    }


    private loadAllItems() {
        this.itemService.getAll().subscribe(items => { this.items = items; });
    }

    private loadUsersItems() {
      this.itemService.getItemsByUserId().subscribe(items => { this.items = items; });
    }

}
