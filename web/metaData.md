## Metadata

how search engines analyze web pages and
how meta tags help provide information for search engines. 

A major part of launching a website is a process called search engine optimization or SEO. This process involves making improvements to a website's content semantics and delivery to improve its ranking in search results. 

when a search engine visits your website, it analyzes the html document and media content.  If it finds a link to another html document, it follows the link to that document and continues following links until it is finished analyzing the entire website. Based on the results of the analysis and the content on your website, the search engine will rank the website for various search terms. 

### How meta tags influence website ranking

Metadata is data about other data which in this case is data about the web page.   
**Meta tags define metadata about a web page.**
Meta tags are added inside the head element of your html document and as you know, nothing inside the head element is displayed in the web browser.  

The meta element has two attributes, name and content. The name attribute specifies the name of the metadata and the content attribute specifies the value of the metadata

- The author metadata specifies the author of the web page.   
```html
<html>
  <head>
    <meta name="author" content="Jane Wilson">
  </head>
</html>
```

- The description metadata describes the content of the web page. This is often used by search engines as descriptive text in search results. 
```html
<html>
  <head>
    <meta name="description" content="Jane's first web page">
  </head>
</html>
```

- Another type of metadata is the robot's metadata and it tells search engines if and how they should analyze your web page.   

The content attribute for Robots has four possible values.  
  1- `index` tells the bot to analyze the page.  
  2- `follow` tells the bot to also visit all links on the web page.   
  3- `noindex` tells the bot not to analyze the page. **Some bots will ignore this so it's best not to rely on this to stop bots from analyzing your page**   
  4- `nofollow` tells the bot not to visit links on the web page. **Again, some bots will ignore this value so it's best not to rely on it**.    

- Finally, there's the viewports metadata. The viewport metadata is important when designing responsive web pages.
Why you might ask because when a web pages viewed on a phone or tablet, the device will by default attempt to render the web page as if it is being viewed on a desktop. This results in a poor browsing experience for the user. The solution is to define viewports metadata. 
```html
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>
</html>
```

It's important to note that view port metadata does not solve all the issues with browsing websites on mobile devices.
View port metadata is important for the user experience and it's also important for search engine optimization. This is because many search engines now include websites mobile experience as a part of their ranking algorithms
## Metadata cheat sheet

### HTML <meta> tags

Earlier in the course, you learned about meta tags and how you can leverage them to convey information to search engines to better categorize your pages. We recommend that you keep this cheat sheet handy when building your web applications. The structure of a meta tag is as follows.

#### Name

The name of the property can be anything you like, although browsers usually expect a value they understand and can take an action upon. An example would be <meta name="author" content="name"> to state the author of the page.

#### Content

The content field specifies the property's value. For example, you can use <meta name="language" content="english">, to specify the language of the webpage to search engines.

#### Charset

The charset is a special field that lets you specify the character encoding used for the page so that the browser can display it properly. The most frequently used is utf-8, and you would add it to your HTML header as follows: `<meta charset="UTF-8">`

#### HTTP-equiv

This field stands for HTTP equivalent, and it's used to simulate HTTP response headers. This is rare to see, and it's recommended to use HTTP headers over HTML http-equiv meta tags. For example, the next tag would instruct the browser to refresh the page every 30 minutes: `<meta http-equiv="refresh" content="30">`

### Basic meta tags (meta tags For SEO)

`<meta name="description"/>` provides a brief description of the web page

`<meta name="title"/>` specifies the title of the web page

`<meta name="author" content="name">` specifies the author of the web page

`<meta name="language" content="english">` specifies the language of the web page

`<meta name="robots" content="index,follow" />` tells search engines how to crawl or index a certain page

`<meta name="google"/>` tells Google not to show the sitelinks search box for your page when showing search results

`<meta name="googlebot" content="notranslate" />` tells Google you don't want to provide an automatic translation for your page if the user uses a different language

`<meta name="revised" content="Sunday, July 18th, 2010, 5:15 pm" />` specifies the last modified date and time on which you have made certain changes

