---
layout: post
title: "samples/code-snippets"
description: "Yummo code highlighting and snippet copy"
date: 2022-09-08
author: Corbs
category: samples
feature_image: /assets/images/samples/snippets-logo.jpg
tags:
  - code
  - syntax-highlighting
  - sample
  - yummo
---

## Syntax Themes

Yummo uses Jekyll's [default syntax highlighting](https://jekyllrb.com/docs/liquid/tags/#code-snippet-highlighting) capabilities provided by [rouge](https://github.com/rouge-ruby/rouge), and adds the ability to use custom `syntax-theme(s)` for light and dark modes.

> __Note__: Every theme included with Yummo has a corresponding syntax theme.
>   * __See__: `_sass/yummo/brand/theme` for themes.
>   * __See__: `_sass/yummo/brand/syntax` for syntax themes.

When you create a custom `syntax-theme` you specify colors for each syntax token variable, which maps to the appropriate rouge css selector.

{% include components/arrow.html %}

---

### Custom Syntax Theme

1. Creating a custom `syntax-theme` is done by adding a `scss` file into `_sass/yummo/brand/syntax` and setting values for each color property for both __light__ and __dark__ modes.
2. To enable a specific `syntax-theme` add it to your `settings.yml` file, as shown below.

{% include components/code.html label="Configure the syntax-theme" %}
```yaml
# -------------------------------------
# Yummo site settings
# -------------------------------------
name: Yummo
version: v1.2
title: Yummo on my friend
description: A tasty wittle theme
brand:
  # references _sass/yummo/brand/theme/_reveal.scss
  theme: reveal
  # references _sass/yummo/brand/syntax/_reveal.scss
  syntax: reveal
```

{% include components/arrow.html %}

---

### Syntax Swatches

The swatches below show the colors for the `syntax-theme` in use, each swatch has the syntax token and the corresponding css selector in parentheses.

{% include demo/syntax-theme-swatches.html %}

{% include components/arrow.html %}

---

> __Tip:__ Click header to copy a snippet.

## Code Snippets

### Bash

{% include components/code.html label="Bash snippet" %}
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

{% include components/arrow.html %}

---

### C

{% include components/code.html label="C snippet" %}
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

{% include components/arrow.html %}

---

### C++

{% include components/code.html label="C++ snippet" %}
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

{% include components/arrow.html %}

---

### Dart

{% include components/code.html label="Dart snippet" %}
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

{% include components/arrow.html %}

---

### Go

{% include components/code.html label="Go snippet" %}
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

{% include components/arrow.html %}

---

### HTML

{% include components/code.html label="HTML snippet" %}
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

{% include components/arrow.html %}

---

### JSON

{% include components/code.html label="JSON snippet" %}
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

{% include components/arrow.html %}

---

### Java

{% include components/code.html label="Java snippet" %}
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

{% include components/arrow.html %}

---

### JavaScript

{% include components/code.html label="JavaScript snippet" %}
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

{% include components/arrow.html %}

---

### Kotlin

{% include components/code.html label="Kotlin snippet" %}
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

{% include components/arrow.html %}

---

### Markdown

{% include components/code.html label="Markdown snippet" %}
```markdown
# Markdown

* __Howdy__
* _from_
* <ins>a</ins>
* [Markdown](https://en.wikipedia.org/wiki/Markdown)
* `document`!
```

{% include components/arrow.html %}

---

### Python

{% include components/code.html label="Python snippet" %}
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

{% include components/arrow.html %}

---

### SCSS

{% include components/code.html label="SCSS snippet" %}
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

{% include components/arrow.html %}

---

### SQL

{% include components/code.html label="SQL snippet" %}
```sql
-- Select orders for micky
SELECT *
FROM orders
WHERE cust_id = "mickey@mouse.com"
AND   price > 5000
AND   price <= 10000
```

{% include components/arrow.html %}

---

### YAML

{% include components/code.html label="YAML snippet" %}
```yaml
# ---------------------------------------------------------
# Yolo site settings. see: _config.yml for jekyll settings
# ---------------------------------------------------------
name: Yolo
version: v1.3
title: Yolo on my friend
description: Loveable single pages
theme:
  name: solo
  syntax: monokai
align: left
sidebar:
  logo: assets/images/logo.png
```

{% include components/arrow.html %}