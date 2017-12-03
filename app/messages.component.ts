import { Component } from '@angular/core';

import { User } from './_models/index';
import { UserService } from './_services/index';

// LM: import Contracts
import { Message } from './_models/index';
import { MessageService } from './_services/index';
import { Router} from '@angular/router';

@Component({
    moduleId: module.id,
    selector:'messages',
       styles:[`
         #tableCustomers {
            font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
            border-collapse: collapse;
	     position: relative;
   	    top: 30px;
            width: 100%;
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
            <h1 id="mainTitle">Messages</h1>
            <div><a class="headerButton" [routerLink]="['/newmessage']">+ New</a></div>
    </div>

 
    			<ul>
	  <table id="tableCustomers">
				<th> </th>
				<th> From</th>
				<th>Send to</th>
				<th>Message</th>
				
			
                	<tr *ngFor="let message of messages">
			<td *ngIf="message.forId==currentUser.username || message.fromId==currentUser.username"> {{message.id}} </td>
			<td *ngIf="message.fromId==currentUser.username || message.forId==currentUser.username ">  {{message.fromId}} </td>
			<td *ngIf="message.forId==currentUser.username || message.fromId==currentUser.username">   {{message.forId}} </td>
			<td *ngIf="message.forId==currentUser.username || message.fromId==currentUser.username"> {{message.body}} </td>
		
                     <td *ngIf="message.forId==currentUser.username || message.fromId==currentUser.username"> 
                      <a (click)="deleteMessage(message.id)">Delete</a>  </td>	
			</tr>
		
           
		
       
</table> </ul>

  `
  
})

export class MessagesComponent {
    currentUser: User;
    //users: User[] = [];

    messages: Message[] = [];

    constructor(private messageService: MessageService, private router :Router) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.loadAllMessages();
        //console.log("clause length"+this.contracts.length);
    }

    ngOnInit() {
        this.loadAllMessages();
    }

    deleteMessage(id: number) {
       this.messageService.delete(id).subscribe(() => { this.loadAllMessages() });
   }


    private loadAllMessages() {
        this.messageService.getAll().subscribe(messages => { this.messages = messages; });
    }

}
