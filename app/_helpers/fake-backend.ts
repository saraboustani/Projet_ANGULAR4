import { Http, BaseRequestOptions, Response, ResponseOptions, RequestMethod } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

import { User } from '../_models/index';

export let fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: Http,
    useFactory: (backend: MockBackend, options: BaseRequestOptions) => {
        // array in local storage for registered users
        let users: any[] = JSON.parse(localStorage.getItem('users')) || [];
        // array in local storage for saved items
        let items: any[] = JSON.parse(localStorage.getItem('items')) || [];

        let contracts: any[] = JSON.parse(localStorage.getItem('contracts')) || [];

	
	  let messages: any[] = JSON.parse(localStorage.getItem('messages')) || [];

        //store curent user
        //let currentUser = JSON.parse(localStorage.getItem('currentUser'));

        // configure fake backend
        backend.connections.subscribe((connection: MockConnection) => {
            // wrap in timeout to simulate server api call
            console.log("call");
            setTimeout(() => {

                // authenticate
                if (connection.request.url.endsWith('/api/authenticate') && connection.request.method === RequestMethod.Post) {
                    // get parameters from post request
                    let params = JSON.parse(connection.request.getBody());

                    // find if any user matches login credentials
                    let filteredUsers = users.filter(user => {
                        return user.username === params.username && user.password === params.password;
                    });

                    if (filteredUsers.length) {
                        // if login details are valid return 200 OK with user details and fake jwt token
                        let user = filteredUsers[0];

                        connection.mockRespond(new Response(new ResponseOptions({
                            status: 200,
                            body: {
                                id: user.id,
                                username: user.username,
                                firstName: user.firstName,
                                lastName: user.lastName,
                                token: 'fake-jwt-token'
                            }
                        })));
                    } else {
                        // else return 400 bad request
                        connection.mockError(new Error('Username or password is incorrect'));
                    }
                }

                // get users
                if (connection.request.url.endsWith('/api/users') && connection.request.method === RequestMethod.Get) {
                    // check for fake auth token in header and return users if valid, this security is implemented server side in a real application
                    if (connection.request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                        connection.mockRespond(new Response(new ResponseOptions({ status: 200, body: users })));

                    }
                    else {
                        // return 401 not authorised if token is null or invalid
                        connection.mockRespond(new Response(new ResponseOptions({ status: 401 })));
                    }
              }

                // get items
                if (connection.request.url.endsWith('/api/items') && connection.request.method === RequestMethod.Get) {
                    // check for fake auth token in header and return users if valid, this security is implemented server side in a real application
                    if (connection.request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
                        connection.mockRespond(new Response(new ResponseOptions({ status: 200, body: items })));

                    } else {
                        // return 401 not authorised if token is null or invalid
                        connection.mockRespond(new Response(new ResponseOptions({ status: 401 })));
                    }
                }

                // get user by id
                if (connection.request.url.match(/\/api\/users\/\d+$/) && connection.request.method === RequestMethod.Get) {
                    // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
                    if (connection.request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                        // find user by id in users array
                        let urlParts = connection.request.url.split('/');
                        let id = parseInt(urlParts[urlParts.length - 1]);
                        let matchedUsers = users.filter(user => { return user.id === id; });
                        let user = matchedUsers.length ? matchedUsers[0] : null;

                        // respond 200 OK with user
                        connection.mockRespond(new Response(new ResponseOptions({ status: 200, body: user })));
                    } else {
                        // return 401 not authorised if token is null or invalid
                        connection.mockRespond(new Response(new ResponseOptions({ status: 401 })));
                    }
                }

                // get item by id
                if (connection.request.url.match(/\/api\/items\/\d+$/) && connection.request.method === RequestMethod.Get) {
                    // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
                    if (connection.request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                        // find items by id in items array
                        let urlPartsItems = connection.request.url.split('/');
                        let id = parseInt(urlPartsItems[urlPartsItems.length - 1]);
                        let matchedItems = items.filter(item => { return item.id === id; });
                        let item = matchedItems.length ? matchedItems[0] : null;

                        // respond 200 OK with item
                        connection.mockRespond(new Response(new ResponseOptions({ status: 200, body: item })));
                    } else {
                        // return 401 not authorised if token is null or invalid
                        connection.mockRespond(new Response(new ResponseOptions({ status: 401 })));
                    }
                }




          // create messages
                if (connection.request.url.endsWith('/api/messages') && connection.request.method === RequestMethod.Post) 
		{
                    // get new user object from post body
                    console.log("fakebackend-create-message");
                    let newMessage = JSON.parse(connection.request.getBody());
                    // get currentUser
                    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
                    /*// validation
                    let duplicateItems = items.filter(item => { return item.title === newItem.title; }).length;
                    if (duplicateItem) 
			{
                        return connection.mockError(new Error('Itemname "' + newItem.title + '" is already taken'));
                    }*/

                    // save new message
                    newMessage.id = messages.length + 1;
                    messages.push(newMessage);
                    localStorage.setItem('messages', JSON.stringify(messages));

                    // respond 200 OK
                    connection.mockRespond(new Response(new ResponseOptions({ status: 200 })));
                }

                //get messages
                if (connection.request.url.match('/api/messages') && connection.request.method === RequestMethod.Get) 
		{
                    if (connection.request.headers.get('Authorization') === 'Bearer fake-jwt-token') 
			{
                       
                        console.log("length message:"+messages.length);
                        console.log(JSON.stringify(messages));
                        connection.mockRespond(new Response(new ResponseOptions({ status: 200, body: messages })));
                   	 }
			 else 
			{
                        connection.mockRespond(new Response(new ResponseOptions({ status: 401 })));
                  	  }
               		 }


		 // delete MESSAGES
                if (connection.request.url.match(/\/api\/messages\/\d+$/) && connection.request.method === RequestMethod.Delete) {
                    // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
                    if (connection.request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                        // find user by id in users array
                        let urlPartMessage = connection.request.url.split('/');
                        let id = parseInt(urlPartMessage[urlPartMessage.length - 1]);
                        for (let i = 0; i < messages.length; i++) {
                            let message = messages[i];
                            if (message.id === id) {
                                // delete message
                                messages.splice(i, 1);
                                localStorage.setItem('messages', JSON.stringify(messages));
                                break;
                            }
                        }

                        // respond 200 OK
                        connection.mockRespond(new Response(new ResponseOptions({ status: 200 })));
                    } else {
                        // return 401 not authorised if token is null or invalid
                        connection.mockRespond(new Response(new ResponseOptions({ status: 401 })));
                    }
                }



                // create user
                if (connection.request.url.endsWith('/api/users') && connection.request.method === RequestMethod.Post) {
                    // get new user object from post body
                    let newUser = JSON.parse(connection.request.getBody());

                    // validation
                    let duplicateUser = users.filter(user => { return user.username === newUser.username; }).length;
                    if (duplicateUser) {
                        return connection.mockError(new Error('Username "' + newUser.username + '" is already taken'));
                    }

                    // save new user
                    newUser.id = users.length + 1;
                    users.push(newUser);
                    localStorage.setItem('users', JSON.stringify(users));

                    // respond 200 OK
                    connection.mockRespond(new Response(new ResponseOptions({ status: 200 })));
                }

                //update user
                if (connection.request.url.match(/\/api\/users\/\d+$/) && connection.request.method === RequestMethod.Put) {
                        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
                        let modifiedUser = JSON.parse(connection.request.getBody());
                        let matchedUsers = users.filter(user => { return user.id === currentUser.id; });
                        if (matchedUsers.length ) {
                       
                            let matchedUser = matchedUsers[0];
                            matchedUser.password=modifiedUser.password;
                            console.log("matchedUserPwd:"+matchedUser.password+" "+modifiedUser.password);
                            users=users.map(function(user) { return user.id == matchedUser.id ? matchedUser : user; });
                            localStorage.setItem('users', JSON.stringify(users));
                            //matchedUsers = users.filter(user => { return user.id === currentUser.id; });//a supprimer
                            connection.mockRespond(new Response(new ResponseOptions({ status: 200 })));
                        }
                        else { connection.mockRespond(new Response(new ResponseOptions({ status: 401 }))); }

                }
                // delete user
                if (connection.request.url.match(/\/api\/users\/\d+$/) && connection.request.method === RequestMethod.Delete) {
                    // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
                    if (connection.request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                        // find user by id in users array
                        let urlParts = connection.request.url.split('/');
                        let id = parseInt(urlParts[urlParts.length - 1]);
                        for (let i = 0; i < users.length; i++) {
                            let user = users[i];
                            if (user.id === id) {
                                // delete user
                                users.splice(i, 1);
                                localStorage.setItem('users', JSON.stringify(users));
                                break;
                            }
                        }

                        // respond 200 OK
                        connection.mockRespond(new Response(new ResponseOptions({ status: 200 })));
                    } else {
                        // return 401 not authorised if token is null or invalid
                        connection.mockRespond(new Response(new ResponseOptions({ status: 401 })));
                    }
                }



                // create item
                if (connection.request.url.endsWith('/api/items') && connection.request.method === RequestMethod.Post) {
                    // get new user object from post body
                    let newItem = JSON.parse(connection.request.getBody());
                    // get currentUser
                    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
                    /*// validation
                    let duplicateItems = items.filter(item => { return item.title === newItem.title; }).length;
                    if (duplicateItem) {
                        return connection.mockError(new Error('Itemname "' + newItem.title + '" is already taken'));
                    }*/

                    // save new item
                    newItem.id = items.length + 1;
                    newItem.userId = currentUser.id;
                    items.push(newItem);
                    localStorage.setItem('items', JSON.stringify(items));

                    // respond 200 OK
                    connection.mockRespond(new Response(new ResponseOptions({ status: 200 })));
                }

                // delete item
                if (connection.request.url.match(/\/api\/items\/\d+$/) && connection.request.method === RequestMethod.Delete) {
                    // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
                    if (connection.request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                        // find user by id in users array
                        let urlParts = connection.request.url.split('/');
                        let id = parseInt(urlParts[urlParts.length - 1]);
                        for (let i = 0; i < items.length; i++) {
                            let item = items[i];
                            if (item.id === id) {
                                // delete item
                                items.splice(i, 1);
                                localStorage.setItem('items', JSON.stringify(users));
                                break;
                            }
                        }

                        // respond 200 OK
                        connection.mockRespond(new Response(new ResponseOptions({ status: 200 })));
                    } else {
                        // return 401 not authorised if token is null or invalid
                        connection.mockRespond(new Response(new ResponseOptions({ status: 401 })));
                    }
                }

                // create contract
                if (connection.request.url.endsWith('/api/contracts') && connection.request.method === RequestMethod.Post) {
                    // get new user object from post body
                    console.log("fakebackend-create-contract");
                    let newContract = JSON.parse(connection.request.getBody());
                    // get currentUser
                    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
                    /*// validation
                    let duplicateItems = items.filter(item => { return item.title === newItem.title; }).length;
                    if (duplicateItem) {
                        return connection.mockError(new Error('Itemname "' + newItem.title + '" is already taken'));
                    }*/

                    // save new item
                    newContract.id = contracts.length + 1;
                    //newContract.userId = currentUser.id;
                    contracts.push(newContract);
                    localStorage.setItem('contracts', JSON.stringify(contracts));

                    // respond 200 OK
                    connection.mockRespond(new Response(new ResponseOptions({ status: 200 })));
                }

                //get contract
                if (connection.request.url.match('/api/contracts') && connection.request.method === RequestMethod.Get) {
                    // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
                    if (connection.request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                        // find contracts by id in contracts array
                        //let urlPartsItems = connection.request.url.split('/');
                        //let id = parseInt(urlPartsItems[urlPartsItems.length - 1]);
                        //let matchedContracts = contracts.filter(contract => { return contract.id === id; });
                        //let contract = matchedContracts.length ? matchedContracts[0] : null;
                        console.log("length contract:"+contracts.length);
                        console.log(JSON.stringify(contracts));
                        // respond 200 OK with item
                        connection.mockRespond(new Response(new ResponseOptions({ status: 200, body: contracts })));
                    } else {
                        // return 401 not authorised if token is null or invalid
                        connection.mockRespond(new Response(new ResponseOptions({ status: 401 })));
                    }
                }

            }, 500);
        });

        return new Http(backend, options);
    },
    deps: [MockBackend, BaseRequestOptions]
};
