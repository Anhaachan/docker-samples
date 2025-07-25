### Compose sample application

## Python/FastAPI application

### Deploy with docker compose
```bash
docker-compose up -d --build
```
### Expected result
```bash
$ docker ps
CONTAINER ID   IMAGE          COMMAND       CREATED              STATUS              PORTS                                               NAMES
7087a6e79610   5c1778a60cf8   "/start.sh"   About a minute ago   Up About a minute   80/tcp, 0.0.0.0:8000->8000/tcp, :::8000->8000/tcp   fastapi-application
```
Stop and remove the containers
```bash
$ docker compose down
```