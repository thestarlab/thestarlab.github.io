---
layout: page
title: News
nav: 
---

<div class="col-md-12" markdown="1">
# News & Events
 {% for post in site.posts %}
  <b>{{ post.date | date: '%B %d, %Y' }}</b>: <a href="{{site.url}}{{post.url}}">{{ post.title }}</a><br />
  {% endfor %}
</div>
