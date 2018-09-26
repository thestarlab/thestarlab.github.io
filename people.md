---
layout: page
title: People
nav: people
---
<!--
<div class="row">

{% for p in site.data.people %}{% if p.role == 'pi' %}
{% include people.html %}{% endif %}
{% endfor %}

</div>
-->

# Current Members

<div class="row">

{% for p in site.data.people %}{% if p.status == 'current' %}
{% include people.html %}{% endif %}
{% endfor %}

</div>

# Lab Alumni

{% for p in site.data.people %}{% if p.status == 'alumni' %}
{% include people.html %}{% endif %}
{% endfor %}

# Visiting Scholars

<div class="row">

{% for p in site.data.people %}{% if p.role == 'visiting' %}
{% include people.html %}{% endif %}
{% endfor %}

</div>

