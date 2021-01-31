"use strict";

const fs = require('fs');
const args = process.argv.slice(2);

switch (args[0]) {

	case 'password':
		const pass = getPass(args[1]);
		console.log(pass);
		fs.appendFileSync('passwords.txt', '· ' + pass + ' \r\n');
		break;

	case 'login': 
		const log = getLogin(args[1]);
		console.log(log);
		fs.appendFileSync('logins.txt', '· ' + log + ' \r\n');
		break;

	default: 
		console.log('В первом параметре выберите модель для генерации (password or login), а вторым параметром длину строки');
		break;
}

function getPass(len) {

	const passChars = 'abcdefghijklmnopqrstuvwxyz1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	let pass = "";

	for (let i = 0; i <= len; i++) {
		
		let index = Math.floor(Math.random() * Math.floor(passChars.length));
		pass += passChars[index];
		
	}

	return pass;

}	

function getLogin(len) {

	const logCharsNegl = 'bcdfghjklmnpqrstvwxzBCDFGHJKLMNPQRSTVWXZ';
	const logCharsGl = 'aeiouyAEIOUY';
	
	let log = "";
	let index = 0;

	for (let i = 0; i <= len; i++) {
		
		if (i % 2 != 0) {
			index = Math.floor(Math.random() * Math.floor(logCharsNegl.length));
			log += logCharsNegl[index];
		}
		else {
			index = Math.floor(Math.random() * Math.floor(logCharsGl.length));
			log += logCharsGl[index];
		}

	}

	return log;

}	
