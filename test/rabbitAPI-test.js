'use strict';

require( 'should' );

describe( 'rabbitAPI', function () {

	var rabbitAPI;

	before( function ( done ) {

		rabbitAPI = require( '../lib/rabbitAPI' );
		done();

	} );

	it( 'should have request property', function () {

		rabbitAPI.should.have.property( 'request' ).and.be.instanceOf( Function );
	} );

	it( 'should have respond property', function () {

		rabbitAPI.should.have.property( 'respond' ).and.be.instanceOf( Function );

	} );

} );
