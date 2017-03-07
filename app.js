// require libraries

const express = require ('express')
const app = express ();

// servering static files
app.use(express.static('public', {
	index: 'home.html'
}));

// start server
app.listen(3000)