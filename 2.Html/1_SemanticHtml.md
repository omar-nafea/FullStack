# Semantic HTML cheat sheet

There are hundreds of semantic tags available to help describe the meaning of your HTML documents. Below is a cheat sheet with some of the most common ones you'll use in this course and in your development career.

## Basic HTML page structure

For a typical HTML page the structure can be semantically described using the header, main and footer semantic HTML tags.
For example,
- suppose you lay out your page with a `header` section that contains some company logo and navigation links.
- Then a `main` section contains `sections` and `articles`.
- Finally a `footer` section contains contact information and social media links.

The main navigation section of your web page can also be described semantically using the `Nav` tag.

The main links of your website are then added inside the Nav element. It is common practice to specify their links as an unordered list inside the Nav element.

Next is the main content of a web page. The two key semantic elements for your main content are the article and section elements.  

Article can use to represent: Forum post, Article, Blog post, user comment, Interactive widget

The HTML specification states that according to the World Wide Web Consortium's (w3c) website, the article element indicates content which represents


- A complete.
- Or self contained composition in a document page application
- Or Site that is independently distributable.

```html
<!doctype html>
<html lang="en">
  <head>
    <title>Article</title>
  </head>
  <body>
    <header>
      <img src="logo.png">
    </header>
    <nav>
      <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="location.html"></a>Location</li>
        <li><a href="blog.html"></a>Blog</li>
      </ul>
    </nav>
    <main>
      <h1>Blog</h1>
      <article>
        <h2>20% off this weekend</h2>
        <p>Come down to little lemon and your meal be 20% off!</p>
      </article>
      <article>
        <h2>Our new menu</h2>
        <p>we're updated our menu with new dinners</p>
      </article>
    </main>
    <footer>
      <p>Copyright Little Lemon</p>
    </footer>
  </body>
</html>
```
let's update the previous example to use a nested semantic structure.

```html
<body>
    <article>
        <header>
            <h2>My summer holiday</h2>
            <p> Posted on Monday, by Jane Wilson</p>
        </header>
        <main>
            <p>This summer I visited my grandparents</p>
        </main>
    </article>
</body>
```

let's examine the section element. You can add a section element to semantically define individual sections of the article.  
It is important to note that sections should contain heading elements to semantically describe the section.   
It is also possible to use section elements to describe different sections of your webpage, the section element doesn't require the article element. It all depends on how you want to semantically describe your page

```html
<body>
    <section>
       <h2>My summer holiday</h2>
       <p> Posted on Monday, by Jane Wilson</p>
    </section>
    <section>
        <h2>Technologies I know</h2>
        <ul>
            <li>HTML</li>
            <li>CSS</li>
        </ul>
    </section>
</body>
```
### Sectioning tags

Use the following tags to organize your HTML document into structured sections.

`<header>`

The header of a content section or the web page. The web page header often contains the website branding or logo.

`<nav>`

The navigation links of a section or the web page.

`<footer>`

The footer of a content section or the web page. On a web page, it often contains secondary links, the copyright notice, privacy policy and cookie policy links.

`<main>`

Specifies the main content of a section or the web page.

`<aside>`

A secondary set of content that is not required to understand the main content.

`<article>`

An independent, self-contained block of content such as a blog post or product.

`<section>`

A standalone section of the document that is often used within the body and article elements.

`<details>`

A collapsed section of content that can be expanded if the user wishes to view it.

`<summary>`

Specifies the summary or caption of a `<details>` element.

<details>
  <summary>Epcot Center</summary>
  <p>Epcot is a theme park at Walt Disney World Resort featuring exciting attractions, international pavilions, award-winning fireworks and seasonal special events.</p>
</details>

```html
<details>
  <summary>Epcot Center</summary>
  <p>Epcot is a theme park at Walt Disney World Resort featuring exciting attractions, international pavilions, award-winning fireworks and seasonal special events.</p>
</details>
```
when you click the Epcot Center `summary` it will expand with `p` tag content

`<h1>` `<h2>` `<h3>` `<h4>` `<h5>` `<h6>`

Headings on the web page. `<h1>` indicates the most important heading whereas `<h6>` indicates the least important.

### Content tags

`<blockquote>`

Used to describe a quotation.

`<dd>`

Used to define a description for the preceding `<dt>` element.

`<dl>`

Used to define a description list.

`<dt>`

Used to describe terms inside `<dl>` elements.

```html
<p>Cryptids of Cornwall:</p>

<dl>
  <dt>Beast of Bodmin</dt>
  <dd>A large feline inhabiting Bodmin Moor.</dd>

  <dt>Morgawr</dt>
  <dd>A sea serpent.</dd>

  <dt>Owlman</dt>
  <dd>A giant owl-like creature.</dd>
</dl>
```

`<figcaption>`

Defines a caption for a photo image.

`<figure>`

Applies markup to a photo image.

`<hr>`

Adds a horizontal line to the parent element.

`<li>`

Used to define an item within a list.

`<menu>`

A semantic alternative to `<ul>` tag.

```html
<menu>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</menu>
```

`<ol>`

Defines an ordered list.

`<p>`

Defines a paragraph.

`<pre>`

Used to represent preformatted text. Typically rendered in the web browser using a monospace font.

`<ul>`

Unordered list

