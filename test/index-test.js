'use strict';

require( 'should' );

describe( 'Include files', function () {

	var lib;

	before( function( done ) {
		lib = require( '../lib' );
		done();
	} );

	it( 'should return sendMock object and rabbitAPI', function () {

		lib.should.have.property( 'SendMock' ).and.be.instanceOf( Object );
		lib.should.have.property( 'rabbitAPI' ).and.be.instanceOf( Object );

	} );

} );
