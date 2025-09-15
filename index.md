---
layout: layout.html
title: "Start"
---

<div class="mainContent">
{%- for post in collections.posts -%}
    <a href="{{ post.url }}">
        <div class="articleCard">
            <p class="category">{{ post.data.tags }}</p>
            <img src="{{ image }}" width="800">
            <div class="articleText">
                {%- if post.data.new === true -%}
                    <span class="breaking">NYTT</span>
                {%- endif -%}
                <span class="articleHeading">{{ post.data.title }}</span>
            </div>
        </div>
    </a>
{%- endfor -%}
</div>