const client = require('http');
const assert = require('assert');

client.get('http://localhost:8080/healthz', (res) => {
    assert.equal(res.statusCode, 200);
});