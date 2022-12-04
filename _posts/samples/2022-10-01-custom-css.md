---
layout: post
title: "samples/custom-css"
description: "Add custom css to a post"
date: 2022-10-01
ext_css: custom
author: Corbs
category: samples
tags:
  - css
  - sample
  - yummo
---

{% include toc.html header="h3" text="Table of Contents" %}

You can insert custom CSS styling for a page or post by adding front matter.

For example this post uses:

```yaml
# name of css file in /assets/ext/css/ without .css ext
ext_css: custom
```

Which adds the following into `<head>`.

```html
<link rel="stylesheet" href="/assets/ext/css/custom.css"/>
```

> __Note__ Take care when adding custom css to ensure you don't clash with Yummo based styling.

The styles in `custom.css` are applied to the flexbox examples below.

---

#### Rubik's cube flexbox

<div class="rubik-cube-row">
    <div class="flex-item red"></div>
    <div class="flex-item yellow"></div>
    <div class="flex-item green"></div>
</div>
<div class="rubik-cube-row">
    <div class="flex-item blue"></div>
    <div class="flex-item orange"></div>
    <div class="flex-item white"></div>
</div>
<div class="rubik-cube-row">
    <div class="flex-item yellow"></div>
    <div class="flex-item red"></div>
    <div class="flex-item blue"></div>
</div>

