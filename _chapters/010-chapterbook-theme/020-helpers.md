---
title: Helper includes
slug: helpers
abstract: Helper methods, of a sort, using Jekyll includes.
---

In order for this theme to work natively with GitHub pages,
it can't use any custom Jekyll plugins.
But it _can_ do any logic and data manipulation supported by the template language, Liquid.

So this theme makes extensive use of Liquid templates to act as "helpers",
by including them in a page and passing them parameters using Jekyll's standard [`include`](https://jekyllrb.com/docs/includes/) tag.

## Chapter links

The `chapter-link.html` helper renders a link to the chapter with the specified `slug`,
using its current title and chapter number.

{% raw %}
```liquid
See {% include chapter-link.html slug="variables" %}.
```
{% endraw %}

...renders as: See {% include chapter-link.html slug="variables" %}.


Parameters:
- `slug`: Required. The `slug` of the chapter to link to.
- `anchor`: An optional anchor tag to append to the chapter link.

## Tables of contents

The `chapterbook-toc.html` helper allows you to make a table of contents page,
including chapter abstracts (if any).

Parameters:
- `show_drafts`: If `true`, also show draft chapters. Useful for showing an "outline" view of the book.


See example [Table of Contents](toc.html), rendered with:
{% raw %}
```liquid
{% include chapterbook-toc.html %}
```
{% endraw %}

See example [draft outline](outline.html), rendered with:
{% raw %}
```liquid
{% include chapterbook-toc.html show_drafts=true %}
```
{% endraw %}

## Figures

The `figure.html` helper renders images as figures in the book.

Parameters:
- `url`: The relative URL to the image (appended to `site.baseurl`).
- `caption`: An optional caption to render beneath the figure.
- `class`: an optional `class` attribute to add to the the HTML `<figure>` tag.

For example:

{% raw %}
```jekyll
{% include figure.html
    caption="C major chord shape."
    url="/assets/demo/C-maj.svg"
    class="row"
%}
```
{% endraw %}

...renders as:

{% include figure.html
    caption="C major chord shape."
    url="/assets/demo/C-maj.svg"
    class="row"
%}


## Theme variables

This theme makes a number of variables related to chapters and parts available to markdown files and Liquid templates.

See {% include chapter-link.html slug="variables" %} for details.



---
```
This file is located at: {{ page.path }}
```
---