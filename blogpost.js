var sqlite3  = require('sqlite3').verbose();
var db       = new sqlite3.Database('./blog.db');
var uuid 	 = require('node-uuid');
var express  = require('express');
var bodyParser 		= require('body-parser');
var methodOverride 	= require('method-override');
var restapi = express();  

restapi.routes = {};

/***
    An endpoint for POSTing a single blog post
        Endpoint must be /post
        Method must be POST
        Content of the POST must be the title and body of the post
    An endpoint for GETing all blog posts
        Endpoint must be /posts
        Method must be GET
        There should be no content sent (this is a GET request)
        Content received must be the post_id, title, and body of all posts in an array

All data exchanged with the API must be in JSON format.
***/

//GET  
restapi.get('/posts', function(req, res){
    
	db.all("SELECT * from posts",function(err,rows){
		//rows should contain all values, let's dump it and figure out how to handle object.
		res.json(rows);
	});
	
});

//POST
restapi.routes['blogpost_insertion'] = function(req, res){
	var errobj = { status: 'error', message : 'invalid post info'}; 
    if (req.body.title && req.body.body) {
		var title = req.body.title;
		var titleBody = req.body.body;
		//console.log(title+ " "+titleBody);
		var stmt = "INSERT into posts(title,body, post_id) VALUES ('" + title +"', '" + 
																		titleBody + "', '" + 
																		uuid.v1() + "')";
																		
		db.run(stmt, function(err, row){
			if (err){
				console.err(err);
				res.status(500);
			}
			else {
				res.status(200);
			}
			res.end();
		});

	} else {
		res.json(errobj);
	}	
};

//This uses the Connect frameworks body parser to parse the body of the post request  
restapi.use(bodyParser.json());
restapi.use(methodOverride('_method'))
restapi.post('/post', restapi.routes['blogpost_insertion']);

restapi.listen(3000);
