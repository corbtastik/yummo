---
layout: post
title: "samples/image-grid"
description: "Showcase pics like a boss"
date: 2022-09-03
author: Corbs
permalink: /samples/image-grid
category: samples
tags:
- css
- images
- image-grid
- sample
- yummo
---

Show your awesome pics in a Yummo Image Grid, ooh-la-la.

> __Tip:__ Click an image to enlarge, click again to minimize.

* Add image data into `_data/ig-images.yml`.
* Include `image/grid.html` on your page.

#### Default data file

The `_data/ig-images.yml` file is the default data file, just replace with your data to display images.

{% include code.html info="Images from: _data/ig-images.yml" %}
{% raw %}
```html
{% include "image/grid.html" %}
```
{% endraw %}

{% include image/grid.html %}

#### Custom data file

A custom data file can be added to create an Image Grid.

* Create a new file in `_data/` and prefix name with `ig-`.
* Use the data file name (w/o `.yml` ext) as the value to `ig-data`.
* Customize the number of columns by setting `ig-columns`.

{% include code.html info="Images from: _data/ig-pets.yml" %}
{% raw %}
```html
{% include image/grid.html ig-data="ig-pets" ig-columns="2" %}
```
{% endraw %}

{% include image/grid.html ig-data="ig-pets" ig-columns="2" %}

[↑↑↑](#){: .back-to-top}
