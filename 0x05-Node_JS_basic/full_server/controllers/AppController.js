#!/usr/bin/node

// App controller

export default class AppController {
    static getHomepage(request, response) {
        response.status(200);
        response.send('Hello Holberton School!');
    }
}