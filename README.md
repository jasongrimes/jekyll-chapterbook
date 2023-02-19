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

Each chapter is written in its own Jekyll "page",
and stored in the `_chapters` directory.

The file name of a chapter is never shown in the book---chapters 
are automatically numbered,
and the chapter name and link comes from the frontmatter `title` and `slug`.
The chapter file name is only used for ordering. 
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

### Parts

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

### Special parts for "front" and "back" matter

Books typically include material at the front,
like a table of contents and introduction,
and material at the back,
like a glossary or index.
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

## Chapter front matter variables

This theme uses the following front matter variables in chapter pages.

- `title`: The chapter name / page title.
- `slug`: Used to create the chapter URL and for internal links.
- `abstract`: Shown at the top of a chapter and in the full table of contents.
- `published`: If `false`, the chapter will not be rendered and will not be included in the chapter numbering. 
- `disable_toc`: If `true`, don't render the chapter's headings as a table of contents at the top of the page.

## Drafts

A chapter can be marked as a "draft" by renaming the file and adding `.draft` to the numeric prefix, like this:

    010.draft-introduction.md

Draft chapters are not listed in the table of contents,
and they are not included in the chapter numberings.
But drafts _are_ listed in the book outline.

This enables a workflow in which you start with an outline of your book,
made with empty draft chapters having just a `title` and maybe an `abstract`,
ordered and grouped into parts as needed (and often changed, at first).

Then you can flesh out the chapters over time,
and when ready,
remove the `.draft` from the file name so it appears in the book.  

## Navigation



## Chapter links

## Figures

## Wide tables

## Full table of contents

## References

## Non-book pages

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


## License

Copyright &copy; 2023 Jason Grimes.

This work is open source,
made available under the [Apache License, Version 2.0](https://github.com/jasongrimes/jekyll-chapterbook/blob/master/LICENSE).

Originally based on [jekyll-gitbook](https://github.com/sighingnow/jekyll-gitbook), 
which was Copyright 2019 Tao He,
and licensed under the [Apache License, Version 2.0](https://github.com/sighingnow/jekyll-gitbook/blob/f286e81abb57c91b7056d043d846cd308c8ea292/LICENSE).


