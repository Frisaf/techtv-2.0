---
layout: layout.html
title: "Start"
eleventyExcludeFromCollections: true
---

<div class="mainContent">
{%- for post in collections.posts -%}
    <a href="{{ post.url }}">
        <div class="articleCard">
        {%- for tag in post.data.tags -%}
            {%- if tag != "posts" -%}
                <p class="category">{{ tag }}</p>
            {%- endif -%}
        {%- endfor -%}
            <img eleventy:ignore src="{{ post.data.image }}" alt="{{ post.data.alt }}">
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
<div class="sidebar">
        <div class="briefing">
        <h3>Senaste inom gaming</h3>
        {%- for article in collections.Gaming | itemLimit(3) -%}
            <div class="articleLink">
                <span class="briefingText"><a href="{{ article.url }}">{{ article.data.title }}</a></span>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#31393C"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"></path></svg>
            </div>
        {%- endfor -%}
    </div>
    <div class="subscribeAd">
        <h2>Är du inte prenumerant!?</h2>
        <p>Att inte prenumerera på Tech TV är så 2024. Prenumerera idag och få tillgång till exklusiva premiumartiklar och andra bonusar!</p>
        <p>Anpassa din Tech TV upplevelse idag!</p>
        <div class="subscribeButton">
            <span>Prenumerera!</span>
        </div>
    </div>
    <div class="briefing">
        <h3>Mest lästa</h3>
        {%- for article in collections.all | randomLimit(3, page.url) -%}
            <div class="articleLink">
                <span class="briefingText"><a href="{{ article.url }}">{{ article.data.title }}</a></span>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#31393C"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"></path></svg>
            </div>
        {%- endfor -%}
    </div>