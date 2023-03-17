---
title: References
slug: references
disable_toc: true
#class: references
---

This is an example chapter for citing references. 

See the [Scribbr citation generator](https://www.scribbr.com/citation/generator/) to generate citations in the desired style.
(These examples use APA style.)

### Citations in text

Here's an example citation to be included in a text, 
with a link to the references chapter:

```
[(Berg, 1997)](references.html#berg-1997)
```

...which renders as [(Berg, 1997)](references.html#berg-1997).

### Reference list

Use a "references" chapter in the book's end matter to list all of the complete citations,
and receive inbound links from the in-text citations.

To use a "hanging indent" citation style like APA,
either set `class: references` in the front matter of the references page,
or wrap them in a div like this directly in the markdown:

{% raw %}
```html
<div class="references" markdown="block">
```
{% endraw %}

In order to make inbound anchor links from in-text citations work,
we have to include a link in each reference (like the ISBN link below),
and assign it an `id` attribute with `{:#my-id}`.

{% raw %}
```
Berg, C. (1997). *Mastering Guitar Technique: Process and Essence (Classic Guitar).* Mel Bay Publications, Inc.
[ISBN 978-1-610-65058-8](https://en.wikipedia.org/wiki/Special:BookSources?isbn=978-1-610-65058-8){:#berg-1997}.
```
{% endraw %}

...which renders as below.

<div class="references" markdown="block">

## References


Berg, C. (1997). *Mastering Guitar Technique: Process and Essence (Classic Guitar).* Mel Bay Publications, Inc.
[ISBN 978-1-610-65058-8](https://en.wikipedia.org/wiki/Special:BookSources?isbn=978-1-610-65058-8){:#berg-1997}.

Berg, C. (2019). *Practicing Music by Design: Historic Virtuosi on Peak Performance* (1st ed.). Routledge.
[ISBN 978-0-429-57631-7](https://en.wikipedia.org/wiki/Special:BookSources?isbn=978-0-429-57631-7){:#berg-2019}.

...
</div>

---
```
This file is located at: {{ page.path }}
```
---
