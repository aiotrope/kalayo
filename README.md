# kalayo

FSO Part 12: Containers

Date: 13.3.2023

## CLI Commands

```bash
# list running containers
$ docker ps

# list non running/running containers
$ docker ps -a

# build images/run development version of container
$ docker compose -f <docker-compose_file> up

# stop all running containers
$ docker compose -f <docker-compose_file> down

# run commads inside container
$ docker exec -it <container_id> /bin/sh

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

