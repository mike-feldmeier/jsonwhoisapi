'use strict'

const unirest = require('unirest');

let jsonwhoisapi = {
  auth: (customerid, apikey) => {
    this.customerid = customerid;
    this.apikey = apikey;
    return module.exports;
  },

  lookup: (hostname, done) => {
    unirest.get('http://jsonwhoisapi.com/api/v1/whois?identifier=' + hostname)
      .auth(this.customerid, this.apikey, true)
      .end(response => {
        done(response.body);
      });
  }
};

module.exports = jsonwhoisapi;
