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

Thumbnails are 128px x 128px and use the `thumbnail` class.

{% include code.html label="Thumbnail images" %}
{% raw %}
```html
{%
  include image/image.html
  classes="thumbnail"
  src="https://storage.googleapis.com/corbs-foto/yolo/yolo/big-face-bucky.png"
%}
```
{% endraw %}

> __Tip:__ Click to enlarge.

{%
include image/image.html
classes="thumbnail"
src="https://storage.googleapis.com/corbs-foto/yolo/yolo/big-face-bucky.png"
%}

[↑↑↑](#table-of-contents){: .back-to-top}

---

### Square Images

Square images can be added with the following classes: `is-16`, `is-24`, `is-32`, `is-48`, `is-64`, `is-96`, `is-128`,
`is-192`, `is-256`, `is-384`, `is-448`, `is-512`, `is-640`.

{% include code.html label="Square images" %}
{% raw %}
```html
{%
  include image/image.html
  classes="image is-256"
  src="https://storage.googleapis.com/corbs-foto/yolo/yolo/drive-in.png"
%}
```
{% endraw %}

> __Tip:__ Click to enlarge.

{%
include image/image.html
classes="image is-256"
src="https://storage.googleapis.com/corbs-foto/yolo/yolo/drive-in.png"
%}

[↑↑↑](#table-of-contents){: .back-to-top}

---

### Circle Images

Circle images can be added with the following classes: `is-circle-16`, `is-circle-24`, `is-circle-32`,
`is-circle-48`, `is-circle-64`, `is-circle-96`, `is-circle-128`, `is-circle-192`, `is-circle-256`, `is-circle-384`,
`is-circle-448`, `is-circle-512`, `is-circle-640`.

{% include code.html label="Circle images" %}
{% raw %}
```html
{%
  include image/image.html
  classes="is-circle-256"
  src="https://storage.googleapis.com/corbs-foto/yolo/yolo/big-face-bucky.png"
%}
```
{% endraw %}

> __Tip:__ Click to enlarge.

{%
include image/image.html
classes="is-circle-256"
src="https://storage.googleapis.com/corbs-foto/yolo/yolo/big-face-bucky.png"
%}

[↑↑↑](#table-of-contents){: .back-to-top}

---

### 4-by-3 Images

4 by 3 aspect ratio images can be added with the following classes: `is-100-by-75`, `is-120-by-90`, `is-128-by-96`,
`is-160-by-120`, `is-200-by-150`, `is-240-by-180`, `is-256-by-192`, `is-320-by-240`, `is-400-by-300`,
`is-480-by-360`, `is-512-by-384`, `is-640-by-480`.

{% include code.html label="4-by-3 images" %}
{% raw %}
```html
{%
  include image/image.html
  classes="image is-256-by-192"
  src="https://storage.googleapis.com/corbs-foto/yolo/yolo/bluebonnet.png"
%}
```
{% endraw %}

> __Tip:__ Click to enlarge.

{%
include image/image.html
classes="image is-256-by-192"
src="https://storage.googleapis.com/corbs-foto/yolo/yolo/bluebonnet.png"
%}

[↑↑↑](#table-of-contents){: .back-to-top}

---

### 3-by-4 Images

3 by 4 aspect ratio images can be added with the following classes: `is-75-by-100`, `is-90-by-120`, `is-96-by-128`,
`is-120-by-160`, `is-150-by-200`, `is-180-by-240`, `is-192-by-256`, `is-240-by-320`, `is-300-by-400`,
`is-360-by-480`, `is-384-by-512`, `is-480-by-640`.

{% include code.html label="3-by-4 images" %}
{% raw %}
```html
{%
  include image/image.html
  classes="image is-240-by-320"
  src="https://storage.googleapis.com/corbs-foto/yolo/yolo/bluebonnet.png"
%}
```
{% endraw %}

> __Tip:__ Click to enlarge.

{%
include image/image.html
classes="image is-240-by-320"
src="https://storage.googleapis.com/corbs-foto/yolo/yolo/bluebonnet.png"
%}

[↑↑↑](#table-of-contents){: .back-to-top}

---

### 16-by-9 Images

16 by 9 aspect ratio images can be added with the following classes: `is-112-by-63`, `is-128-by-72`, `is-144-by-81`,
`is-160-by-90`, `is-192-by-108`, `is-224-by-126`, `is-256-by-144`, `is-320-by-180`, `is-400-by-225`, `is-480-by-270`,
`is-512-by-288`, `is-640-by-360`.

{% include code.html label="16-by-9 images" %}
{% raw %}
```html
{%
  include image/image.html
  classes="image is-256-by-144"
  src="https://storage.googleapis.com/corbs-foto/yolo/yolo/bluebonnet.png"
%}
```
{% endraw %}

> __Tip:__ Click to enlarge.

{%
include image/image.html
classes="image is-256-by-144"
src="https://storage.googleapis.com/corbs-foto/yolo/yolo/bluebonnet.png"
%}

[↑↑↑](#table-of-contents){: .back-to-top}

---

### 9-by-16 Images

9 by 16 aspect ratio images can be added with the following classes: `is-63-by-112`, `is-72-by-128`, `is-81-by-144`,
`is-90-by-160`, `is-108-by-192`, `is-126-by-224`, `is-144-by-256`, `is-180-by-320`, `is-225-by-400`, `is-270-by-480`,
`is-288-by-512`, `is-360-by-640`.

{% include code.html label="9-by-16 images" %}
{% raw %}
```html
{%
  include image/image.html
  classes="image is-225-by-400"
  src="https://storage.googleapis.com/corbs-foto/yolo/yolo/bluebonnet.png"
%}
```
{% endraw %}

> __Tip:__ Click to enlarge.

{%
include image/image.html
classes="image is-225-by-400"
src="https://storage.googleapis.com/corbs-foto/yolo/yolo/bluebonnet.png"
%}

[↑↑↑](#table-of-contents){: .back-to-top}
