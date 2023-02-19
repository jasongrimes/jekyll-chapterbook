---
layout: home
title: Jekyll Chapterbook Theme
permalink: /
---

This is a [Jekyll](https://jekyllrb.com/) theme based on [GitBook](https://www.gitbook.com/) that adds support for easily organizing pages into book chapters and parts.
This theme doesn't rely on any plugins,
so it works with [GitHub Pages](https://pages.github.com/).

It was originally based on Tao He’s clever and immensely helpful [jekyll-gitbook](https://github.com/sighingnow/jekyll-gitbook) theme, 
which in turn is based on an early theme of [GitBook](https://www.gitbook.com/).

## Demo

A live site that uses this theme can be seen at [fretboardfoundation.com](https://fretboardfoundation.com)
([GitHub repo](https://github.com/jasongrimes/fretboardfoundation)).

## Why this theme

This theme is intended to help with gradually writing a book over a long period of time,
starting from an idea and slowly building out chapters and parts.

It was created with the following objectives:

- Support frequently reorganizing chapters and parts without breaking existing links.
- Support all standard book parts, including front matter, back matter, etc.
- Make the work in progress publicly available in a useful way, 
  while making drafts that aren't ready for public consumption available without interrupting the flow of completed chapters.
- Support quickly editing the book on-the-fly, especially from mobile.
- Run natively on GitHub Pages without custom plugins.
- Automatically number parts and chapters.
- Make the markdown source files for each chapter  appear in order on the filesystem and on GitHub,
  regardless of the chapter name, without having to manually renumber.
  (This makes it easier to find the page you want to edit.)

## Getting started

Install this theme like any other Jekyll theme.
See [the official guide](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/adding-a-theme-to-your-github-pages-site-using-jekyll) for details.
Use this theme for your site in one of the following ways:
- [Fork this repository](https://github.com/jasongrimes/jekyll-chapterbook/fork) and add your markdown pages to the `_chapters` folder.
- Use it as a remote theme in your [`_config.yml`](https://github.com/jasongrimes/jekyll-chapterbook/blob/master/_config.yml):

```yaml
remote_theme: jasongrimes/jekyll-chapterbook
```

### Deploy locally with Jekyll serve

This theme can be run locally using Ruby. 
See the GitHub documentation about [testing your GitHub Pages site locally with Jekyll](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/testing-your-github-pages-site-locally-with-jekyll).

## File organization

### Chapter file names

Each chapter is written in its own [Jekyll page](https://jekyllrb.com/docs/pages/),
and stored in the `_chapters` directory.

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
        010-introduction.md
    010-thesis/
        010-overview.md
        020-blah-blah.md
    050-antithesis/
        010-underview.md
        030-blather.md
    999-back/
        010-references.md
```

The above would render as something like this:
- Introduction
- Part I: Thesis
  - Chapter 1: Overview of my thesis
  - Chapter 2: Some blah chapter
- Part II: Antithesis
  - Chapter 3: Under the overview
  - Chapter 4: Blather...
- References

### Drafts

A chapter can be marked as a "draft" by renaming the file and adding `.draft` to the numeric prefix, like this:

    010.draft-introduction.md

Draft chapters are not listed in the table of contents,
and they are not included in the chapter numberings.
(To see in your dev environment how all the drafts _would_ be numbered if they weren't drafts,
set `show_drafts_in_dev: true` in [_config.yml](https://github.com/jasongrimes/jekyll-chapterbook/blob/master/_config.yml).)

But drafts _are_ listed in the book outline.
This enables a workflow in which you start with an outline of your book,
made with empty draft chapters having just a `title` and maybe an `abstract`,
ordered and grouped into parts as needed (and often changed, at first).

Then you can flesh out the chapters over time,
and when ready,
remove the `.draft` from the file name so it appears in the book.  


## Chapter front matter variables

This theme uses the following front matter variables in chapter pages.

- `title`: The chapter name / page title.
- `slug`: Used to create the chapter URL and for internal links.
- `abstract`: Shown at the top of a chapter and in the full table of contents.
- `published`: If `false`, the chapter will not be rendered and will not be included in the chapter numbering. 
- `disable_toc`: If `true`, don't render the chapter's headings as a table of contents at the top of the page.
- `class`: Optionally specify CSS class(es) to add to the `<div>` wrapping the page.

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
- label: Draft outline
  url: /outline
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

For example,
to link to a chapter with its current `title` and chapter number,
include the `chapter-link.html` helper in your markdown page,
and pass it the `slug` of the chapter to link to.

```markdown
For more information,
see {% include chapter-link.html slug="harmony-intro" %}.
```

### Chapter links

The `chapter-link.html` helper renders a link to the chapter with the specified `slug`,
using its current title and chapter number.

```
See {% include chapter-link.html slug="harmony-intro" %}.
```

...renders as: See [Chapter 6: Introduction to Western Harmony](/harmony-intro).

Parameters:
- `slug`: Required. The `slug` of the chapter to link to.
- `anchor`: An optional anchor tag to append to the chapter link.

### Tables of contents

The `toc-chapters-full.html` helper allows you to make a table of contents page,
including chapter abstracts (if any).

Parameters:
- `show_drafts`: If `true`, also show draft chapters. Useful for showing an "outline" view of the book.

For example,
to create a table of contents at the front of your book with the URL `/contents`,
create a `_chapters/000-front/010-toc.md` page with contents like the following.

```yaml
---
title: Table of contents
slug: contents
---

This book is still a work in progress.
The chapters currently available are listed below. 
See the [outline](outline) to learn what else is planned. 

{% include toc-chapters-full.html %}
```

To create an outline page,
add a file like `/draft-outline.md` with contents like the following.

```yaml
---
title: Draft outline
permalink: /outline
layout: page
---

An outline of the chapters planned for this book.
Most of them  have yet to be written.
Only the chapters with a checkmark appear in the contents and navigation. 

{% include toc-chapters-full.html show_drafts=true %}
```

### Figures

The `figure.html` helper renders images as figures in the book.

Parameters:
- `url`: The relative URL to the image (appended to `site.baseurl`).
- `caption`: An optional caption to render beneath the figure.
- `class`: an optional `class` attribute to add to the the HTML `<figure>` tag.

### Inspect chapterbook variables

## Wide tables

Tables can be created using normal [GitHub-flavored markdown](https://github.github.com/gfm/#tables-extension-). 

To prevent wide tables from breaking the book layout,
wrap them in a `<div>` directly in the markdown file, 
with `class="table-wrapper"` and the attribute `markdown="block"`.

```html
<div class="table-wrapper" markdown="block">

| Semi-tones (frets) | Interval   | Note from C | Short scale degree name | Scale degree name | Frequency ratio (dissonance) |
|:--:|:-------------------|:------:|:------:|:----------------------|:-----:|
| 0  | unison (P1)        | C      | 1      | tonic, one            | 1:1   |
| 1  | minor second (m2)  | C#/ Db | b2     | flat two              | 25:24 |
| 2  | major second (M2)  | D      | 2      | two                   | 9:8   |

</div>
```

...renders as:
<div class="table-wrapper" markdown="block">

| Semi-tones (frets) | Interval   | Note from C | Short scale degree name | Scale degree name | Frequency ratio (dissonance) |
|:--:|:-------------------|:------:|:------:|:----------------------|:-----:|
| 0  | unison (P1)        | C      | 1      | tonic, one            | 1:1   |
| 1  | minor second (m2)  | C#/ Db | b2     | flat two              | 25:24 |
| 2  | major second (M2)  | D      | 2      | two                   | 9:8   |

</div>

## Extra CSS or javascript files

You can add extra CSS or JavaScript references using configuration collections:

- extra_css: for additional style sheets. If the url does not start by http, the path must be relative to the root of the site, without a starting `/`.
- extra_header_js: for additional scripts to be included in the `<head>` tag, after the `extra_css` has been added. If the url does not start by http, the path must be relative to the root of the site, without a starting `/`.
- extra_footer_js: for additional scripts to be included at the end of the HTML document, just before the site tracking script. If the url does not start by http, the path must be relative to the root of the site, without a starting `/`.

## Customizing font settings

The fonts can be customized by modifying the `.book.font-family-0` and `.book.font-family-1` entry in [`./assets/gitbook/custom.css`][10],

```css
.book.font-family-0 {
    font-family: Georgia, serif;
}
.book.font-family-1 {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
}
```

## References

If you want to include citations and references in your book,
here are a few tips.

Use the [Scribbr citation generator](https://www.scribbr.com/citation/generator/) to generate citations in your desired style.
(The following examples use APA style.)

In-text example, 
with a link to the refetences chapter:

```
[(Vincent, 2011)](references#vincent-2011)
```

[(Vincent, 2011)](references#vincent-2011)

Reference list:

Use the `class: references` Front matter variable in the references chapter,
so that the citations are formatted with hanging indents.

Include a link in the citation (like the ISBN search below), 
and assign it an `id` attribute with `{:#my-id}` so the anchor links from in-text citations work.

```
Vincent, R. (2011). *Three-Note Voicings and Beyond.* Sher Music Co.
[ISBN search](https://en.wikipedia.org/wiki/Special:BookSources?isbn=1-883217-66-0){:#vincent-2011}
```

Vincent, R. (2011). *Three-Note Voicings and Beyond.* Sher Music Co.
[ISBN search](https://en.wikipedia.org/wiki/Special:BookSources?isbn=1-883217-66-0){:#vincent-2011}



## License

Copyright &copy; 2023 Jason Grimes.

This work is open source,
made available under the [Apache License, Version 2.0](https://github.com/jasongrimes/jekyll-chapterbook/blob/master/LICENSE).

Originally based on [jekyll-gitbook](https://github.com/sighingnow/jekyll-gitbook), 
which was Copyright 2019 Tao He,
and licensed under the [Apache License, Version 2.0](https://github.com/sighingnow/jekyll-gitbook/blob/f286e81abb57c91b7056d043d846cd308c8ea292/LICENSE).


