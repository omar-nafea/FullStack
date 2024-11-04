# Media Element

### Video and audio

to add a video to a webpage you can use `<video>` tag with `<source>`

```html
<video>
  <source src="dance.mp4" type="video/mp4">
<video>
```

the file types are supported by most web browsers.In case the file type is not supported, the video tag allows for multiple sources to be specified. The web browser will check through the sources and use the first one that it supports. If you prefer the web browser to use one format over another, then make sure to specify them in the preferred order.

```html
<video>
  <source src="dance.webm" type="video/webm">
  <source src="dance.mp4" type="video/mp4">
  <source src="dance.ogg" type="video/ogg">
<video>
```
Similar to the video tag, audio tag works the same. 

```html
<audio>
  <source src="music.mp3" type="audio/mpeg">
  <source src="music.ogg" type="audio/ogg">
<audio>
```


It's important to note that if you're using an MP3 file, that the type is specified as audio forward/mpeg. This is because MP3 is short for MPEG-1 Audio Layer 3. 

to add controls to a video or audio elemets
you can add `controls`
```html
<video width="340" height="240" controls muted>
    <source src="video.mp4" type="video/mp4">
<video>
```

```html
<video controls width="320" height="240">
    <source src="video.mp4" type="video/mp4">
</video>

<form>
    <div>
      <label for="rating">Rating</label>
      <input type="range" min="1" max="5" id="rating" name="rating" list="ratings">
      <datalist id="ratings">
          <option value="1" label="1"></option>
          <option value="2"></option>
          <option value="3"></option>
          <option value="4"></option>
          <option value="5" label="5"></option>
      </datalist>
    </div>
    <button type="submit">Submit Rating</button>
</form>
```


### Images

This lesson will help refresh your knowledge of the `<img>` tag and how you can use it to embed images in webpages. 



The `<img>` tag is used to add an image to a web page. The image’s address is specified using the src attribute. For example, if you wanted to embed an image file named photo.png, you can do that with the following HTML. 



```html
<img src="photo.png"> 
```


You can also specify the width and height of the image using the width and height attributes. For example, if the width of the photo is 640 pixels and the height of the photo is 480 pixels, you can use the following HTML. 


```html
<img src="photo.png" width="640" height="480"> 
```


It is important to note that you can set the image to a larger or smaller size and the web browser will automatically scale the image. For example, you can update the previous HTML to half the width and height and the image would shrink by 50%. 

```html
<img src="photo.png" width="320" height="240"> 
```

One useful feature of rendering images in the web browser is that the web browser can automatically keep the correct ratio of width to height. So for example, if you want to scale the image by 50%, you can simply set the width attribute and the web browser will automatically calculate the height. 


```html
<img src="photo.png" width="320"> 
```



But what happens if the photo doesn’t load? Perhaps the file was accidentally deleted, or you mistyped the file name. Luckily, the web browser has a way to display some text when the image fails to load. This is done using the alt attribute. For example, you can display the text My Profile Photo using the alt attribute in the previous HTML. 


```html
<img src="photo.png" width="320" alt="My Profile Photo"> 
```


It is important to ensure that screen reader accessibility software can interpret images displayed in the web browser. To support this, the `<img>` tag is combined with the `<figure>` and `<figcaption>` tags to provide a description of the image. The `<img>` tag is added inside the `<figure>` tag and the `<figcaption>` is specified after it. 


```html
<figure> 
   <img src="photo.png" width="320" alt="My Profile Photo"> 
   <figcaption>A photo of myself on a beach in 2015</figcaption> 
</figure>
```

One last thing to note is that like videos and audio, the web browser only supports specific file types. These file types are: 

- `.APNG`: Animated Portable Network Graphics 
- `.AVIF`: AV1 Image Format 
- `.GIF`: Graphics Interchange Format 
- `.JPEG`, `.JPG`: Joint Photographic Expert Group image format 
- `.PNG`: Portable Network Graphics 
- `.SVG`: Scalable Vector Graphics 
- `.WEBP`: Web Picture Format 


Images will be important as you build websites and ensuring they are accessible will provide a better user experience for all visitors. 

### Iframes

