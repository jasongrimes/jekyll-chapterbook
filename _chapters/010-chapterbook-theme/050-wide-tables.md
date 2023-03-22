---
title: Wide tables
slug: wide-tables
abstract: Making sure tables look good on mobile.
---

Tables can be created using normal [GitHub-flavored markdown](https://github.github.com/gfm/#tables-extension-). 

To prevent wide tables from breaking the book layout on mobile devices,
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


---
```
This file is located at: {{ page.path }}
```
---
