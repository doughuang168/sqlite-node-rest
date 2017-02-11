//Load modules
var sqlite3  = require('sqlite3').verbose();
var db       = new sqlite3.Database('./blog.db');
var uuid 	 = require('node-uuid');

//Perform INSERT operation.
db.run("INSERT into posts(title,body, post_id) VALUES ('title 1', 'title 1 body', '" + uuid.v1() + "')");
db.run("INSERT into posts(title,body, post_id) VALUES ('title 2', 'title 2 body', '" + uuid.v1() + "')");
db.run("INSERT into posts(title,body, post_id) VALUES ('title 3', 'title 3 body', '" + uuid.v1() + "')");

//Perform SELECT Operation
db.all("SELECT * from posts",function(err,rows){
	//rows should contain all values, let's dump it and figure out how to handle object.
	console.log(rows);
	console.log(JSON.stringify(rows));
});


