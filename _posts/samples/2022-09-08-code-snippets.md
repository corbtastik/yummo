---
layout: post
title: "samples/code-snippets"
description: "Syntax highlighting and snippet copy"
date: 2022-09-08
author: Corbs
category: samples
tags:
- code
- syntax-highlighting
- sample
- yummo
---

### Snippet samples

- [Bash](#bash)
- [C](#c)
- [C++](#c++)
- [Dart](#dart)
- [Go](#go)
- [HTML](#html)
- [JSON Array](#json-array)
- [JSON Object](#json-object)
- [Java](#java)
- [JavaScript](#javascript)
- [Kotlin](#kotlin)
- [Markdown](#markdown)
- [Python](#python)
- [SCSS](#scss)
- [SQL](#sql)
- [YAML](#yaml)

> __Tip:__ Click header to copy a snippet.

### Bash

{% include code.html label="Bash snippet" %}
```bash
#!/bin/bash
function say_howdy() {
  echo "Howdy $1!"
}

if [ $# -ne 1 ]; then
    echo "Usage: Howdy <NAME>"
    exit 1
fi

# Say Howdy
say_howdy $1
```

[↑↑↑](#){: .back-to-top}

---

### C

{% include code.html label="C snippet" %}
```c
#include <stdio.h>
// Say Howdy
int main(int argc, char **argv) {
    if(argc != 2) {
        printf("Usage: Howdy <NAME>");
        return 1;
    }
    printf("Howdy %s!\n", argv[1]);
    return 0;
}
```

[↑↑↑](#){: .back-to-top}

---

### C++

{% include code.html label="C++ snippet" %}
```c++
#include <iostream>
using namespace std;

int main(int argc, char** argv) {
    if(argc != 2) {
        cout << "Usage: Howdy <NAME>";
        return 1;
    }
    cout << "Howdy " << argv[1];
    return 0;
}
```

[↑↑↑](#){: .back-to-top}

---

### Dart

{% include code.html label="Dart snippet" %}
```dart
import 'dart:io';
// Say Howdy
void main(List<String> args) {
    exitCode = 0;
    if(args.length != 1) {
        stdout.writeln("Usage: Howdy <NAME>");
        exitCode = 1;
        return;
    }
    stdout.writeln("Howdy ${args[0]}!");
}
```

[↑↑↑](#){: .back-to-top}

---

### Go

{% include code.html label="Go snippet" %}
```go
package main

import (
    "os"
    "fmt"
)

// Say Howdy
func main () {
    if len(os.Args) != 2 {
        fmt.Println("Usage: Howdy <NAME>")
        os.Exit(1)
    }
    fmt.Println("Howdy " + os.Args[1] + "!")
    os.Exit(0)
}
```

[↑↑↑](#){: .back-to-top}

---

### HTML

{% include code.html label="HTML snippet" %}
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <title>Howdy!</title>
</head>
<body>
    <h1>Howdy from an HTML page!</h1>
</body>
</html>
```

[↑↑↑](#){: .back-to-top}

---

### JSON Array

{% include code.html label="JSON Array snippet" %}
```json
[{
  "id": 1000,
  "first_name": "Sponge",
  "last_name": "Bob",
  "email": "spongebob@krustykrab.com",
  "phone": "555-555-5555",
  "address": "124 Conch Street",
  "city": "Bikini Bottom"
}, {
  "id": 1001,
  "first_name": "Charlie",
  "last_name": "Brown",
  "email": "chuck@peanuts.com",
  "phone": "612-111-7777",
  "address": "1770 James Street",
  "city": "Minneapolis",
  "state": "Minnesota",
  "zipcode": "55403"
}, {
  "id": 1002,
  "first_name": "Garfield",
  "last_name": "Arbuckle",
  "email": "garfield@nick.com",
  "phone": "765-867-9305",
  "address": "711 Maple Street",
  "city": "Muncie",
  "state": "Indiana",
  "zipcode": "47302"
}]
```

[↑↑↑](#){: .back-to-top}

---

### JSON Object

{% include code.html label="JSON Object snippet" %}
```json
{
  "apiVersion": "v1",
  "kind": "Service",
  "metadata": {
    "name": "minio-server-lb",
    "namespace": "minio",
    "labels": {
      "app/name": "minio"
    }
  },
  "spec": {
    "ports": [{
        "port": 9000,
        "targetPort": 9000,
        "protocol": "TCP"
      }],
    "selector": {
      "app/name": "minio",
      "app/component": "backend"
    },
    "type": "LoadBalancer"
  }
}
```

[↑↑↑](#){: .back-to-top}

---

### Java

{% include code.html label="Java snippet" %}
```java
// Say Howdy
public class Howdy {
    public static void main(String[] args) {
        if(args.length != 1) {
            System.out.println("Usage: Howdy <NAME>");
            System.exit(1);
        }
        System.out.println("Howdy " + args[0] + "!");
    }
}
```

[↑↑↑](#){: .back-to-top}

---

### JavaScript

{% include code.html label="JavaScript snippet" %}
```javascript
function sayHowdy(name) {
    console.log("Howdy " + name + "!");
}

if(process.argv.length != 3) {
    console.log("Usage: Howdy <NAME>");
    process.exit(1);
}

// Say Howdy
sayHowdy(process.argv[2]);
```

[↑↑↑](#){: .back-to-top}

---

### Kotlin

{% include code.html label="Kotlin snippet" %}
```kotlin
// Say Howdy
fun main(args: Array<String>): Int {
    if(args.size != 1) {
        println("Usage: Howdy <NAME>")
        return 1
    }
    println("Howdy " + args[0] + "!")
    return 0
}
```

[↑↑↑](#){: .back-to-top}

---

### Markdown

{% include code.html label="Markdown snippet" %}
```markdown
# Markdown

* __Howdy__
* _from_
* <ins>a</ins>
* [Markdown](https://en.wikipedia.org/wiki/Markdown)
* `document`!
```

[↑↑↑](#){: .back-to-top}

---

### Python

{% include code.html label="Python snippet" %}
```python
import sys

def sayHowdy(name):
    print("Howdy " + name + "!")

if len(sys.argv) != 2:
    print("Usage: Howdy <NAME>")
    sys.exit(1)

# Say Howdy
sayHowdy(sys.argv[1])
```

[↑↑↑](#){: .back-to-top}

---

### SCSS

{% include code.html label="SCSS snippet" %}
```scss
.light-theme {
  color: $light-secondary-color;
  background-color: $light-primary-color;
  font-family: $family-primary;

  a {
    color: $light-link-color;
  }

  h1, h2, h3, h4, h5, h6 {
    color: $light-accent-color;
    font-family: $family-secondary, sans-serif;
  }
}
```

[↑↑↑](#){: .back-to-top}

---

### SQL

{% include code.html label="SQL snippet" %}
```sql
-- Select orders for micky
SELECT *
FROM orders
WHERE cust_id = "mickey@mouse.com"
AND   price > 5000
AND   price <= 10000
```

[↑↑↑](#){: .back-to-top}

---

### YAML

{% include code.html label="YAML snippet" %}
```yaml
apiVersion: v1
kind: Service
metadata:
  name: minio-server-lb
  namespace: minio
  labels:
    app/name: minio
spec:
  ports:
    - port: 9000
      targetPort: 9000
      protocol: TCP
  selector:
    app/name: minio
    app/component: backend
  type: LoadBalancer
```

[↑↑↑](#){: .back-to-top}