# sqlite-node-rest

Use Sqlite, node.js to develop simple RESTFul API for Blog management. 

There are two end-points:

* /post, method is POST, content of POST must be the title and body of the post.
* /posts, method is GET, content of GET must be the post_id, title, and body of all  posts in an array

All data exchanged with the API must be in JSON format.

### How to build the RES API service ###

 
* git clone https://github.com/doughuang168/sqlite-node-rest.git
* npm install


## Use Docker to start the API Service

 

* docker build -t sqlite-node-rest .  
* docker run -d --name sqlitenode -v blog.db:/usr/src/app/blog.db -p 3000:3000 sqlite-node-rest

## Start the API Service without Docker


* node blogpost.js 
 