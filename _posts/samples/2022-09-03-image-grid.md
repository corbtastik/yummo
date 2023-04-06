---
layout: post
title: "samples/image-grid"
description: "Yummo Image Grid, ooh-la-la"
date: 2022-09-03
author: Corbs
category: samples
feature_image: /assets/images/samples/image-grid-logo.png
tags:
  - image-grid
  - sample
  - yummo
---

The Image Grid is similar to the [Lightbox](/samples/lightbox/), except it shows images inline, instead of in a modal.

> __Tip:__ Click an image to enlarge, click again to minimize.

* Add image data into `_data/ig-images.yml`.
* Include `image/grid.html` on your page.

{% include components/arrow.html %}

---

## Default data file

The `_data/ig-images.yml` file is the default data file, just replace with your data to display images.

{% include components/code.html label="Images from: _data/ig-images.yml" %}
{% raw %}
```html
{% include "image/grid.html" %}
```
{% endraw %}

{% include image/grid.html %}

{% include components/arrow.html %}

---

## Custom data file

A custom data file can be added to create an Image Grid.

* Create a new file in `_data/` and prefix name with `ig-`.
* Use the data file name (w/o `.yml` ext) as the value to `ig-data`.
* Customize the number of columns by setting `ig-columns`.

{% include components/code.html label="Images from: _data/ig-pets.yml" %}
{% raw %}
```html
{% include image/grid.html ig-data="ig-pets" ig-columns="2" %}
```
{% endraw %}

{% include image/grid.html ig-data="ig-pets" ig-columns="2" %}

{% include components/arrow.html %}