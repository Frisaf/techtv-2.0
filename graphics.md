---
title: Vår Grafiska Profil
layout: post_layout.html
---
Tech TV använder sig av minimalistiska och moderna ikoner med futuristisk design, som speglar ett professionellt företag.

## Logotyp och Typsnitt

<img src="/images/logo.svg">

Tech TV använder sig av två huvudsakliga typsnitt på sin sida:

<ul>
    <li class="jaro">Jaro</li>
    <li>Ubuntu</li>
</ul>

## Färger

<div class="colorDisplay">
    {% for colour in colours.colours %}
        <div class="colorCard {{ colour.class }}">
            <p>{{ colour.name }}</p>
            <p>{{ colour.hex }}</p>
        </div>
    {% endfor %}
</div>

## Inspiration
Detta är ett skolarbete, och några av de hemsidor som inspirerat designen till Tech TV är:

- [Nvidia](https://nvidia.com)
- [AMD](https://amd.com)
- [Västerbotten-Kuriren](https://vk.se)
- [Sveriges Television (SVT)](https://svt.se)
- [TechRadar](https://techradar.com)

<div class="slideshow">
    {% for item in slides.items %}
        <div class="slides fade">
            <div class="numberText"><span>{{ item.index }} / 5</span></div>
            <img src="{{ item.image }}" alt="{{ item.alt }}">
            <div class="slideText"><span>{{ item.text }}</span></div>
        </div>
    {% endfor %}
    <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
    <a class="next" onclick="plusSlides(1)">&#10095;</a>
</div>
<br>
<div style="text-align:center">
    <span class="dot" onclick="currentSlide(1)"></span>
    <span class="dot" onclick="currentSlide(2)"></span>
    <span class="dot" onclick="currentSlide(3)"></span>
    <span class="dot" onclick="currentSlide(4)"></span>
    <span class="dot" onclick="currentSlide(5)"></span>
</div>