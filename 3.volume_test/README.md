## Persisting container data

learning how volume works in docker

Try it out 

1. start container using postgres image
```bash
docker run --name db-container -e POSTGRES_PASSWORD=pass -d -v postgres_data:/var/lib/postgresql/data postgres
```
this will attach volume to the directory PostgreSQL will persiste the database files.

2. connect db
```bash
docker exec -it db-container psql -U postgres
```

3. some **psql** command
```
CREATE TABLE tasks (
    id SERIAL PRIMARY KEY,
    description VARCHAR(100)
);
INSERT INTO tasks (description) VALUES ('Finish work'), ('Have fun');
```

for verify 
```
SELECT * FROM tasks;
```

result should be :
```
 id | description
----+-------------
  1 | Finish work
  2 | Have fun
(2 rows)
```

quit : `\q`

4. clean everything
`docker stop db-container`
`docker rm db-container`

5. run a new container by running the following command, attaching the same volume with the persisted data:
`docker run --name=new-db -d -v postgres_data:/var/lib/postgresql/data postgres`

6. verify db
`docker exec -it new-db psql -U postgres -c "SELECT * FROM tasks;"`


7. remove volumes

- `docker rm -f new-db`
- `docker volume rm postgres_data`
- remove all unused volumes:
`docker volume prune`

