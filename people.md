---
layout: page
title: People
nav: people
---

<div class="row">

{% for p in site.data.people %}{% if p.role == 'pi' %}
{% include people.html %}{% endif %}
{% endfor %}

</div>

# Current Members

<div class="row">

{% for p in site.data.people %}{% if p.role != 'pi' and p.current == 'yes' %}
{% include people.html %}{% endif %}
{% endfor %}

</div>

# Alumni

{% for p in site.data.people %}{% if p.role != 'pi' and p.current != 'yes' %}
{% include people.html %}{% endif %}
{% endfor %}

# Visiting Scholars

<div class="row">

{% for p in site.data.people %}{% if p.role =='visiting' and p.current == 'yes' %}
{% include people.html %}{% endif %}
{% endfor %}

</div>

