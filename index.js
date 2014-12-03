#!/usr/bin/env node

var open = require('open');
var req = require('superagent');
var arg = require('minimist')(process.argv.slice(2));
var url = 'https://developer.mozilla.org/en-US/search.json';
var o = arg._[0] == 'open' ? arg._.shift() : false;

var request = url +
    '?q=' + encodeURIComponent(arg._.join(' ')) +
    '&page=' + encodeURIComponent(arg.p || arg.page || 1) +
    '&per_page=' + encodeURIComponent(arg.l || arg.limit || o ? 1 : 5);

if (arg.t || arg.topic) request += '&topic=' + encodeURIComponent(arg.t || arg.topic);

req.get(request).end(function(err, res){
    if (!err && res.body.documents) {
        if (o) open(res.body.documents[0].url);
        else console.log('\n' + res.body.documents.map(function(doc){
            return doc.title + '\n' + doc.url;
        }).join('\n\n') + '\n');
    }
});