`<meta name="rating" content="safe for kids">` specifies the expected audience for your page

`<meta name="copyright" content="Copyright 2022">` specifies a Copyright

### `<meta http-equiv="..."/>` tags

`<meta http-equiv="content-type" content="text/html">` specifies the format of the document returned by the server

`<meta http-equiv="default-style"/>`  specifies the format of the styling document

`<meta http-equiv="refresh"/>` specifies the duration of the page before it's considered stale

`<meta http-equiv="Content-language"/>` specifies the language of the page

`<meta http-equiv="Cache-Control" content="no-cache">` instructs the browser how to cache your page 

### Responsive design/mobile meta tags

`<meta name="format-detection" content="telephone=yes"/>` indicates that telephone numbers should appear as hypertext links that can be clicked to make a phone call

`<meta name="HandheldFriendly" content="true"/>` specifies that the page can be properly visualized on mobile devices

`<meta name="viewport" content="width=device-width, initial-scale=1.0"/>` specifies the area of the window in which web content can be seen

## Open graph protocol (OGP)

Open Graph is an internet protocol that used to provide rich experiences in social networks using metadata on a web page it was originally created by Facebook to provide a way to standardize the use of metadata within a webpage to represent the content of a page.
Within it, you can provide details as simple as the title of a page or as specific as the duration of a video. These pieces all fit together to form a representation of each individual page of the internet.  
Example of a simple Twitter Card
![](https://www.freecodecamp.org/news/content/images/2020/03/simple-twitter-card.jpg)  
Example of a Twitter Card with a large image  
![](https://www.freecodecamp.org/news/content/images/2020/03/large-image-twitter-card.jpg)  


The four basic Open Graph tags are  
- Title  
Title will be the title of your page it's usually the same thing as the title tag
```html
<title>My website</title>
<meta property="og:title" content="My website" />
```
- Type  
Next you have the type of your page for most websites it's probably just website but this can be other things like article or video
```html
<meta property="og:type" content="website" />
```
- Image  
To get that big image in your feed you'll want to add your image tag this will be the URL to the actual image
```html
<meta property="og:image" content="/myself.png" />
```
- URL 
Finally the URL tag which will be the URL of your current page 
```html
<meta property="og:url" content="https://cool.com" />
```

the meta tags follow the property and content pattern like similar other meta tags so ultimately go in the head of your HTML along with the other metadata
HTML so if I were to put these tags together for the basic it would look like this
```html
<head>
<title>The Rock (1996)</title>
<meta property="og:title" content="The Rock" />
<meta property="og:type" content="video.movie" />
<meta property="og:url" content="https://www.imdb.com/title/tt0117500/" />
<meta property="og:image" content="https://ia.media-imdb.com/images/rock.jpg" />
...
</head>
```
These tags might be unique for each page you want each set of tags to represent the content on that specific page so if I had tags on the home page of my blog the type tag might be website but if I had tags on the blog post page though type might be article 
![](../Pics/og_url.jpg)


- The description tag might look similar to what your meta description looks like the 
```html
<meta name="description" content="It's a multinational company specialized in social media platfroms" />
<meta property="og:description" content="It's a multinational company specialized in social media platfroms" />
```
- Locale tag is what's used to define your language and territory for that set of tags  
```html
<meta property="og:locale" content="en_US" />
```
- The site name which would be the actual website name so for instance with my website the name is coby fayek but the page title for my blog post would be the blog post name  
```html
<meta property="og:site_name" content="meta.com" />
```
- the video tag will function similar to your image tag but for video content so it'll be a URL
```html
<meta property="og:video" content="/video.mp4>
```

If you want to show an icon in the web browser tab for your website, you can update the href attributes here to point to your icon. 

```html
<link rel="icon" href="/fevicon.ico">
<link rel="icon" href="/fevicon.svg">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
```

Remember it you always link elements for the CSS style sheet to the last section of the head element. 
```html
<head>
...
<link rel="stylesheet" href="../css/style.css">
</head>
```