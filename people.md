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

{% for p in site.data.people %}{% if p.status == 'current' %}
{% include people.html %}{% endif %}
{% endfor %}

# Lab Alumni

{% for p in site.data.people %}{% if p.status == 'alumni' %}
{% include people.html %}{% endif %}
{% endfor %}

# Visiting Scholars

{% for p in site.data.people %}{% if p.role == 'visiting' %}
{% include people.html %}{% endif %}
{% endfor %}

