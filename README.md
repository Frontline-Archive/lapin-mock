# Lapin Mock

Mock for [lapin](https://github.com/School-Improvement-Network/lapin).

### Usage
Requirements.
  * [sinon](https://github.com/cjohansen/Sinon.JS/) for stubbing

```javascript
'use strict';

var lapinMock = require( 'lapin-mock' );
var sinon     = require( 'sinon' );

describe( 'test', function() {
  
  var sendMock;
  var rabbitAPI;
  var mockRabbit;
  
  before( function ( done ) {
  
    rabbitAPI = lapinMock.rabbitAPI;
    mockRabbit = sinon.stub( rabbitAPI );
    sendMock = new lapinMock.SendMock( done );
    
    rabbitAPI.respond.onCall( 0 ).callsArgWith( 1, message, sendMock );
    
    require( 'to-test-file.js' )( mockRabbit );
    
  } );
  
  it( 'Here we get data form sendMock for sucesss', function () {
    // This is for success
    sendMock.response.should.equal( 'to test value' );
  } );
  
  it( 'Here we get data form sendMock for error', function () {
    // This is for success
    sendMock.errorMessage.should.equal( 'to test value' );
    sendMock.error.should.equal( errorObj );
    sendMock.code.should.equal( 400 );
    
  } );
  
  it( 'Here we get data form sendMock for sucess', function () {
    // This is for success
    sendMock.errorMessage.should.equal( 'to test value' );
  } );
  
} );
