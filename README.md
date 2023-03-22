# kalayo

FSO Part 12: Containers

Date: 13.3.2023 - 22.3.2023

## Common CLI commands used (todo-app and my-app)

```bash
# list running containers
$ docker ps

# list non running/running containers
$ docker ps -a

# build/rebuild services for dev environment at localhost:3000
$ cd todo-app && docker compose -f docker-compose.dev.yml up --build
$ cd my-app && docker compose -f docker-compose.dev.yml up --build

# build images of container or rereun services for dev environment at localhost:3000
$ cd todo-app && docker compose -f docker-compose.dev.yml up
$ cd my-app && docker compose -f docker-compose.dev.yml up

# build/rebuild services for prod (full stack) environment at http://localhost
$ cd todo-app && docker compose -f docker-compose.yml up --build
$ cd my-app && docker compose -f docker-compose.yml up --build

# build images of container or rereun services (full stack) for prod environment at http://localhost
$ cd todo-app && docker compose -f docker-compose.yml up
$ cd my-app && docker compose -f docker-compose.yml up

# stop all running containers
$ docker compose -f <docker-compose_file> down

# run commads inside container
$ docker exec -it <container_id> /bin/sh

# list containers
$ docker container ls

# stop running container
$ docker container stop <container_id>
$ docker kill <container_id>

# build docker image with tag based on Dockerfile on current dir
$ docker build -t <nominated_name_of_image> .

# run specific image in detach mode
$ docker container run -d -p <port:port> <name_of_nominated_image> 

# auth in Mongo container
$ mongosh
$ use admin
$ db.auth('root', 'example')

# Remove containers & images
$ docker system prune -a

# Remove image
$ docker rmi <image_id>

# Remove container
$ docker rm <container_id>

# Remove volumes
$ docker volume prune

# run individual container
$ docker run <container_id>

# check logs
$ docker logs <container_id>

```

