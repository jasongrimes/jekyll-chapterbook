---
slug: book
title: Demo Book
abstract: An example book for showcasing the Jekyll Chapterbook theme.
---

By Jason Grimes

Copyright &copy; {{"now" | date: "%Y"}} by {{site.author}}.

Last updated: {{ "now" | date: "%B %e, %Y" }}

{% if site.baseurl_canonical %}
  The latest version of this book can always be found at  
  <a href="{{site.baseurl_canonical}}{{page.url}}">{{site.baseurl_canonical}}{{page.url}}</a>.
{% endif %}

---
```
This file is located at: {{ page.path }}
```
---
