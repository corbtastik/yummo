---
layout: post
title: "tech/mysql-and-containers"
description: "Lab - MySQL as a container"
date: 2022-09-10
author: Corbs
permalink: /tech/mysql-and-containers
category: tech
tags:
- tech
- lab
- mysql
- podman
- openshift
---

A lab for working with MySQL in podman and openshift.

## Setup

* [Podman](https://github.com/containers/podman)
* ([cURL](https://curl.se/) & [jq](https://stedolan.github.io/jq/download/)) or [HTTPie](https://httpie.io/)

## Grab container images

{% include code.html info="Get container images" %}
```bash
# We're working with MySQL from Red Hat registry
podman login registry.redhat.io
podman pull registry.redhat.io/rhel8/mysql-80

# Working with Todo(s) MySQL app on quay
podman login quay.io
podman pull quay.io/corbsmartin/todos-mysql
```

## Run with port-forwarding

### 1. Start the database container

Start a MySQL container, mapping hostPort `3306` to containerPort `3306`.

{% include code.html info="Start MySQL container" %}
```bash
podman run --name todos-db -d \
  -p 3306:3306 \
  -e MYSQL_USER=user1 \
  -e MYSQL_PASSWORD=mysql123 \
  -e MYSQL_DATABASE=todos \
  -e MYSQL_ROOT_PASSWORD=mysql123 \
  registry.redhat.io/rhel8/mysql-80
podman logs todos-db
```

### 2. Start the client app container

* First, set your `HOST_IP`

{% include code.html info="For macOS" %}
```bash
HOST_IP=$(ipconfig getifaddr `route get default | \
  grep interface | \
  awk '{print $2}'`);
echo $HOST_IP
```

{% include code.html info="For RHEL/Fedora/Centos" %}
```bash
HOST_IP=$(hostname -I | \
  awk '{print $1}');
echo $HOST_IP
```

* Then run Todo(s)-MySQL container
* Map hostPort `8081` to containerPort `8081`
* Set environment variables for MySQL
  * __NOTE__: Use `$HOST_IP` var __NOT__ `localhost`.

{% include code.html info="Run the Todo(s) MySQL container" %}
```bash
podman run --name todos-mysql -d -p 8081:8081 \
  -e "SERVER_PORT=8081" \
  -e "SPRING_PROFILES_ACTIVE=mysql" \
  -e "MYSQL_USER=user1" \
  -e "MYSQL_PASSWORD=mysql123" \
  -e "MYSQL_HOST=${HOST_IP}" \
  -e "MYSQL_DATABASE=todos" \
  quay.io/corbsmartin/todos-mysql
```

### 3. Grok

Get all, create, get, update, get completed, delete, chill.

{% include code.html info="Grok with cURL" %}
```bash
# Get all
curl http://localhost:8081/todos/ | jq
# Create todo
curl -X POST http://localhost:8081/todos/ \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{"id":"1003", "title":"Learn podman"}' | jq
# Get todo
curl http://localhost:8081/todos/1003 | jq
# Update todo complete
curl -X PATCH http://localhost:8081/todos/1003 \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{"id":"1003", "complete":true}' | jq
# Get complete todos
curl http://localhost:8081/todos/complete | jq
# Delete todo
curl -X DELETE http://localhost:8081/todos/1003 | jq
# Get all
curl http://localhost:8081/todos/ | jq
```

{% include code.html info="Grok with HTTPie" %}
```bash
# Get all
http :8081/todos/
# Create todo
http POST :8081/todos/ id="1004" title="Learn podman pods"
# Get todo
http :8081/todos/1004
# Update todo complete
http PATCH :8081/todos/1004 complete:=true
# Get complete todos
http :8081/todos/complete
# Delete todo
http DELETE :8081/todos/1004
# Get all
http :8081/todos/
```

### 4. Sanity check

Do a quick check to verify clean startups.

```text
podman logs todos-db

# Check for something like "ready for connections" at the tail of log
2022-09-01 mysqld: ready for connections.

# Check for something like "Tomcat started"
podman logs todos-mysql
Tomcat started on port(s): 8081 (http)
```

