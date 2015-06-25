'use strict';

require( 'should' );

describe( 'SendMock object', function () {

	var SendMock;
	var instanceSendMock;

	var doneMock = function () {};

	beforeEach( function ( done ) {

		SendMock         = require( '../lib/sendMock' );
		instanceSendMock = new SendMock( doneMock );
		done();

	} );

	it( 'should be an instance of object', function () {
		instanceSendMock.should.be.instanceOf( Object );
	} );

	it( 'should have attributes', function () {

		var counter = 0;

		var properties = [
			'success',
			'error',
			'fail'
		];

		for( var propertyName in instanceSendMock ) {

			if ( !instanceSendMock.hasOwnProperty( propertyName ) ) {

				// List all properties
				propertyName.should.equal( properties[ counter ] );
				counter++;

			}

		}

	} );

	it( 'should have a response data', function () {
		instanceSendMock.success( 'Hello' );
		instanceSendMock.response.should.equal( 'Hello' );
	} );

	it( 'should have an errorMessage, errorObject and code', function () {

		var error = new Error( 'Hello Error' );
		var code = 500;

		instanceSendMock.error( error.message, error, code );
		instanceSendMock.errorMessage.should.equal( 'Hello Error' );
		instanceSendMock.error.should.equal( error );
		instanceSendMock.code.should.equal( code );

	} );

	it( 'should have an errorMessage', function () {

		var error = new Error( 'Hello Error' );

		instanceSendMock.fail( error.message );
		instanceSendMock.errorMessage.should.equal( 'Hello Error' );

	} );

} );