[↑↑↑](#){: .back-to-top}

---

#### Flexbox samples

* A flexbox with no wrapping and 5 items.

<div class="flex-row">
    <div class="flex-item">1</div>
    <div class="flex-item">2</div>
    <div class="flex-item">3</div>
    <div class="flex-item">4</div>
    <div class="flex-item">5</div>
</div>

* Items are squished when we add lots of them to a flexbox with no wrapping.

<div class="flex-row">
    <div class="flex-item">1</div>
    <div class="flex-item">2</div>
    <div class="flex-item">3</div>
    <div class="flex-item">4</div>
    <div class="flex-item">5</div>
    <div class="flex-item">6</div>
    <div class="flex-item">7</div>
    <div class="flex-item">8</div>
    <div class="flex-item">9</div>
    <div class="flex-item">10</div>
    <div class="flex-item">11</div>
    <div class="flex-item">12</div>
    <div class="flex-item">13</div>
    <div class="flex-item">14</div>
    <div class="flex-item">15</div>
    <div class="flex-item">16</div>
    <div class="flex-item">17</div>
    <div class="flex-item">18</div>
    <div class="flex-item">19</div>
    <div class="flex-item">20</div>
</div>

* A flexbox with wrapping and lots of items.

<div class="flex-row-wrap">
    <div class="flex-item">1</div>
    <div class="flex-item">2</div>
    <div class="flex-item">3</div>
    <div class="flex-item">4</div>
    <div class="flex-item">5</div>
    <div class="flex-item">6</div>
    <div class="flex-item">7</div>
    <div class="flex-item">8</div>
    <div class="flex-item">9</div>
    <div class="flex-item">10</div>
    <div class="flex-item">11</div>
    <div class="flex-item">12</div>
    <div class="flex-item">13</div>
    <div class="flex-item">14</div>
    <div class="flex-item">15</div>
    <div class="flex-item">16</div>
    <div class="flex-item">17</div>
    <div class="flex-item">18</div>
    <div class="flex-item">19</div>
    <div class="flex-item">20</div>
</div>

[↑↑↑](#){: .back-to-top}

---

* A flexbox with no wrapping and align-items=flex-start.

<div class="flex-row align-start">
    <div class="flex-item">1</div>
    <div class="flex-item">2</div>
    <div class="flex-item">3</div>
    <div class="flex-item">4</div>
    <div class="flex-item">5</div>
</div>

* A flexbox with no wrapping, align-items=flex-start and lots of items (which are squished because of space).

<div class="flex-row align-start">
    <div class="flex-item">1</div>
    <div class="flex-item">2</div>
    <div class="flex-item">3</div>
    <div class="flex-item">4</div>
    <div class="flex-item">5</div>
    <div class="flex-item">6</div>
    <div class="flex-item">7</div>
    <div class="flex-item">8</div>
    <div class="flex-item">9</div>
    <div class="flex-item">10</div>
    <div class="flex-item">11</div>
    <div class="flex-item">12</div>
    <div class="flex-item">13</div>
    <div class="flex-item">14</div>
    <div class="flex-item">15</div>
    <div class="flex-item">16</div>
    <div class="flex-item">17</div>
    <div class="flex-item">18</div>
    <div class="flex-item">19</div>
    <div class="flex-item">20</div>
</div>

* A flexbox with wrapping, align-items=flex-start and lots of items.

<div class="flex-row-wrap align-start">
    <div class="flex-item">1</div>
    <div class="flex-item">2</div>
    <div class="flex-item">3</div>
    <div class="flex-item">4</div>
    <div class="flex-item">5</div>
    <div class="flex-item">6</div>
    <div class="flex-item">7</div>
    <div class="flex-item">8</div>
    <div class="flex-item">9</div>
    <div class="flex-item">10</div>
    <div class="flex-item">11</div>
    <div class="flex-item">12</div>
    <div class="flex-item">13</div>
    <div class="flex-item">14</div>
    <div class="flex-item">15</div>
    <div class="flex-item">16</div>
    <div class="flex-item">17</div>
    <div class="flex-item">18</div>
    <div class="flex-item">19</div>
    <div class="flex-item">20</div>
</div>

[↑↑↑](#){: .back-to-top}

---

* A flexbox with no wrapping, justify-content=flex-start and a few items.

<div class="flex-row justify-start">
    <div class="flex-item">1</div>
    <div class="flex-item">2</div>
    <div class="flex-item">3</div>
    <div class="flex-item">4</div>
    <div class="flex-item">5</div>
</div>

* A flexbox with no wrapping, justify-content=flex-start and lots of squished items.

<div class="flex-row justify-start">
    <div class="flex-item">1</div>
    <div class="flex-item">2</div>
    <div class="flex-item">3</div>
    <div class="flex-item">4</div>
    <div class="flex-item">5</div>
    <div class="flex-item">6</div>
    <div class="flex-item">7</div>
    <div class="flex-item">8</div>
    <div class="flex-item">9</div>
    <div class="flex-item">10</div>
    <div class="flex-item">11</div>
    <div class="flex-item">12</div>
    <div class="flex-item">13</div>
    <div class="flex-item">14</div>
    <div class="flex-item">15</div>
    <div class="flex-item">16</div>
    <div class="flex-item">17</div>
    <div class="flex-item">18</div>
    <div class="flex-item">19</div>
    <div class="flex-item">20</div>
</div>

* A flexbox with wrapping, justify-content=flex-start and lots of orderly items.

<div class="flex-row-wrap justify-start">
    <div class="flex-item">1</div>
    <div class="flex-item">2</div>
    <div class="flex-item">3</div>
    <div class="flex-item">4</div>
    <div class="flex-item">5</div>
    <div class="flex-item">6</div>
    <div class="flex-item">7</div>
    <div class="flex-item">8</div>
    <div class="flex-item">9</div>
    <div class="flex-item">10</div>
    <div class="flex-item">11</div>
    <div class="flex-item">12</div>
    <div class="flex-item">13</div>
    <div class="flex-item">14</div>
    <div class="flex-item">15</div>
    <div class="flex-item">16</div>
    <div class="flex-item">17</div>
    <div class="flex-item">18</div>
    <div class="flex-item">19</div>
    <div class="flex-item">20</div>
</div>

[↑↑↑](#){: .back-to-top}

---

* A flexbox with no wrapping, justify-content=flex-end and a few items.

<div class="flex-row justify-end">
    <div class="flex-item">1</div>
    <div class="flex-item">2</div>
    <div class="flex-item">3</div>
    <div class="flex-item">4</div>
    <div class="flex-item">5</div>
</div>

* A flexbox with no wrapping, justify-content=flex-end and lots of smashed items.

<div class="flex-row justify-end">
    <div class="flex-item">1</div>
    <div class="flex-item">2</div>
    <div class="flex-item">3</div>
    <div class="flex-item">4</div>
    <div class="flex-item">5</div>
    <div class="flex-item">6</div>
    <div class="flex-item">7</div>
    <div class="flex-item">8</div>
    <div class="flex-item">9</div>
    <div class="flex-item">10</div>
    <div class="flex-item">11</div>
    <div class="flex-item">12</div>
    <div class="flex-item">13</div>
    <div class="flex-item">14</div>
    <div class="flex-item">15</div>
    <div class="flex-item">16</div>
    <div class="flex-item">17</div>
    <div class="flex-item">18</div>
    <div class="flex-item">19</div>
    <div class="flex-item">20</div>
</div>

* A flexbox with wrapping, justify-content=flex-end and lots of happy items.

<div class="flex-row-wrap justify-end">
    <div class="flex-item">1</div>
    <div class="flex-item">2</div>
    <div class="flex-item">3</div>
    <div class="flex-item">4</div>
    <div class="flex-item">5</div>
    <div class="flex-item">6</div>
    <div class="flex-item">7</div>
    <div class="flex-item">8</div>
    <div class="flex-item">9</div>
    <div class="flex-item">10</div>
    <div class="flex-item">11</div>
    <div class="flex-item">12</div>
    <div class="flex-item">13</div>
    <div class="flex-item">14</div>
    <div class="flex-item">15</div>
    <div class="flex-item">16</div>
    <div class="flex-item">17</div>
    <div class="flex-item">18</div>
    <div class="flex-item">19</div>
    <div class="flex-item">20</div>
</div>

[↑↑↑](#){: .back-to-top}

---

* A flexbox with no wrapping, align-items=center, justify-content=center and a few centered items.

<div class="flex-row align-center justify-center">
    <div class="flex-item">1</div>
    <div class="flex-item">2</div>
    <div class="flex-item">3</div>
    <div class="flex-item">4</div>
    <div class="flex-item">5</div>
</div>

* A flexbox with no wrapping, align-items=center, justify-content=center and lots of crowded items.

<div class="flex-row align-center justify-center">
    <div class="flex-item">1</div>
    <div class="flex-item">2</div>
    <div class="flex-item">3</div>
    <div class="flex-item">4</div>
    <div class="flex-item">5</div>
    <div class="flex-item">6</div>
    <div class="flex-item">7</div>
    <div class="flex-item">8</div>
    <div class="flex-item">9</div>
    <div class="flex-item">10</div>
    <div class="flex-item">11</div>
    <div class="flex-item">12</div>
    <div class="flex-item">13</div>
    <div class="flex-item">14</div>
    <div class="flex-item">15</div>
    <div class="flex-item">16</div>
    <div class="flex-item">17</div>
    <div class="flex-item">18</div>
    <div class="flex-item">19</div>
    <div class="flex-item">20</div>
</div>

* A flexbox with wrapping, align-items=center, justify-content=center and lots of centered items.

<div class="flex-row-wrap align-center justify-center">
    <div class="flex-item">1</div>
    <div class="flex-item">2</div>
    <div class="flex-item">3</div>
    <div class="flex-item">4</div>
    <div class="flex-item">5</div>
    <div class="flex-item">6</div>
    <div class="flex-item">7</div>
    <div class="flex-item">8</div>
    <div class="flex-item">9</div>
    <div class="flex-item">10</div>
    <div class="flex-item">11</div>
    <div class="flex-item">12</div>
    <div class="flex-item">13</div>
    <div class="flex-item">14</div>
    <div class="flex-item">15</div>
    <div class="flex-item">16</div>
    <div class="flex-item">17</div>
    <div class="flex-item">18</div>
    <div class="flex-item">19</div>
    <div class="flex-item">20</div>
</div>

[↑↑↑](#){: .back-to-top}

---

* A flexbox with 1 column.

<div class="flex-column">
    <div class="flex-item">1</div>
    <div class="flex-item">2</div>
    <div class="flex-item">3</div>
    <div class="flex-item">4</div>
    <div class="flex-item">5</div>
</div>

[↑↑↑](#){: .back-to-top}

---

* A flexbox column with items aligned to the end.

<div class="flex-column align-end">
    <div class="flex-item">1</div>
    <div class="flex-item">2</div>
    <div class="flex-item">3</div>
    <div class="flex-item">4</div>
    <div class="flex-item">5</div>
</div>

[↑↑↑](#){: .back-to-top}

---

* A flexbox column with items centered.

<div class="flex-column align-center justify-center">
    <div class="flex-item">1</div>
    <div class="flex-item">2</div>
    <div class="flex-item">3</div>
    <div class="flex-item">4</div>
    <div class="flex-item">5</div>
</div>

[↑↑↑](#){: .back-to-top}