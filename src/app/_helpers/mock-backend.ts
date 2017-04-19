import { Http, BaseRequestOptions, Response, ResponseOptions, RequestMethod } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

export let fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: Http,
    useFactory: (backend: MockBackend, options: BaseRequestOptions) => {
        // array in local storage for recipes
        let recipes: any[] = JSON.parse(localStorage.getItem('recipes')) || [];

        // configure fake backend
        backend.connection.subscribe((connection: MockConnection) => {
          // wrapping in timeout to simulate server API call
          setTimeout(() => {

            //authentication
            if (connection.request.url.endsWith('/api/authentication') &&)
          })
        })
