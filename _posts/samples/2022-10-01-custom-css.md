---
layout: post
title: "samples/custom-css"
description: "Add custom css to a post"
date: 2022-10-01
ext_css:
  - custom
  - skeletor-dark
  - skeletor-light
author: Corbs
category: samples
tags:
  - css
  - sample
  - yummo
---

{% include toc.html header="h3" text="Table of Contents" %}

### Custom CSS

You can insert custom CSS styling by adding the names of your `.css` files to the `ext-css` front-matter variable on a page or post.

For example, the front-matter for this post adds the following stylesheets to the page.

* `/assets/ext/css/custom.css`
* `/assets/ext/css/skeletor-light.css`
* `/assets/ext/css/skeletor-dark.css`

```yaml
layout: post
title: "samples/custom-css"
description: "Add custom css to a post"
ext_css:
  - custom
  - skeletor-dark
  - skeletor-light 
```

This results in the following `<link>` elements being added into `<head>`, __after__ the `main.css` stylesheet.

```html
<!-- Default site stylesheet -->
<link rel="stylesheet" href="/assets/css/main.css">
<!-- Custom stylesheets added by `ext_css` front-matter -->
<link rel="stylesheet" href="/assets/ext/css/custom.css">
<link rel="stylesheet" href="/assets/ext/css/skeletor-dark.css">
<link rel="stylesheet" href="/assets/ext/css/skeletor-light.css">
```

> __Note:__ The effect of adding custom stylesheets after `main.css` means you can completely override site styling on a page-by-page basis.
> * In this example the `skeletor-dark.css` and `skeletor-light.css` stylesheets override the theme selectors defined in `main.css`.
> * The `custom.css` stylesheet provides styles for the flexbox examples.

---

### Rubik's cube flexbox

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

### Flexbox samples

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