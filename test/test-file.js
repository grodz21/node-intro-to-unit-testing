const fizzBuzz = require('../fizzBuzzer.js');
require('chai').should();

describe('fizzBuzz',()=>{
	it("Should return the word fizz-buzz",()=>{
		fizzBuzz(30).should.equal("fizz-buzz");


	});


});