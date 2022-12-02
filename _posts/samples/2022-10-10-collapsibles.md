---
layout: post
title: "samples/collapsibles"
description: "Collapsible elements"
date: 2022-10-10
ext_js: collapsibles
author: Corbs
category: samples
tags:
- collapsibles
- sample
- yummo
---

#### Collapsibles

<div>
    <button type="button" class="collapsible">
        Collapsible Text
    </button>
    <div class="content">
        <p>
            A baseball game is played between two teams, each usually composed of nine players, that take turns playing offense (batting and base running) and defense (pitching and fielding).
        </p>
    </div>
</div>

---

<div>
    <button type="button" class="collapsible">
        Collapsible Image
    </button>
    <div class="content">
        {%
            include image/image.html
            classes="is-circle-256"
            src="yolo/big-face-bucky.png"
            description="Bucky goes for a ride."
        %}
    </div>
</div>

---

<div>
    <button type="button" class="collapsible">
        Collapsible Image Grid
    </button>
    <div class="content">
        {% include image/grid.html %}
    </div>
</div>

---

<div>
    <button type="button" class="collapsible">
        Collapsible Prezo
    </button>
    <div class="content">
        {% include prezo.html title="blinged-macmini" %}
    </div>
</div>

---

<div>
    <button type="button" class="collapsible">
        Collapsible Videos
    </button>
    <div class="content">
        {% include video.html %}
    </div>
</div>

---

[↑↑↑](#){: .back-to-top}
