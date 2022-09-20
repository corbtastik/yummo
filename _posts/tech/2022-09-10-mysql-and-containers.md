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

A lab for working with MySQL in Podman and Openshift.

## MySQL on Podman

### Setup for Podman

* [Podman](https://github.com/containers/podman)
* ([cURL](https://curl.se/) & [jq](https://stedolan.github.io/jq/download/)) or [HTTPie](https://httpie.io/)

### Grab container images

{% include code.html info="Get container images" %}
```bash
# We're working with MySQL from Red Hat registry
podman login registry.redhat.io
podman pull registry.redhat.io/rhel8/mysql-80

# Working with Todo(s) MySQL app on quay
podman login quay.io
podman pull quay.io/corbsmartin/todos-mysql
```

### Run with port-forwarding

#### 1. Start the database container

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

#### 2. Start the client app container

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

#### 3. Grok

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

#### 4. Sanity check

Do a quick check to verify clean startups.

```text
podman logs todos-db

# Check for something like "ready for connections" at the tail of log
2022-09-01 mysqld: ready for connections.

# Check for something like "Tomcat started"
podman logs todos-mysql
Tomcat started on port(s): 8081 (http)
```

## MySQL on Openshift

### 0. Setup for Openshift

You'll need the following tools, in addition to the ones mentioned in [Setup for Podman](#setup-for-podman).

* An Openshift environment
  * Openshift Local (aka Code Ready Containers) is a great local development options.
  * Openshift Online is a good option for using Openshift as a service.
  * A real deployment of OpenShift

### 1. Set vars

{% include code.html info="Set vars used by later commands" %}
```bash
APP_NAMESPACE="mysql-dev"
APP_NAME="mysql"
MYSQL_USER="user1"
MYSQL_PASS="mysql123"
MYSQL_POD=`oc get pods --template "{{range .items}}{{.metadata.name}}{{end}}" \
  --selector=app=${APP_NAME} \
  -n ${APP_NAMESPACE}`
```

### 2. Create table

{% include code.html info="Create todos table" %}
```bash
oc exec -it -n ${APP_NAMESPACE} ${MYSQL_POD} -- /bin/bash -c 'mysql -u${MYSQL_USER} -p${MYSQL_PASS} -e \
  "DROP TABLE IF EXISTS todos.todos;
   CREATE TABLE todos.todos (
    id VARCHAR(64) NOT NULL,
    title VARCHAR(255) DEFAULT NULL,
    complete BOOL DEFAULT FALSE,
    PRIMARY KEY (id),
    INDEX (title));"'
```

### 3. Describe the table

{% include code.html info="Describe the table" %}
```bash
oc exec -it -n ${APP_NAMESPACE} ${MYSQL_POD} -- /bin/bash -c 'mysql -uuser1 -pmysql123 -e \
  "DESCRIBE todos.todos;"'
```

```text
+----------+--------------+------+-----+---------+-------+
| Field    | Type         | Null | Key | Default | Extra |
+----------+--------------+------+-----+---------+-------+
| id       | varchar(64)  | NO   | PRI | NULL    |       |
| title    | varchar(255) | YES  | MUL | NULL    |       |
| complete | tinyint(1)   | YES  |     | 0       |       |
+----------+--------------+------+-----+---------+-------+
```

### 4. Insert test data

{% include code.html info="Insert test data" %}
```bash
oc exec -it -n ${APP_NAMESPACE} ${MYSQL_POD} -- /bin/bash -c 'mysql -uuser1 -pmysql123 -e \
  "INSERT INTO todos.todos(id, title, complete) VALUE (1000, \"Demo create with manifest.\", FALSE);
   INSERT INTO todos.todos(id, title, complete) VALUE (1001, \"Demo create with Helm.\", FALSE);
   INSERT INTO todos.todos(id, title, complete) VALUE (1002, \"Review MySQL deployment options.\", FALSE);"'
```

```bash
# Set vars used by later commands
APP_NAMESPACE="mysql-lab"
APP_NAME="mysql"
MYSQL_POD=`oc get pods --template "{{range .items}}{{.metadata.name}}{{end}}" \
  --selector=app=${APP_NAME} \
  -n ${APP_NAMESPACE}`

# Create table  
oc exec -it -n ${APP_NAMESPACE} ${MYSQL_POD} -- /bin/bash -c 'mysql -uuser1 -pmysql123 -e \
  "DROP TABLE IF EXISTS todos.todos;
   CREATE TABLE todos.todos (
    id VARCHAR(64) NOT NULL,
    title VARCHAR(255) DEFAULT NULL,
    complete BOOL DEFAULT FALSE,
    PRIMARY KEY (id),
    INDEX (title));"'

# Describe table
oc exec -it -n ${APP_NAMESPACE} ${MYSQL_POD} -- /bin/bash -c 'mysql -uuser1 -pmysql123 -e \
  "DESCRIBE todos.todos;"'
    
# Insert 1 record
oc exec -it -n ${APP_NAMESPACE} ${MYSQL_POD} -- /bin/bash -c 'mysql -uuser1 -pmysql123 -e \
  "INSERT INTO todos.todos(id, title, complete) VALUE (1000, \"Demo create with manifest.\", FALSE);"'

# Show 1 record
oc exec -it -n ${APP_NAMESPACE} ${MYSQL_POD} -- /bin/bash -c 'mysql -uuser1 -pmysql123 -e \
  "SELECT * FROM todos.todos;"'

# Delete 1 record
oc exec -it -n ${APP_NAMESPACE} ${MYSQL_POD} -- /bin/bash -c 'mysql -uuser1 -pmysql123 -e \
  "DELETE FROM todos.todos WHERE id=1000;"'

# Insert test data
oc exec -it -n ${APP_NAMESPACE} ${MYSQL_POD} -- /bin/bash -c 'mysql -uuser1 -pmysql123 -e \
  "INSERT INTO todos.todos(id, title, complete) VALUE (1000, \"Demo create with manifest.\", FALSE);
   INSERT INTO todos.todos(id, title, complete) VALUE (1001, \"Demo create with Helm.\", FALSE);
   INSERT INTO todos.todos(id, title, complete) VALUE (1002, \"Review MySQL deployment options.\", FALSE);"'
   
# Show all records
oc exec -it -n ${APP_NAMESPACE} ${MYSQL_POD} -- /bin/bash -c 'mysql -uuser1 -pmysql123 -e \
  "SELECT * FROM todos.todos;"'

# Update first record
oc exec -it -n ${APP_NAMESPACE} ${MYSQL_POD} -- /bin/bash -c 'mysql -uuser1 -pmysql123 -e \
  "UPDATE todos.todos SET complete=TRUE WHERE id=1000;"'
  
# Show only completed todos
oc exec -it -n ${APP_NAMESPACE} ${MYSQL_POD} -- /bin/bash -c 'mysql -uuser1 -pmysql123 -e \
  "SELECT * FROM todos.todos WHERE complete=TRUE;"'
  
# We're done here, drop table
oc exec -it -n ${APP_NAMESPACE} ${MYSQL_POD} -- /bin/bash -c 'mysql -uuser1 -pmysql123 -e \
  "DROP TABLE todos.todos;"'
  
# Show tables, verify drop
oc exec -it -n ${APP_NAMESPACE} ${MYSQL_POD} -- /bin/bash -c 'mysql -uuser1 -pmysql123 -e \
  "SHOW TABLES FROM todos;"'

# Show databases, verify todos database is present
oc exec -it -n ${APP_NAMESPACE} ${MYSQL_POD} -- /bin/bash -c 'mysql -uuser1 -pmysql123 -e \
  "SHOW DATABASES;"'
```