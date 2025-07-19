---
layout: default
title: "First Year"
permalink: /firstyear/
refactor: true
pagination:
  enabled: true
  collection: firstyear
  per_page: 10
---

{% include lang.html %}

{% assign all_pinned = site.firstyear | where: 'pin', true %}
{% assign all_normal = site.firstyear | where_exp: 'item', 'item.pin != true and item.hidden != true' %}
<!-- Rest of your pagination logic here -->
