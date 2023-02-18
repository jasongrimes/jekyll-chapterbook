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

This theme can be used just as other [Jekyll themes](https://pages.github.com/themes),
and supports [remote theme](https://rubygems.org/gems/jekyll-remote-theme).
See [the official guide](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/adding-a-theme-to-your-github-pages-site-using-jekyll) for more information.

You can introduce this jekyll theme into your own site in one of the following ways:

- [Fork this repository](https://github.com/jasongrimes/jekyll-chapterbook/fork) and add your markdown pages to the `_chapters` folder.
- Use it as a remote theme in your [`_config.yml`](https://github.com/jasongrimes/jekyll-chapterbook/blob/master/_config.yml):

```yaml
remote_theme: jasongrimes/jekyll-chapterbook
```

### Deploy locally with Jekyll serve

This theme can be run locally using Ruby. 
See the GitHub documentation about [testing your GitHub Pages site locally with Jekyll](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/testing-your-github-pages-site-locally-with-jekyll).

## Code highlighting

The code highlight style is configurable the following entry in `_config.yaml`:

```yaml
syntax_highlighter_style: colorful
```

The default code highlight style is `colorful`, the full supported styles can be found from [the rouge repository][6]. Customized
style can be added to [./assets/gitbook/rouge/](./assets/gitbook/rouge/).

## How to generate TOC

The jekyll-gitbook theme leverages [jekyll-toc][4] to generate the *Contents* for the page.
The TOC feature is not enabled by default. To use the TOC feature, modify the TOC
configuration in `_config.yml`:

```yaml
toc:
    enabled: true
    h_min: 1
    h_max: 3
```


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


