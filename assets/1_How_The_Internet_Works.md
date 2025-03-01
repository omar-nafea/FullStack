# How the Internet Works

### Network

Two devices connected via wire or wireless connection forming a Network  

You can connect multiple devices together to this network but this become very complicated very quickly as each device need to connect to each device


### Network Switch

- this problem is solved by Network switch that connect multiple devices and allow them to communicate with each other

![Network Switch](../Pics/switch.png "Network_Switch")

### Internet

- The network switch can connect to other network switches, These network switches then connect to more network switches until you have something called an interconnected network. aka **Internet**  

![Interconnected Network](../Pics/internet-schema-5.png "Interconnected_Network")  

### Web Server

A server is a computer that runs applications and services.  
It's called a `server` because it provides a service to another computer and, it's user (browser) called `client`.

A web server has many functions which includes: Website storage, Administration, Security   
The primary function is to handle web requests

A web server stores and delivers the content for a website – such as text, images, video, and application data – to clients that request it. The most common type of client is a web browser program, which requests data from your website when a user clicks on a link or downloads a document on a page displayed in the browser.

A web server communicates with a web browser using the Hypertext Transfer Protocol (HTTP). The content of most web pages is encoded in Hypertext Markup Language (HTML). The content can be static (for example, text and images) or dynamic (for example, a computed price or the list of items a customer has marked for purchase). To deliver dynamic content, most web servers support server‑side scripting languages to encode business logic into the communication. Commonly supported languages include Active Server Pages (ASP), Javascript, PHP, Python, and Ruby.

A web server might also cache content to speed delivery of commonly requested content. This process is also known as web acceleration.

A web server can host a single website or multiple websites using the same software and hardware resources, which is known as virtual hosting. Web servers can also limit the speed of response to different clients so as to prevent a single client from dominating resources that are better used to satisfy requests from a large number of clients.

While web servers typically host websites that are accessible on the Internet, they can also be used to communicate between web clients and servers in local area networks such as a company’s intranet. A web server can even be embedded in a device such a digital camera so that the users can communicate with the device via any commonly available Web browser.

## Web browser

Browser is a software application that you use to browse the World Wide Web.

### How does a web browser work

A web browser takes you anywhere on the internet. It retrieves information from other parts of the web and displays it on your desktop or mobile device. The information is transferred using the Hypertext Transfer Protocol, which defines how text, images and video are transmitted on the web. This information needs to be shared and displayed in a consistent format so that people using any browser, anywhere in the world can see the information.

Sadly, not all browser makers choose to interpret the format in the same way. For users, this means that a website can look and function differently. Creating consistency between browsers, so that any user can enjoy the internet, regardless of the browser they choose, is called web standards.

When the web browser fetches data from an internet connected server,   
**It uses a piece of software called a rendering engine to translate that data into text and images.** This data is written in Hypertext Markup Language (HTML) and web browsers read this code to create what we see, hear and experience on the internet.

Hyperlinks allow users to follow a path to other pages or sites on the web. Every webpage, image and video has its own unique Uniform Resource Locator (URL), which is also known as a web address. When a browser visits a server for data, the web address tells the browser where to look for each item that is described in the html, which then tells the browser where it goes on the web page.

##### URL

If we have this URL `http://www.Meta.com/index.html` as an example

- `http` => Protocol
- `www.Meta.com` => Domain name
- `/index.html` => File path

### Request-Response Cycle

- You open a web browser and type the name of your favorite search engine (domain name). When you press Enter,  
  - The web browser sends a request across a network and connects to another computer on the Internet called a web server. which allows to make requests for data.
  - This data is stored in something called a database, which is connected to the web server. The web server then picks up that data and sends it back to the browser.
  - Once the browser receives all the response information, Search engine renders a visible webpage in the browser.

