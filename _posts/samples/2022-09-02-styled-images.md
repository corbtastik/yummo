---
layout: post
title: "samples/styled-images"
description: "Styled images"
date: 2022-09-02
author: Corbs
category: samples
tags:
  - images
  - sample
  - yummo
---

{% include toc.html header="h3" text="Table of Contents" %}

> __Tip:__ Click to enlarge.

### Styled Images

Images are either, styled by __default css__ or styled by __yummo css__. This example highlights __yummo css__ for images.

The source of images is customizable and multiple sources can be configured. For example, you can save some images in Google Cloud Storage (GCS) and others locally, or some in AWS S3 and others in GCS.

> __Note:__ By default the local directory is always checked last.

### Images data file

You can source images from `_data/images.yml` by setting the `name` property as shown below. If `name` isn't given then you must use `src` as the remaining examples show.

{% include code.html label="Source image from images.yml" %}
{% raw %}
```html
{%
  include image/image.html
  classes="center is-256"
  name="the-get-go"
  description="The Get Go, Marfa TX."
%}
```
{% endraw %}

{%
  include image/image.html
  classes="center is-384"
  name="the-get-go"
  description="The Get Go, Marfa TX."
%}

{%
  include image/image.html
  classes="center is-384"
  name="bucky-and-nacho"
  description="Bucky and Nacho"
%}

### Thumbnail Images

{% include code.html label="Thumbnail images" %}
{% raw %}
```html
{%
  include image/image.html
  classes="thumbnail"
  src="yolo/big-face-bucky.png"
%}
```
{% endraw %}

{%
  include image/image.html
  classes="thumbnail"
  src="yolo/big-face-bucky.png"
%}

[↑↑↑](#){: .back-to-top}

---

### Square Images

{% include code.html label="Square images" %}
{% raw %}
```html
{%
  include image/image.html
  classes="image is-256"
  src="yolo/big-face-bucky.png"
%}
```
{% endraw %}

{%
  include image/image.html
  classes="image is-256"
  src="yolo/big-face-bucky.png"
%}

[↑↑↑](#){: .back-to-top}

---

### Circle Images

{% include code.html label="Circle images" %}
{% raw %}
```html
{%
  include image/image.html
  classes="is-circle-256"
  src="yolo/big-face-bucky.png"
%}
```
{% endraw %}

{%
  include image/image.html
  classes="is-circle-256"
  src="yolo/big-face-bucky.png"
%}

[↑↑↑](#){: .back-to-top}

---

### 4-by-3 Images

{% include code.html label="4-by-3 images" %}
{% raw %}
```html
{%
  include image/image.html
  classes="image is-256-by-192"
  src="yolo/big-face-bucky.png"
%}
```
{% endraw %}

{%
  include image/image.html
  classes="image is-256-by-192"
  src="yolo/big-face-bucky.png"
%}

[↑↑↑](#){: .back-to-top}

---

### 3-by-4 Images

{% include code.html label="3-by-4 images" %}
{% raw %}
```html
{%
  include image/image.html
  classes="image is-240-by-320"
  src="yolo/big-face-bucky.png"
%}
```
{% endraw %}

{%
  include image/image.html
  classes="image is-240-by-320"
  src="yolo/big-face-bucky.png"
%}

[↑↑↑](#){: .back-to-top}

---

### 16-by-9 Images

{% include code.html label="16-by-9 images" %}
{% raw %}
```html
{%
  include image/image.html
  classes="image is-256-by-144"
  src="yolo/big-face-bucky.png"
%}
```
{% endraw %}

{%
  include image/image.html
  classes="image is-256-by-144"
  src="yolo/big-face-bucky.png"
%}

[↑↑↑](#){: .back-to-top}

---

### 9-by-16 Images

{% include code.html label="9-by-16 images" %}
{% raw %}
```html
{%
  include image/image.html
  classes="image is-225-by-400"
  src="yolo/big-face-bucky.png"
%}
```
{% endraw %}

{%
  include image/image.html
  classes="image is-225-by-400"
  src="yolo/big-face-bucky.png"
%}

[↑↑↑](#){: .back-to-top}
