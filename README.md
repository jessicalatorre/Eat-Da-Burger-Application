# Eat Da Burger!
This is a Burger Eating App that uses Node.js, Express, MySQL, Handlebars, and Materialize.

## Description

This application demonstrates a simple full stack application with a front end implemented with HTML/CSS and elements from the Materialize framework, and the backend is implemented with Node.js and Express. The HTML templating is done with the help of Handlebars.

The user can enter any burger name to add it to the menu, which also enters the new burger into the MySQL database. The initial burger entry is added as *available* on the menu and placed on the left side of the screen. The user may then eat any burger by clicking on it, which moves it into the adjacent column and updates its status accordingly in the database.

## Demo

The demo of the burger eating application can be found [here](https://protected-ocean-80825.herokuapp.com/).

## Installation

To run the application locally, first clone this repository with the following command.

	git clone git@github.com:jessicalatorre/Eat-Da-Burger-Application.git
	
Next, install the application dependencies.

	cd eat-da-burger
	npm install
	
Finally, run the node server locally.

	node server
	
Now, open the local application on port 3000 at the URL: `http://localhost:3000/`.

**Enjoy and have a burger!**





