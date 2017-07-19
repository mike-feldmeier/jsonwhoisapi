# jsonwhoisapi

A small (as in tiny) client for Node.js to retrieve domain information from the jsonWHOISapi service at [jsonwhoisapi.com](https://jsonwhoisapi.com).

Usage
-----

Usage is pretty basic:

    const whois = require('jsonwhoisapi').auth('customer-id', 'api-key');
    whois.lookup('google.com', (body => console.dir(body)));

which will yield the result described at [jsonwhoisapi.com/docs](https://jsonwhoisapi.com/docs)

That's it.  Tiny docs for a tiny library.
