---
layout: home
title: Jekyll Chapterbook Theme
permalink: /
---

This is a [Jekyll](https://jekyllrb.com/) theme based on [GitBook](https://www.gitbook.com/) that adds support for easily organizing pages into book chapters and parts.
It doesn't rely on any plugins,
so it works natively with [GitHub Pages](https://pages.github.com/).

This theme was originally based on Tao He’s clever and immensely helpful [jekyll-gitbook](https://github.com/sighingnow/jekyll-gitbook) theme, 
which in turn is based on an early theme of [GitBook](https://www.gitbook.com/).

## Demos

### Demo on GitHub pages

[jasongrimes.github.io/jekyll-chapterbook/](https://jasongrimes.github.io/jekyll-chapterbook/)

Also see its 
[GitHub repo](https://github.com/jasongrimes/jekyll-chapterbook).

### Example live site

A live site with a more complex configuration can be seen at 
[fretboardfoundation.com](https://fretboardfoundation.com).

Also see its 
[GitHub repo](https://github.com/jasongrimes/fretboardfoundation).

## Why this theme

This theme is intended to help with gradually writing a book over a long period of time,
starting from an idea and slowly building out chapters and parts.

It was created with the following objectives:

- Support all standard parts of a book, including front matter, back matter, chapters, parts, etc.
- Support frequently reorganizing chapters and parts without breaking existing links.
- Make the work in progress publicly available in a useful way, 
  while making drafts that aren't ready for public consumption available without interrupting the flow of completed chapters.
- Support quickly editing the book on-the-fly, especially from mobile.
- Run natively on GitHub Pages without custom plugins.
- Automatically number parts and chapters.
- Make the markdown source files for each chapter  appear in order on the filesystem and on GitHub,
  regardless of the chapter name, without having to manually renumber.
  (This makes it easier to find the page you want to edit.)

## Getting started

### Install the theme

Install this theme [like any other Jekyll theme](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/adding-a-theme-to-your-github-pages-site-using-jekyll).
For example, you could:
- [Fork this repository](https://github.com/jasongrimes/jekyll-chapterbook/fork) and add your markdown pages to the `_chapters` folder.
- Use it as a remote theme in your `_config.yml`,
and then copy in the configuration from  [`jekyll-chapterbook/_config.yml`](https://github.com/jasongrimes/jekyll-chapterbook/blob/master/_config.yml).

```yaml
remote_theme: jasongrimes/jekyll-chapterbook
```

### Create some chapters

Each chapter is written in its own [Jekyll page](https://jekyllrb.com/docs/pages/),
and stored in the [`_chapters/`](https://github.com/jasongrimes/jekyll-chapterbook/tree/master/_chapters) directory.

Name your chapters something like `010-my-chapter.md`, `020-my-next-chapter.md`, etc.
(The numbers are used to list chapters in the desired order.
More on that later.)

Create chapters with the following front matter:

```yaml
---
title: 
slug:
abstract:
---
```

- `title`: The chapter name / page title.
- `slug`: Used to create the chapter URL and for internal links. Must be unique.
- `abstract`: (Optional.) Shown at the top of a chapter and in the full table of contents.

Chapters also support these other front matter variables,
though they are less common.

- `published`: If `false`, the chapter will not be rendered and will not be included in the chapter numbering. 
- `disable_toc`: If `true`, don't render the chapter's headings as a table of contents at the top of the page.
- `class`: Optionally specify CSS class(es) to add to the `<div>` wrapping the page.

Here's the [markdown for an example chapter](https://raw.githubusercontent.com/jasongrimes/jekyll-chapterbook/master/_chapters/010-getting-started.md)
and here is that [example chapter rendered in the demo](https://jasongrimes.github.io/jekyll-chapterbook/getting-started.html).

### Configure GitHub edit links

In the top navigation for every page,
there's a link to edit that page on GitHub.
This allows you to make quick edits while reviewing.
Upon saving the edit form at GitHub,
your GitHub Pages site can be automatically rebuilt and deployed.

This even works reasonably well from a mobile device.
The ability to review and edit from mobile is one of my favorite features of this theme.

Configure the GitHub link to your own project in `github_edit` in [_config.yml](https://github.com/jasongrimes/jekyll-chapterbook/blob/master/_config.yml).

```yaml
github_edit:
  enabled: true
  base_url: https://github.com/jasongrimes/jekyll-chapterbook/edit/master/
```

[See the demo for an example.](https://jasongrimes.github.io/jekyll-chapterbook/)

### Internal links

To help ensure internal links don't break in different environments,
when linking to another page in markdown, 
use the page's `slug` or `permalink`. 
For example, to link to a page with `slug:toc`:

{% raw %}
```
See the [table of contents](toc).
```
{% endraw %}

To insert a link to a chapter,
labeled with the chapter `title` and chapter number,
use the `chapter-link.html` helper:

For example:

{% raw %}
```
See {% include chapter-link.html slug="variables" %}.
```
{% endraw %}

See an [example chapter link](https://jasongrimes.github.io/jekyll-chapterbook/helpers#chapter-links) in the demo.

## File organization

### Chapter file names

Each chapter is written in its own [Jekyll page](https://jekyllrb.com/docs/pages/),
and stored in the [`_chapters/`](https://github.com/jasongrimes/jekyll-chapterbook/tree/master/_chapters) directory.

The file name of a chapter is never shown in the book---chapters 
are automatically numbered,
and the chapter name and link comes from the front matter `title` and `slug`.
The chapter file name is only used for determining the order of the chapters.
It should begin with a number and a dash,
so it appears in the correct order,
plus a name that makes it easy for you to identify.

For example:

```
_chapters/
    010-intro.md
    020-thesis.md
    030-antithesis.md
    040-conclusion.md
```

By using 3-digit numbers and incrementing them by 10 in this way,
we can easily reorganize files without having to rename them all.
For example,
we could add a "synthesis" chapter between "30-antithesis" and "40-conclusion" by prefixing it with a number between 30 and 40. 

```
_chapters/
    010-intro.md
    020-thesis.md
    030-antithesis.md
    035-synthesis.md
    040-conclusion.md
```

### Part directories

Chapters can optionally be grouped into "Parts",
by adding subdirectories to the `_chapters` directory,
and moving the chapter files into them.
Part directory names should begin with a number so they appear in the correct order,
just like chapters.
But unlike chapters, 
the directory name (without the numeric prefix) is also shown in the book as the part name. 

```
_chapters/
    010-thesis/
        010-overview.md
        020-blah-blah.md
    020-antithesis/
        010-underview.md
        030-blather.md
```

### Special parts for book front and back matter

Books typically include material at the front,
like a table of contents and introduction,
and material at the back,
like a glossary or index.
(In book publishing,
this is called "front matter" and "back matter",
not to be confused with the "front matter" variables in Jekyll pages).

This front and back matter is not included in the rest of the book's chapter and page numbering,
and it is never grouped into a "part",
even when the other chapters are.

To support this special material,
there are two optional special part directories:
`000-front/` and `999-back/`.
Chapter pages stored in these special part directories appear before or after the other parts,
and the chapters within them are not numbered.

```
_chapters/
    000-front/
        010-toc.md
        015-preface.md
        020-introduction.md
    010-thesis/
        010-overview.md
        020-blah-blah.md
    050-antithesis/
        010-underview.md
        030-not-blah.md
    999-back/
        010-references.md
```

The above would render as something like this:
- Contents
- Preface
- Introduction
- Part I: Thesis
  - Chapter 1: Overview of my thesis
  - Chapter 2: Blah, I say
- Part II: Antithesis
  - Chapter 3: Under the overview
  - Chapter 4: Not blah, I retort
- References

See a live site with multiple parts and front and back matter at
[fretboardfoundation.com/toc](https://fretboardfoundation.com/toc)
and its [_chapters/](https://github.com/jasongrimes/fretboardfoundation/tree/main/_chapters) directory.

### Drafts and outlines

A chapter can be marked as a "draft" by renaming the file and adding `.draft` to the numeric prefix, like this:

    010.draft-introduction.md

Draft chapters are not listed in the table of contents,
and they are not included in the chapter numberings.
(To see in your dev environment how all the drafts _would_ be numbered if they weren't drafts,
set `show_drafts_in_dev: true` in [_config.yml](https://github.com/jasongrimes/jekyll-chapterbook/blob/master/_config.yml).)

But drafts _are_ listed in the book "outline".
This enables a workflow in which you start with an outline of your book,
made with empty draft chapters having just a `title` and maybe an `abstract`,
ordered and grouped into parts as needed (and frequently reorganized).

Then you can flesh out the chapters over time,
and when ready,
remove the `.draft` from the file name so it appears in the book.

See an [example draft chapter](https://jasongrimes.github.io/jekyll-chapterbook/draft.html)
and an [example outline](https://jasongrimes.github.io/jekyll-chapterbook/outline.html).

## Non-book pages

Your site will probably have other pages besides the contents of your book
(like an about page, a home page, etc.).

Create these like a regular Jekyll page and store them in the project root directory.
In the page front matter,
set `layout: page` and make sure to set the `title` and `permalink`.

```yaml
title: About this site
permalink: /about
layout: page
```

Then manually add links to your page using the permalink.

Here's an [example of a non-book page](https://jasongrimes.github.io/jekyll-chapterbook/privacy.html).

## Home page

Create your site's home page at `/index.md`,
and use `layout: home`.

```yaml
---
layout: home
title: Fretboard Foundation
subtitle: Practical building-blocks for intermediate guitarists.
---
```

If there is no `/index.md`,
the `/README.md` will be used instead.

## Navigation

The book's automatically-generated table of contents is shown in the sidebar.

To show additional links above the toc in the sidebar,
define them in `sidebar_nav_top` in [_config.yml](https://github.com/jasongrimes/jekyll-chapterbook/blob/master/_config.yml).

```yaml
sidebar_nav_top:
- label: About this site
  url: /about
```

To show additional links at the bottom of the sidebar,
define them in `sidebar_nav_bottom` in [_config.yml](https://github.com/jasongrimes/jekyll-chapterbook/blob/master/_config.yml).

```yaml
sidebar_nav_bottom:
- label: Privacy statement
  url: /privacy
```

To change the links shown at the bottom of every page,
define them in `bottom_nav` in [_config.yml](https://github.com/jasongrimes/jekyll-chapterbook/blob/master/_config.yml).

```yaml
bottom_nav:
- label: Home
  url: /
- label: Contents
  url: /toc
- label: About
  url: /about
- label: Privacy
  url: /privacy
```

## Include "helpers"

In order for this theme to work natively with GitHub pages,
it can't use any custom Jekyll plugins.
But it _can_ do any logic and data manipulation supported by the template language, Liquid.

So this theme makes extensive use of Liquid templates to act as "helpers",
by including them in a page and passing them parameters using Jekyll's standard [`include`](https://jekyllrb.com/docs/includes/) tag.

See [helpers in the demo](https://jasongrimes.github.io/jekyll-chapterbook/helpers.html) for details.

### Chapter links

The `chapter-link.html` helper renders a link to the chapter with the specified `slug`,
using its current title and chapter number.

For example:
{% raw %}
```
See {% include chapter-link.html slug="harmony-intro" %}.
```
{% endraw %}

Parameters:
- `slug`: Required. The `slug` of the chapter to link to.
- `anchor`: An optional anchor tag to append to the chapter link.

See an [example chapter link](https://jasongrimes.github.io/jekyll-chapterbook/helpers#chapter-links).

### Tables of contents

The `chapterbook-toc.html` helper allows you to make a table of contents page,
including chapter abstracts (if any).

Parameters:
- `show_drafts`: If `true`, also show draft chapters. Useful for showing an "outline" view of the book.


{% raw %}
```liquid
{% include chapterbook-toc.html %}
```
{% endraw %}

See an [example table of contents](https://jasongrimes.github.io/jekyll-chapterbook/toc.html) 
and [draft outline](https://jasongrimes.github.io/jekyll-chapterbook/outline) in the demo.

### Figures

The `figure.html` helper renders images as figures in the book.

Parameters:
- `url`: The relative URL to the image (appended to `site.baseurl`).
- `caption`: An optional caption to render beneath the figure.
- `class`: an optional `class` attribute to add to the the HTML `<figure>` tag.

See an [example figure](https://jasongrimes.github.io/jekyll-chapterbook/helpers.html#figures) in the demo.

### Theme variables

The `chapter-vars.html` helper sets a number of variables related to chapters and parts
which can be accessed in markdown files or Liquid templates.
It can also render the variables for inspection, 
to help with debugging.

Parameters:
- `id`: The `page.id` of the chapter page for which to set variables.
- `slug`: The `page.slug` of the chapter page for which to set variables (ignored if `id` is passed).
- `withnum`: For performance reasons, chapter and part numbers are not computed unless `withnum` is `true`. (To compute only chapter or only part numbers, set `withnum=part` or `withnum=chapter` instead.)
- `inspect`: If true, render the variables to the page, for debugging.

See [example chapter vars](https://jasongrimes.github.io/jekyll-chapterbook/variables.html) in the demo.

## Wide tables

Tables can be created using normal [GitHub-flavored markdown](https://github.github.com/gfm/#tables-extension-). 

To prevent wide tables from breaking the book layout on mobile devices,
wrap them in a `<div>` directly in the markdown file, 
with `class="table-wrapper"` and the attribute `markdown="block"`.

See an example of [mobile-friendly wide tables](https://jasongrimes.github.io/jekyll-chapterbook/wide-tables.html) in the demo.

## References and citations

See [example citations and references list](https://jasongrimes.github.io/jekyll-chapterbook/references.html) in the demo.

## Extra CSS or javascript files

You can add extra CSS or JavaScript references in `_config.yml`:

- `extra_css`: for additional style sheets. If the url does not start with http, the path must be relative to the root of the site, without a starting `/`.
- `extra_header_js`: for additional scripts to be included in the `<head>` tag, after the `extra_css` has been added. If the url does not start by http, the path must be relative to the root of the site, without a starting `/`.
- `extra_footer_js`: for additional scripts to be included at the end of the HTML document, just before the site tracking script. If the url does not start by http, the path must be relative to the root of the site, without a starting `/`.

## Customizing font settings

The fonts can be customized by modifying the `.book.font-family-0` and `.book.font-family-1` entry in `./assets/gitbook/custom.css`.

```css
.book.font-family-0 {
    font-family: Georgia, serif;
}
.book.font-family-1 {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
}
```


## License

Copyright &copy; 2023 Jason Grimes.

This work is open source,
made available under the [Apache License, Version 2.0](https://github.com/jasongrimes/jekyll-chapterbook/blob/master/LICENSE).

Originally based on [jekyll-gitbook](https://github.com/sighingnow/jekyll-gitbook), 
which was Copyright 2019 Tao He,
and licensed under the [Apache License, Version 2.0](https://github.com/sighingnow/jekyll-gitbook/blob/f286e81abb57c91b7056d043d846cd308c8ea292/LICENSE).


