'use strict';

require( 'should' );

const EventEmitter = require( 'events' ).EventEmitter;
const Promise      = require( 'bluebird' );
const rabbitAPI    = require( '../lib/lapinAPI' )();

describe( 'lapinAPI', function () {
	it( 'should have request property', function () {
		rabbitAPI.should.have.property( 'request' ).and.be.instanceOf( Function );
		rabbitAPI.request().should.be.an.instanceOf( EventEmitter );
	} );

	it( 'should have respond property', function () {
		rabbitAPI.should.have.property( 'respond' ).and.be.instanceOf( Function );
		rabbitAPI.respond().should.be.an.instanceOf( EventEmitter );
	} );

	it( 'should have send property', function () {
		rabbitAPI.should.have.property( 'send' ).and.be.instanceOf( Function );
		rabbitAPI.send().should.be.an.instanceOf( EventEmitter );
	} );

	it( 'should have receive property', function () {
		rabbitAPI.should.have.property( 'receive' ).and.be.instanceOf( Function );
		rabbitAPI.receive().should.be.an.instanceOf( EventEmitter );
	} );

	it( 'should have publish property', function () {
		rabbitAPI.should.have.property( 'publish' ).and.be.instanceOf( Function );
		rabbitAPI.publish().should.be.an.instanceOf( EventEmitter );
	} );

	it( 'should have subscribe property', function () {
		rabbitAPI.should.have.property( 'subscribe' ).and.be.instanceOf( Function );
		rabbitAPI.subscribe().should.be.an.instanceOf( EventEmitter );
	} );

	it( 'should have requestPromise property', function () {
		rabbitAPI.should.have.property( 'requestPromise' ).and.be.instanceOf( Function );
		rabbitAPI.requestPromise().should.be.an.instanceOf( Promise );
	} );

	it( 'should have sendPromise property', function () {
		rabbitAPI.should.have.property( 'sendPromise' ).and.be.instanceOf( Function );
		rabbitAPI.sendPromise().should.be.an.instanceOf( Promise );
	} );
} );
