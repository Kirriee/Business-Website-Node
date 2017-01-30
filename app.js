const express = require ('express')
const app = express ();


// app.get('/', function (request, response) { 
// 	response.send ("hHallooo")
// })

app.use(express.static('public', {
	index: 'home.html'
}));

// <!-- function log{
// 	console.log("listening on port 3000")
// }
 -->
app.listen(3000)