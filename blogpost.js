//Load modules
var sqlite3         =       require('sqlite3').verbose();
var db              =       new sqlite3.Database('./blog.db');


//Perform INSERT operation.
db.run("INSERT into posts(title,body) VALUES ('title 1', 'title 1 body')");
db.run("INSERT into posts(title,body) VALUES ('title 2', 'title 2 body')");
db.run("INSERT into posts(title,body) VALUES ('title 3', 'title 3 body')");

//Perform SELECT Operation
db.all("SELECT * from posts",function(err,rows){
	//rows should contain all values, let's dump it and figure out how to handle object.
	console.log(rows);
});


