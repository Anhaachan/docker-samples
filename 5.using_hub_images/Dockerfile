# Base image
FROM okaeri/debian-dind:20.10.12-bullseye

# Image information
RUN . /etc/os-release && \
    echo "OS Name: $NAME" && \
    echo "OS Version: $VERSION_ID"

# Install dependencies and Docker packages
RUN apt-get update && apt-get install -y \
curl \
unzip \
groff \
less \
git \
wget \
sudo \
cron \
vim \
python3 \
python3-pip \
procps