![webserver_database_relation](https://cdn.pressidium.com/wp-content/uploads/2023/09/web-part-2-diagram-1440x709.png "webserver_database_relation")

### How the browser render HTML code 

- When a copy of that webpage is sent from the **web server** to your **browser**, each line of code is processed in sequential order from first to last. As each line is interpreted, the browser creates the building blocks, which is the visual representation you see on the screen.

- This creation process is known as _**page rendering**_, the response from the web server must be a complete web page in order to fulfill the request (show the page in the browser).

Some engines may begin rendering before a page's resources are downloaded (css, js, images). This can result in visual changes as more data is received, such as images being gradually filled in or a flash of unstyled content.

### Cookies

Websites save information about you in files called cookies. They are saved on your computer for the next time you visit that site. Upon your return, the website code will read that file to see that it’s you. For example, when you go to a website, the page remembers your username and password – that’s made possible by a cookie.

There are also cookies that remember more detailed information about you. Perhaps your interests, your web browsing patterns, etc. This means that a site can provide you more targeted content – often in the form of ads. There are types of cookies, called third-party cookies, that come from sites you’re not even visiting at the time and can track you from site to site to gather information about you, which is sometimes sold to other companies. Sometimes you can block these kinds of cookies, though not all browsers allow you to.

### Understanding privacy

Nearly all major browsers have a private browsing setting. These exist to hide the browsing history from other users on the same computer. Many people think that private browsing or incognito mode will hide both their identity and browsing history from internet service providers, governments and advertisers. They don’t. These settings just clear the history on your system, which is helpful if you’re dealing with sensitive personal information on a shared or public computer. Firefox goes beyond that.

### A browser engine

- It's a core software component of every major web browser. also known as a layout engine or rendering engine The primary job of a browser engine is to transform HTML documents and other resources of a web page into an interactive visual representation on a user's device.

In addition to layout and rendering, a browser engine enforces the security policy between documents, handles navigation through hyperlinks and data submitted through forms, and implements the Document Object Model (DOM) exposed to scripts associated with the document.

_**Every major browser supports JavaScript to provide a wide range of dynamic behavior for web pages. However, JavaScript is implemented as a separate JavaScript engine, which has enabled its usage elsewhere. In a browser, the two engines are coordinated via the DOM bindings.**_

The layout of a web page is typically specified by Cascading Style Sheets (CSS). Each style sheet is a series of rules for how the page should be presented. The engine combines all relevant CSS rules to calculate precise graphical coordinates for the visual representation it will paint on the screen.

# Internet Protocols

To understand how data sent between computers across the internet you can Imagine that the computers are the destinations that request and recieve the data and the networks are the roads that the data travels across. What makes that possible is the Internet Protocol.

Think of it as postal system when you send a letter to a friend you need their address otherwise they won't receive your letter. Computers work in a similar way. Every computer on a network is assigned an IP address It's like an address of your house.

## IP protocol

When you send data across a network, you send the data as a series of messages called IP packets. Also known as data grams.  

At a high level IP packets contain a header and a payload or the data. Think of that as postal system, when you send a letter. You not only include the recipient's address but also your own address in case a return location is needed. IP packets are the same.  

They include the destination IP address and source IP address. These addresses are in the header along with some additional information to help deliver the packet, used by networking hardware to direct the packet to its destination.  

![ipPackets](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBAElIEZYzxh6hZahlu5kl_ZKOjwdEecSZvg&s "IpPacktes")  

##### packet switching

packet switching is a method of grouping data into short messages in fixed format (packets), that are transmitted over a digital network. Packet switching is the primary basis for data communications in computer networks worldwide.

![packet_switching](../Pics/Packet_Switching.gif "packet_switching")

##### Other protocols

When sending multiple letters to a friend it's possible they may:   

- arrive out of order
- become damaged
- corrupted to in transit
- be dropped or lost during transit.

_**These issues can happen to IP packets too. To solve these problems, the payload part of the packets contains other protocols too. You can think of them as another message inside the payload of the IP packet.**_

### TCP | UDP

The two most common protocols are the **Transmission Control Protocol** referred to as **TCP** and the **User Datagram Protocol**, also known as **UDP**.

- TCP can solve three issues but at the cost of a small delay when sending the data. This protocol is used for sending the data that must arrive correctly and in order such as a text or image files.

- UDP solves the corrupt packet issue but packets can still arrive out of order or not arrive at all. This protocol is used for sending data that can tolerate some data loss such as voice calls or live video streaming.  

- TCP/IP protocol form the basic communication language of the internet which labels the packets of data and makes sure that even though some pieces of the same data take a different route, they all arrive at their destination and can be reassembled.

# HTTP

HTTP is a core operational protocol of the world wide web. It is what enables your web browser to communicate with a web server that hosts a website.   
HTTP stands for Hypertext Transfer Protocol. It is a protocol used for transferring web resources such as HTML documents, images, styles, and other files.  
HTTP is a request response based protocol. A web browser or client sends an HTTP request to a server and the web server sends the HTTP response back to the browser.

##### HTTPS is the secure version of HTTP

It is used for secure communication between two computers so that nobody else can see the information being sent and received. It does this by using something called encryption.  

![secure_code](../Pics/secureHTTP.png "secure_code")  

Like in HTTP, the requests and responses still behave in the same way and have the same content. The big difference is that before the content is sent, it is turned into a `secret code`. Only the other computer can turn the secret code back into its original content. If someone else was to look at the code, it wouldn't be understandable.  

## APIs and services

An API is a set of functions and procedures for creating applications that access the features or data of an operating system, application or other service.

In Software development, API's are often the bridge between different components or systems. This earns them names like gateway or middleware. The term is used widely to represent many different tools and systems.

### Web APIs

They extend the functionality of the browser by adding new services and are designed to simplify complex functions and provide easy syntax for building advanced features. Let's take DOM API as an example:  

The DOM API turns the html document into a tree of nodes that are represented as JavaScript objects.  
Another example, is the geolocation API that returns coordinates of where the browser is located. There are also other API's available for

- Fetching data known as Fetch API
- Drawing graphics or Canvas API
- Keeping history or history API.
- Client side storage or Web Storage API.

## REST API.

REST or representational state transfer, is a set of principles that help build highly efficient API's.

![rest_api](../Pics/restAPI.gif "rest_api")  

One of the main responsibilities of these kinds of API's is sending and receiving data to and from a centralized database. We can query our own REST API or third party ones.

These API web servers are designed to provide the data backbone for a web client like a web page or mobile app. This means that these API's must be able to accomplish things like `get`, `post`, `put`, `delete` data

These API's use endpoints to specify how different resources can be accessed. The endpoint is built into the URL when accessing the API. Once the endpoint is hit, the API performs whatever service side processing is needed to build the response. Two common forms of response are, full web pages and data form i.e. `Json`.

![api_mechanism](../Pics/API_mech.gif "api_mechanism")

### Back-end framework

it handles functionality that is common to all web applications such as `receiving HTTP requests` and `sending HTTP responses`. The developer then adds their own code that implements the functionality of the web application.   For instance with the e-commerce website example, a framework would handle receiving `HTTP` requests. The developer would implement code that processes the request and returns a response from which the framework would send a response over `HTTP`.