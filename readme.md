# How to run:

`docker-compose -p my-project-name up`

# Without docker:

set up a mongodb instance and set the connection string in the .env file
```
MONGODB_URI=mongodb://localhost:27017/my-project-name
```
`yarn install`

`yarn start:dev`