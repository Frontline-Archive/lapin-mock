'use strict';

function SendMock ( done ) {
	this.done = done;
}

SendMock.prototype.success = function ( data ) {
	this.response = data;
	return this.done();
};

SendMock.prototype.error = function ( errorMessage, error, code ) {
	this.errorMessage = errorMessage;
	this.error        = error;
	this.code         = code;
	return this.done();
};

SendMock.prototype.fail = function ( errorMessage ) {
	this.errorMessage = errorMessage;
	return this.done();
};

module.exports = SendMock;
