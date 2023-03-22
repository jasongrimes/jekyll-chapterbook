---
title: Theme variables
slug: variables
abstract: This theme makes a number of variables related to chapters and parts available to markdown files and Liquid templates.
---

The `chapter-vars.html` helper sets a number of variables for this theme,
which can be accessed in markdown files and Liquid templates.
It can also render the variables for inspection.

Parameters:
- `id`: The `page.id` of the chapter page for which to set variables.
- `slug`: The `page.slug` of the chapter page for which to set variables (ignored if `id` is passed).
- `withnum`: For performance reasons, chapter and part numbers are not computed unless `withnum` is `true`. (To compute only chapter or only part numbers, set `withnum=part` or `withnum=chapter` instead.)
- `inspect`: If true, render the variables to the page, for debugging.

To set variables for the current chapter:

{% raw %}
```
{% include chapter-vars.html id=page.id withnum="true" %}
```
{% endraw %}

{% include chapter-vars.html id=page.id withnum="true" %}

Then access them like this: 

{% raw %}
```
**Chapter number:** {{ chapter_num }}
```
{% endraw %}

...which renders:
**Chapter number:** {{ chapter_num }}

To inspect all the variables, 
for debugging:

{% raw %}
```
{% include chapter-vars.html id=page.id inspect="true" withnum="true" %}
```
{% endraw %}

...which renders this:

{% include chapter-vars.html id=page.id inspect="true" withnum="true" %}

To set variables for a different chapter,
you can pass the chapter's `slug`,
like this:

{% raw %}
```
{% include chapter-vars.html slug="contents" withnum="true" inspect="true" %}
```
{% endraw %}

...which renders this:

{% include chapter-vars.html slug="contents" withnum="true" inspect="true" %}


---
```
This file is located at: {{ page.path }}
```
---
