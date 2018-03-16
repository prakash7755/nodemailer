'use strict';

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const send = require('./lib/mail')

send({to:'sekarcreddy@gmail.com', subject: 'Hi', text: 'hi Sekar'})


app.listen(port, () => {
	console.log(`App listen Port @ ${ port }`)
})