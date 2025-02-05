> this circumstance is based for running postgresql using docker image and containirize all of them. (f.. my english sux)

# Step 1
## pull the postgres image from Docker hub

```bash
docker pull postgres:alpine
```

- run this command for tag image
```bash
docker tag postgres:alpine postgres-image-lab
```


# Step 2
## Run a container using the pulled image
```bash
docker run --name my-postgres-container -e POSTGRES_PASSWORD=password -d -p 45432:5432 postgres-image-lab
```


# Step 3 
then it will detach from terminal and run container in background. 

### Not related container but now run this command . it will enter running container and execute command 

1. 
```bash
docker exec -it my-postgres-container bash
```

2. connect postgresql using `psql`
```bash
psql -U postgres
```

※ in here we are not installing `postgres-client` just entered container and run command in container itself.Because postgres image has installed psql default .

3. 
playground command 
```psql
SELECT version();
```

4. for exit
```psql
exit
```



### more related psql command (complex)

[here](https://neon.tech/postgresql/postgresql-administration/postgresql-show-tables)
1. for connect
```
psql -U postgres
```

2. change the current database to run command
```
\c postgres
```
※ in here we are using default db name **postgres**

> or just run this single line to connect db instantly 
```
psql -U postgres -d postgres
```

3. for show tables command 
```
\dt
```

4. `\q` for quit
