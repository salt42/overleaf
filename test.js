'use strict';

var config      = require('./config'),
    async       = require('async'),
    MongoClient = require('mongodb').MongoClient;

// clean "auths" collection
function cleanAuthsCollection (db) {
  // ...
}

function cleanCollections (db, collName, collOpsName) {
  // ...
}

function cleanDeletedData (db) {
  // ...
}

function cleanDB (db) {
  cleanAuthsCollection(db);
  cleanDeletedData(db);
}

function init () {
  // Since sharejs doesn't completely remove objects from the DB for delete ops
  // rewind possibility, we force the deletion of those objects
  MongoClient.connect(config.mongo.url + '?auto_reconnect', { safe: true }, function(err, db) {
    if(err) { throw err; }

    cleanDB(db);
    setInterval(async.apply(cleanDB, db), config.app.dbCleanInterval);
  });
}

module.exports.init = init;
