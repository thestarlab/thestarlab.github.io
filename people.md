---
layout: page
title: People
nav: people
---

<div class="row">

{% for p in site.data.people %}{% if p.pi %}
{% include people.html %}{% endif %}
{% endfor %}

</div>

# Current Members

<div class="row">

{% for p in site.data.people %}{% if p.role != 'visiting' %}
{% include people.html %}{% endif %}
{% endfor %}
</div>

# Visiting Scholars

<div class="row">

{% for p in site.data.people %}{% if p.role =='visiting' %}
{% include people.html %}{% endif %}
{% endfor %}

</div>

