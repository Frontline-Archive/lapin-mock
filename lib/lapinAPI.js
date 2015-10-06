'use strict';

var events  = require( 'events' );
var Promise = require( 'bluebird' );

function getEmitter() {
	var emitter = new events.EventEmitter();
	process.nextTick( function ( ) {
		emitter.emit( 'ready', 'ready' );
	} );
	return emitter;
}

function getPromise () {
	return new Promise( function ( resolve, reject ) {
		resolve( getEmitter );
	} );
}

var rabbitAPI = {
	'request'   : getEmitter,
	'respond'   : getEmitter,
	'publish'   : getEmitter,
	'subscribe' : getEmitter,
	'send'      : getEmitter,
	'receive'   : getEmitter,

	// promises
	'requestPromise' : getPromise,
	'sendPromise'    : getPromise
};

module.exports = function () {
	return rabbitAPI;
};