An iframe is HTML element that allows you to place or embed content from another website into a webpage. via `<iframe>`. 
How it works is that it embeds another browsing instance inside the page. this means is it runs the embedded webpage, similar to how a webpage runs in another tab of your web browser. 

While iframe is very useful. It security has been a concern since its inception because it's vulnerable to malicious code and injection. 

The webpage that been embedded can run JavaScript code. It's important to ensure that you trust the website you're embedding into your own. Fortunately, there are some attributes that can be applied to limit the behavior of the iframe.
- allow
-  sandbox: preventing files from being
downloaded and preventing pop-up windows
```html
<iframe src="https://www.youtube.com" width="200" height="350"
allow="camera 'none'; microphone 'none';" sandbox=""></iframe>
```
when the sandbox attribute is used with an empty value, all sandbox restrictions will apply to the iframe.   

Individual sandbox restrictions can be removed by adding attributes. For example, if you want to allow file downloads in the iframe, you would allow the allow downloads value. 

```html
<iframe src="https://www.youtube.com" sandbox="allow-downloads"></iframe>
```

### iFrame sandbox cheat sheet

The `<iframe>` is the inline frame element that embeds an HTML page into another page.  



Apart from the global attributes, which can be a part of the iframe, major element-specific attributes are listed below. 

##### allow 

It specifies what features or permissions are available to the frame, for instance, access to the microphone, camera, other APIs and so on. For example: 

- `allow="fullscreen”` the fullscreen mode can be activated 
- `allow=“geolocation”` lets you access the user’s location 

To specify more than one feature, a semicolon-separator should be used between features. For example, the following would allow using the camera and the microphone: 

```html
<iframe src="https://example.com/…" allow="camera; microphone"> </iframe> 
```

##### name 

The name for the `<iframe>.` For example: 


```html
<iframe name = "My Frame" width="400" height="300"></iframe>  
```
##### height 

It specifies the height of the frame. The default value is 150, in terms of CSS pixels. 
width 

##### width

Specifies the width of the frame, in terms of CSS pixels. The default value is 300 pixels.
##### referrerpolicy 

A referrer is the HTTP header that lets the page know who is loading it. This attribute indicates which referrer information to send when loading the frame resource. The common values are: 

- no-referrer The referrer header will not be sent. 
- origin The referrer will be limited to the origin of the referring page 
- strict-origin The origin of the document is sent as the referrer only when using the same protocol security level (HTTPS to HTTPS) 

##### sandbox 

To enforce greater security, a sandbox applies extra restrictions to the content in the `<iframe>.` To lift particular restrictions, an attribute value (permission token) is used. The common permission tokens are listed below: 

- allow-downloads Allows the user to download an item 
- allow-forms Allows the user to submit forms 
- allow-modals The resource can open modal windows 
- allow-orientation-lock Lets the resource lock the screen orientation 
- allow-popups Allows popups to open 
- allow-presentation Allows a presentation session to start 
- allow-scripts Lets the resource run scripts without creating popup windows 


Note that when the value of this attribute is empty, all restrictions are applied. To apply more than one permission, use a space-separated list. For example, the following would allow form submission and scripts while keeping other restrictions active: 

```html
<iframe src="my_iframe_sandbox.html" sandbox="allow-forms allow-scripts"> </iframe> 
```

##### src 

The URL of the page to embed in the `<iframe>.` Using the value `about:blank` would embed an empty page. 

##### srcdoc

Let's you specify the inline HTML to embed in the `<iframe>.` When defined, this attribute would override the `src` attribute.  



For instance, the following code will display "My inline html" in the frame, instead of loading `my_iframe_src.html`. 
```html
<iframe src="my_iframe_src.html" srcdoc="<p>My inline html</p>" > </iframe> 
```
##### loading

This attribute let's you specify if the iframe should be loaded immediately when the web page loads (eager) or loaded when iframe is displayed in the browser (lazy). This allows you to defer loading iframe content if it is further down your web page and outside of the display area when the page is initially loaded.

```html
<iframe src="my_iframe_src.html" loading="lazy" ></iframe> 
```
##### title

This attribute let's you add a description to the iframe for accessibility purposes. The value of this attribute should accurately describe the iframe's content.

```html
<iframe src="history.html" title="An embedded document about the history of my family" ></iframe>
```