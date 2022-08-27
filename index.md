---
layout: page
nav: home
title: Spatiotemporal Pattern Analysis & Research Laboratory
---

<div class="row">

<div class="col-xs-12 col-md-12 col-lg-12 lead">
<img class="img-responsive" src="{{site.url}}/resources/showroom/CUB.jpg" width="1600px" height="300px" title="CU Boulder"> 
</div>
</div>

<div class="row">
<div class="col-xs-12 col-md-12 col-lg-12 lead" markdown="1">

Spatiotemporal Pattern Analysis & Research Laboratory (or **STAR lab**)
focuses on the developments and applications of formal (i.e., statistical
and computational) and technical methodologies to study complex
spatiotemporal patterns and dynamics in natural, social and technical
systems. Please read more about our work ([research](research) and
[papers](papers)), [who we are](people), and [possible
opportunities](opportunities).  

</div>

<div class="col-xs-8 col-md-8 col-lg-8" markdown="1">
## News & Events
 {% for post in site.posts limit:5 %}
  <b>{{ post.date | date: '%B %d, %Y' }}</b>: <a href="{{site.url}}{{post.url}}">{{ post.title }}</a><br />
  {% endfor %}
<a href="{{site.url}}/news/">More...</a>
</div>

<div class="col-xs-4 col-md-4 col-lg-4" markdown="1">
## Connect with us 
<div class="connect">
{% include footer.html %}
</div>

</div>




<!-- image carousel test -->
<!--
<div class="row">
<div class="col-md-2"> </div>
<div class="col-md-5">
 <div class="showroom">
<div> <img class="img-responsive" src="{{site.url}}/resources/showroom/twitter.png"
width="600" height="400"> </div>
<div><img class="img-responsive" src="{{site.url}}/resources/showroom/trees.png"
width="600" height="400"></div>
<div><img class="img-responsive" src="{{site.url}}/resources/showroom/geography.png"
width="600" height="400"></div>
  </div>
</div>
<div class="col-md-2"></div>
</div>
<script type="text/javascript">
$(document).ready(function(){
  $('.showroom').slick({
        dots: true,
	autoplay:true,
	speed:500
  });
});
</script>
-->

<!--
<div class="pure-u-1-2 graphlet d3"></div>
<script src="/resources/js/index-graph.js"></script>
-->
