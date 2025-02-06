# Use the official PostgreSQL Alpine image as the base
FROM postgres:alpine

# Set environment variables for PostgreSQL
ENV POSTGRES_USER=myuser
ENV POSTGRES_PASSWORD=mypassword
ENV POSTGRES_DB=mydatabase

# (Optional) Copy initialization scripts to /docker-entrypoint-initdb.d/
# if didn't provide init file then comment this line
# Any .sql or .sh files in this directory will be executed when the container starts
COPY init.sql /docker-entrypoint-initdb.d/
