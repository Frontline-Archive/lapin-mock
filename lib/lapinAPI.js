'use strict';

const events  = require( 'events' );
const Promise = require( 'bluebird' );

function getEmitter () {
	const emitter = new events.EventEmitter();

	process.nextTick( function ( ) {
		emitter.emit( 'ready', 'ready' );
	} );
	return emitter;
}

function getPromise () {
	return new Promise( function ( resolve ) {
		resolve( getEmitter );
	} );
}

const rabbitAPI = {
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
