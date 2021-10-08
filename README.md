# What is in the repo

The repo contains 2 main folder:
- client: for all the client side
- server: for all the backend side


# Requirement

You will need nodeJS to run the server
To install all the project you'll need npm

## Run the project

In order to install all the project and start it, run the command "npm run installandstart" from the root folder


## Client side

The client side contains a small app allowing to display gallery, you will find all the different components within the src/components folder

The client side is using react with Typescript (tsx files)


### `Build the client`

In order to build the client you can run npm run build command.

## Server side

The server side contains one route to receive the Images (GET /api/images)

The server side also forward the / route to the react App

The server is using typescript

### `Start the server`

In order to start the server run the command npm start


### `Test server`

In order to test the server side, use the command npm test


## Things I did

### `Server`

I added cache on the request to the API in order to not flood the API and to avoid issues due to rate Limit.
For that, I create a localCache using a singleton in the server side.


### `Client`

I added few basics tests on the components of the app. Used Flex in order to be responsive and to show the columns according to the screen size.
I also added an Error component that is used in case of server Error.
InfiniteScroll is also implemented to bring 15 items more.

I chose to have one folder per component with tsx,css,assets and interfaces so we have all the needed things in the same folder and we have a kind of domains in the components folders.


## What I would improve

Currently using local storage for the likes so we can't really keep all the info. I would have change this to a db.

After adding a database I would consider to have periodical updates of the database directly in a separated service so client request won't go to the API (doing this according to the period of changes of the image API).

I could also add more tests to project

I used awesomefont for the like, but usually I would rather to use private font svg. 

Last thing, with more knowledge on react, I would have clean the dependencies and unneeded things added by the create app script