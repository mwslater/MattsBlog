# Matt's Blog

This is a simple blog application built on the MEAN stack.  It allows for creating, updating, and deleting blog posts, displaying any posts in the database as posts are created, modified, or removed.

## Follow these instuctions to run.  The app runs on port 3000.

1. Install node.js (https://nodejs.org) and mongoDB (https://www.mongodb.com) if not already installed.  Windows users note the install location for mongoDB for the next step.
2. Make sure the install location for mongoDB is included in the system path for simplicity in running the app.  Add mongoDB to the path if necessary.  The following link may help Windows 10 users: https://code.msdn.microsoft.com/Mongo-Database-setup-on-6963f46f (be sure to replace the Mongo installation path on the page with the one noted in step 1).
3. Clone the repo to the local machine if not already done (Link: https://github.com/mwslater/MattsBlog.git).
4. Open two terminal or command prompt windows.
5. Run "mongod" in one of the windows.  Mongo will let you know that it's listening.
6. Navigate to the root of the project in the other window (i.e. Git Root\MattsBlog\MattsBlog, where Git Root is the location repositories are cloned to).
7. Run "npm install" to install all of the app's dependencies.
8. Run "node server.js" to start the server.
9. Open a browser and navigate to http://localhost:3000.  You will see an empty blog with boxes and buttons for creating new posts.  New posts will appear below this area once created.

## NPM installed dependencies

body-parser
mongoose
express

## Future Development (Both Front End and Back End)

* Refactor the code to give routes and functions separate files.
* Add registration and login capabilites to allow for multiple users to have their own pages.
* Make button for posting and updating dynamic (i.e. have button default to post, change to update when a post is selected for editing).

### Feel free to make contributions or offer suggestions in regards to features and/or functionality.