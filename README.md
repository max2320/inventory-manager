# Inventory Manager

## Requirements
- docker 19.x or higher
- docker-compose 1.24.x or higher

## Build and start containers

Run the `up` command on docker compose:
```
$ docker-compose up -d
```

This procedure will create and start the containers:
- postgres: PostgreSQL database
- redis: Redis in-memory data structure store
- web: Rails api/ application
- webpacker: Webpack dev server

To access the platforms:

##### Platform
http://localhost:3000/


## Stop containers

Run the `stop` command on docker compose:
```
$ docker-compose stop
```

## Running specs

Run the `run` command on docker compose with the parameters:

```
$ docker-compose run --rm -e RAILS_ENV=test web rspec
```
