jsonwhoisapi
============

A small, as in tiny, client for Node.js to retrieve domain information from the jsonWHOISapi service

Usage
-----

Usage is pretty basic:

    const whois = require('jsonwhoisapi').auth('customer-id', 'api-key');
    whois.lookup('google.com', (body => console.dir(body)));

which will yield the result described at (https://jsonwhoisapi.com/docs/)