### Inline tags 

`<a>`

An anchor link to another HTML document.

`<abbr>`

Specifies that the containing text is an abbreviation or acronym.

`<b>`

Bolds the containing text. When used to indicate importance use `<strong>` instead.

`<br>`

A line break. Moves the subsequent text to a new line.

`<cite>`

Defines the title of creative work (for example a book, poem, song, movie, painting or sculpture). The text in the `<cite>` element is usually rendered in italics.

`<code>`

Indicates that the containing text is a block of computer code.

`<data>`

Indicates machine-readable data.

`<em>`

Emphasizes the containing text.

`<i>`

The containing text is displayed in italics. Used to indicate idiomatic text or technical terms.

`<mark>`

The containing text should be marked or highlighted.

`<q>`

The containing text is a short quotation.

`<s>`

Displays the containing text with a strikethrough or line through it.

`<samp>`

The containing text represents a sample.

`<small>`

Used to represent small text, such as copyright and legal text.

`<span>`

A generic element for grouping content for CSS styling.

`<strong>`

Displays the containing text in bold. Used to indicate importance.

`<sub>`

The containing text is subscript text, displayed with a lowered baseline.

`<sup>`

The containing text is superscript text, displayed with a raised baseline.

`<time>`

A semantic tag used to display both dates and times.

`<u>`

Displays the containing text with a solid underline.

`<var>`

The containing text is a variable in a mathematical expression.

### Embedded content and media tags

`<audio>`

Used to embed audio in web pages.

`<canvas>`

Used to render 2D and 3D graphics on web pages.
```html
<canvas id="myCanvas" width="200" height="100" style="border:1px solid #ff0000;">
Your browser does not support the HTML canvas tag.
</canvas>
```

`<embed>`

Used as a containing element for external content provided by an external application such as a media player or plug-in application.

`<iframe>`

Used to embed a nested web page.

`<img>`

Embeds an image on a web page.

`<object>`

Similar to `<embed>` but the content is provided by a web browser plug-in.

`<picture>`

An element that contains one `<img>` element and one or more `<source>` elements to offer alternative images for different displays/devices.

```html
 <picture>
  <source media="(min-width:650px)" srcset="img_pink_flowers.jpg">
  <source media="(min-width:465px)" srcset="img_white_flower.jpg">
  <img src="img_orange_flowers.jpg" alt="Flowers" style="width:auto;">
</picture> 
```

`<video>`

Embeds a video on a web page.

`<source>`

Specifies media resources for `<picture>`, `<audio>` and`<video>` elements.

```html
<video controls width="250">
  <source src="/media/cc0-videos/flower.webm" type="video/webm" />
  <source src="/media/cc0-videos/flower.mp4" type="video/mp4" />
</video>
```

`<svg>`

Used to define Scalable Vector Graphics within a web page.

```html
<svg width="100" height="100">
  <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />
</svg>
```

### Table tags

`<table>`

Defines a table element to display table data within a web page.

`<thead>`

Represents the header content of a table. Typically contains one `<tr>` element.

`<tbody>`

Represents the main content of a table. Contains one or more `<tr>`elements.

`<tfoot>`

Represents the footer content of a table. Typically contains one `<tr>` element.

`<tr>`

Represents a row in a table. Contains one or more `<td>` elements when used within `<tbody>` or `<tfoot>`. When used within `<thead>`, contains one or more `<th>` elements.

`<td>`

Represents a cell in a table. Contains the text content of the cell.

`<th>`

Defines a header cell of a table. Contains the text content of the header.

`<caption>`

Defines the caption of a table element.

`<colgroup>`

Defines a semantic group of one or more columns in a table for formatting.

`<col>`

Defines a semantic column in a table.

```html
<table>
  <caption>
    Front-end web developer course 2021
  </caption>
  <thead>
    <tr>
      <th scope="col">Person</th>
      <th scope="col">Most interest in</th>
      <th scope="col">Age</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Chris</th>
      <td>HTML tables</td>
      <td>22</td>
    </tr>
    <tr>
      <th scope="row">Dennis</th>
      <td>Web accessibility</td>
      <td>45</td>
    </tr>
    <tr>
      <th scope="row">Sarah</th>
      <td>JavaScript frameworks</td>
      <td>29</td>
    </tr>
    <tr>
      <th scope="row">Karen</th>
      <td>Web performance</td>
      <td>36</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th scope="row" colspan="2">Average age</th>
      <td>33</td>
    </tr>
  </tfoot>
</table>
```
<table>
  <caption>
    Front-end web developer course 2021
  </caption>
  <thead>
    <tr>
      <th scope="col">Person</th>
      <th scope="col">Most interest in</th>
      <th scope="col">Age</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Chris</th>
      <td>HTML tables</td>
      <td>22</td>
    </tr>
    <tr>
      <th scope="row">Dennis</th>
      <td>Web accessibility</td>
      <td>45</td>
    </tr>
    <tr>
      <th scope="row">Sarah</th>
      <td>JavaScript frameworks</td>
      <td>29</td>
    </tr>
    <tr>
      <th scope="row">Karen</th>
      <td>Web performance</td>
      <td>36</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th scope="row" colspan="2">Average age</th>
      <td>33</td>
    </tr>
  </tfoot>
</table>



