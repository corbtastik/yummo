---
layout: post
title: "samples/custom-css"
description: "Add custom css to a post"
date: 2022-10-01
ext_css: custom
author: Corbs
permalink: /samples/custom-css
slug: ext-css
category: samples
tags:
- css
- sample
- yummo
---

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

{% include code.html label="flex-row" %}
```css
.flex-row {
    display: flex;
    flex-direction: row;
}
```

A flexbox with no wrapping and 1 row with 5 items.

<div class="flex-row">
    <div class="flex-item">1</div>
    <div class="flex-item">2</div>
    <div class="flex-item">3</div>
    <div class="flex-item">4</div>
    <div class="flex-item">5</div>
</div>

A flexbox with no wrapping and 1 row with 20 items.

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

A flexbox with wrapping and 1 row with 20 items.

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

{% include code.html label="flex-row align-start" %}
```css
.flex-row {
    display: flex;
    flex-direction: row;
}

.align-start {
    align-items: flex-start;
}
```

A flexbox with no wrapping, align-items=flex-start and 1 row with 5 items.

<div class="flex-row align-start">
    <div class="flex-item">1</div>
    <div class="flex-item">2</div>
    <div class="flex-item">3</div>
    <div class="flex-item">4</div>
    <div class="flex-item">5</div>
</div>

A flexbox with no wrapping, align-items=flex-start and 1 row with 20 items.

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

A flexbox with wrapping, align-items=flex-start and 1 row with 20 items.

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

{% include code.html label="flex-row justify-start" %}
```css
.flex-row {
    display: flex;
    flex-direction: row;
}

.justify-start {
    justify-content: flex-start;
}
```

A flexbox with no wrapping, justify-content=flex-start and 1 row with 5 items.

<div class="flex-row justify-start">
    <div class="flex-item">1</div>
    <div class="flex-item">2</div>
    <div class="flex-item">3</div>
    <div class="flex-item">4</div>
    <div class="flex-item">5</div>
</div>

A flexbox with no wrapping, justify-content=flex-start and 1 row with 20 items.

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

A flexbox with wrapping, justify-content=flex-start and 1 row with 20 items.

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

{% include code.html label="flex-row justify-end" %}
```css
.flex-row {
    display: flex;
    flex-direction: row;
}

.justify-end {
    justify-content: flex-end;
}
```

A flexbox with no wrapping, justify-content=flex-end and 1 row with 5 items.

<div class="flex-row justify-end">
    <div class="flex-item">1</div>
    <div class="flex-item">2</div>
    <div class="flex-item">3</div>
    <div class="flex-item">4</div>
    <div class="flex-item">5</div>
</div>

A flexbox with no wrapping, justify-content=flex-end and 1 row with 20 items.

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

A flexbox with wrapping, justify-content=flex-end and 1 row with 20 items.

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

{% include code.html label="flex-row align-center justify-center" %}
```css
.flex-row {
    display: flex;
    flex-direction: row;
}

.align-center {
    align-items: center;
}

.justify-center {
    justify-content: center;
}
```

A flexbox with no wrapping, align-items=center, justify-content=center and 1 row with 5 items.

<div class="flex-row align-center justify-center">
    <div class="flex-item">1</div>
    <div class="flex-item">2</div>
    <div class="flex-item">3</div>
    <div class="flex-item">4</div>
    <div class="flex-item">5</div>
</div>

A flexbox with no wrapping, align-items=center, justify-content=center and 1 row with 20 items.

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

A flexbox with wrapping, align-items=center, justify-content=center and 1 row with 20 items.

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

{% include code.html label="flex-column" %}
```css
.flex-column {
    display: flex;
    flex-direction: column;
}
```

A flexbox with no wrapping and 1 column with 5 items.

<div class="flex-column">
    <div class="flex-item">1</div>
    <div class="flex-item">2</div>
    <div class="flex-item">3</div>
    <div class="flex-item">4</div>
    <div class="flex-item">5</div>
</div>

[↑↑↑](#){: .back-to-top}

---

{% include code.html label="flex-column justify-start" %}
```css
.flex-column {
    display: flex;
    flex-direction: column;
}

.justify-start {
    justify-content: flex-start;
}
```

A flexbox with no wrapping, justify-content=flex-start and 1 column with 5 items.

<div class="flex-column justify-start">
    <div class="flex-item">1</div>
    <div class="flex-item">2</div>
    <div class="flex-item">3</div>
    <div class="flex-item">4</div>
    <div class="flex-item">5</div>
</div>

[↑↑↑](#){: .back-to-top}

---

{% include code.html label="flex-column align-start" %}
```css
.flex-column {
    display: flex;
    flex-direction: column;
}

.align-start {
    align-items: flex-start;
}
```

A flexbox with no wrapping, align-items=flex-start and 1 column with 5 items.

<div class="flex-column align-start">
    <div class="flex-item">1</div>
    <div class="flex-item">2</div>
    <div class="flex-item">3</div>
    <div class="flex-item">4</div>
    <div class="flex-item">5</div>
</div>

[↑↑↑](#){: .back-to-top}

---

{% include code.html label="flex-column align-end" %}
```css
.flex-column {
    display: flex;
    flex-direction: column;
}

.align-end {
    align-items: flex-end;
}
```

A flexbox with no wrapping, align-items=flex-end and 1 column with 5 items.

<div class="flex-column align-end">
    <div class="flex-item">1</div>
    <div class="flex-item">2</div>
    <div class="flex-item">3</div>
    <div class="flex-item">4</div>
    <div class="flex-item">5</div>
</div>

[↑↑↑](#){: .back-to-top}

---

{% include code.html label="flex-column align-center justify-center" %}
```css
.flex-column {
    display: flex;
    flex-direction: column;
}

.align-center {
    align-items: center;
}

.justify-content {
    justify-content: center;
}
```

A flexbox with no wrapping, align-items=center, justify-content=center and 1 column with 5 items.

<div class="flex-column align-center justify-center">
    <div class="flex-item">1</div>
    <div class="flex-item">2</div>
    <div class="flex-item">3</div>
    <div class="flex-item">4</div>
    <div class="flex-item">5</div>
</div>

[↑↑↑](#){: .back-to-top}

---

#### A rubik's cube

Remember that each "flex-row" is a "flexbox" unto itself (i.e. `display: flex`). So if we use multiple flexboxes we need to manage the margins to make things tidy.

<div class="flex-row-auto align-center justify-center">
    <div class="flex-item color-rubik-green"></div>
    <div class="flex-item color-rubik-blue"></div>
    <div class="flex-item color-rubik-white"></div>
</div>
<div class="flex-row-auto align-center justify-center">
    <div class="flex-item color-rubik-blue"></div>
    <div class="flex-item color-rubik-orange"></div>
    <div class="flex-item color-rubik-white"></div>
</div>
<div class="flex-row-auto align-center justify-center">
    <div class="flex-item color-rubik-yellow"></div>
    <div class="flex-item color-rubik-red"></div>
    <div class="flex-item color-rubik-blue"></div>
</div>

[↑↑↑](#){: .back-to-top}

---

#### Flexbox References

1. [Stackoverflow > Make flex container take width of content, not width 100%](https://stackoverflow.com/questions/42686681/make-flex-container-take-width-of-content-not-width-100)

[↑↑↑](#){: .back-to-top}