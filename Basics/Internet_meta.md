# HTTP examples

This reading explores the contents of HTTP requests and responses in more depth.
**Request Line**

Every HTTP request begins with the request line.

This consists of the HTTP method, the requested resource and the HTTP protocol version.

`GET /home.html HTTP/1.1`

In this example, GET is the HTTP method, /home.html is the resource requested and HTTP 1.1 is the protocol used.
`HTTP Methods`

HTTP methods indicate the action that the client wishes to perform on the web server resource.

Common HTTP methods are:

<!-- table -->
<table>
<thead><tr><th scope="col"><p><span><span>HTTP Method</span></span></p></th><th scope="col"><p><span><span>Description</span></span></p></th></tr></thead><tbody><tr><td><p><span><span>GET</span></span></p></td><td><p><span><span>The client requests a resource on the web server.</span></span></p></td></tr><tr><td><p><span><span>POST</span></span></p></td><td><p><span><span>The client submits data to a resource on the web server.</span></span></p></td></tr><tr><td><p><span><span>PUT</span></span></p></td><td><p><span><span>The client replaces a resource on the web server.</span></span></p></td></tr><tr><td><p><span><span>DELETE</span></span></p></td><td><p><span><span>The client deletes a resource on the web server.</span></span></p></td></tr><tr><td><p><span><span>PATCH</span></span></p></td><td><p><span><span>The client partially updates a resource on the web server.</span></span></p></td></tr></tbody>
</table>
HTTP Request Headers

After the request line, the HTTP headers are followed by a line break.

There are various possibilities when including an HTTP header in the HTTP request. A header is a case-insensitive name followed by a: and then followed by a value.

Common headers are:

```json
Host: example.com
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.9; rv:50.0) Gecko/20100101 Firefox/50.0
Accept: */*
Accept-Language: en
Content-type: text/json
```

- The Host header specifies the host of the server and indicates where the resource is requested from.
- The User-Agent header informs the web server of the application that is making the request. It often includes the operating system (Windows, Mac, Linux), version and application vendor.
- The Accept header informs the web server what type of content the client will accept as the response.
- The Accept-Language header indicates the language and optionally the locale that the client prefers.
- The Content-type header indicates the type of content being transmitted in the request body.

HTTP Request Body

HTTP requests can optionally include a request body. A request body is often included when using the HTTP POST and PUT methods to transmit data.

```json
POST /users HTTP/1.1
Host: example.com

{
 "key1":"value1",
 "key2":"value2",
 "array1":["value3","value4"]
}
```

HTTP Responses

When the web server is finished processing the HTTP request, it will send back an HTTP response.

The first line of the response is the status line. This line shows the client if the request was successful or if an error occurred.

HTTP/1.1 200 OK

The line begins with the HTTP protocol version, followed by the status code and a reason phrase. The reason phrase is a textual representation of the status code.
HTTP Status Codes

The first digit of an HTTP status code indicates the category of the response: Information, Successful, Redirection, Client Error or Server Error.

The common status codes you'll encounter for each category are:

1XX Informational

<table><thead><tr><th scope="col"><p><span><span>Status Code</span></span></p></th><th scope="col"><p><span><span>Reason Phrase</span></span></p></th><th scope="col"><p><span><span>Description</span></span></p></th></tr></thead><tbody><tr><td><p><span><span>100</span></span></p></td><td><p><span><span>Continue</span></span></p></td><td><p><span><span>The server received the request headers and should continue to send the request body.</span></span></p></td></tr><tr><td><p><span><span>101</span></span></p></td><td><p><span><span>Switching Protocols</span></span></p></td><td><p><span><span>The client has requested the server to switch protocols and the server has agreed to do so.</span></span></p></td></tr></tbody></table>
2XX Successful
<table><thead><tr><th scope="col"><p><span><span>Status Code</span></span></p></th><th scope="col"><p><span><span>Reason Phrase</span></span></p></th><th scope="col"><p><span><span>Description</span></span></p></th></tr></thead><tbody><tr><td><p><span><span>200</span></span></p></td><td><p><span><span>OK</span></span></p></td><td><p><span><span>Standard response returned by the server to indicate it successfully processed the request.</span></span></p></td></tr><tr><td><p><span><span>201</span></span></p></td><td><p><span><span>Created</span></span></p></td><td><p><span><span>The server successfully processed the request and a resource was created.</span></span></p></td></tr><tr><td><p><span><span>202</span></span></p></td><td><p><span><span>Accepted</span></span></p></td><td><p><span><span>The server accepted the request for processing but the processing has not yet been completed.</span></span></p></td></tr><tr><td><p><span><span>204</span></span></p></td><td><p><span><span>No Content</span></span></p></td><td><p><span><span>The server successfully processed the request but is not returning any content.</span></span></p></td></tr></tbody></table>

3XX Redirection

<table><thead><tr><th scope="col"><p><span><span>Status Code</span></span></p></th><th scope="col"><p><span><span>Reason Phrase</span></span></p></th><th scope="col"><p><span><span>Description</span></span></p></th></tr></thead><tbody><tr><td><p><span><span>301</span></span></p></td><td><p><span><span>Moved Permanently</span></span></p></td><td><p><span><span>This request and all future requests should be sent to the returned location.</span></span></p></td></tr><tr><td><p><span><span>302</span></span></p></td><td><p><span><span>Found</span></span></p></td><td><p><span><span>This request should be sent to the returned location.</span></span></p></td></tr></tbody></table>
4XX Client Error
<table><thead><tr><th scope="col"><p><span><span>Status Code</span></span></p></th><th scope="col"><p><span><span>Reason Phrase</span></span></p></th><th scope="col"><p><span><span>Description</span></span></p></th></tr></thead><tbody><tr><td><p><span><span>400</span></span></p></td><td><p><span><span>Bad Request</span></span></p></td><td><p><span><span>The server cannot process the request due to a client error, e.g., invalid request or transmitted data is too large.</span></span></p></td></tr><tr><td><p><span><span>401</span></span></p></td><td><p><span><span>Unauthorized</span></span></p></td><td><p><span><span>The client making the request is unauthorized and should authenticate.</span></span></p></td></tr><tr><td><p><span><span>403</span></span></p></td><td><p><span><span>Forbidden</span></span></p></td><td><p><span><span>The request was valid but the server is refusing to process it. This is usually returned due to the client having insufficient permissions for the website, e.g., requesting an administrator action but the user is not an administrator.</span></span></p></td></tr><tr><td><p><span><span>404</span></span></p></td><td><p><span><span>Not Found</span></span></p></td><td><p><span><span>The server did not find the requested resource.</span></span></p></td></tr><tr><td><p><span><span>405</span></span></p></td><td><p><span><span>Method Not Allowed</span></span></p></td><td><p><span><span>The web server does not support the HTTP method used.</span></span></p></td></tr></tbody></table>
5XX Server Error
<table><thead><tr><th scope="col"><p><span><span>Status Code</span></span></p></th><th scope="col"><p><span><span>Reason Phrase</span></span></p></th><th scope="col"><p><span><span>Description</span></span></p></th></tr></thead><tbody><tr><td><p><span><span>500</span></span></p></td><td><p><span><span>Internal Server Error</span></span></p></td><td><p><span><span>A generic error status code given when an unexpected error or condition occurred while processing the request.</span></span></p></td></tr><tr><td><p><span><span>502</span></span></p></td><td><p><span><span>Bad Gateway</span></span></p></td><td><p><span><span>The web server received an invalid response from the Application Server.</span></span></p></td></tr><tr><td><p><span><span>503</span></span></p></td><td><p><span><span>Service Unavailable</span></span></p></td><td><p><span><span>The web server cannot process the request.</span></span></p></td></tr></tbody></table>
Following the status line, there are optional HTTP response headers followed by a line break.

Similar to the request headers, there are many possible HTTP headers that can be included in the HTTP response.

Common response headers are:

```json
Date: Fri, 11 Feb 2022 15:00:00 GMT+2
Server: Apache/2.2.14 (Linux)
Content-Length: 84
Content-Type: text/html
```

- The Date header specifies the date and time the HTTP response was generated.
- The Server header describes the web server software used to generate the response.
- The Content-Length header describes the length of the response.
- The Content-Type header describes the media type of the resource returned (e.g. HTML document, image, video).

HTTP Response Body

Following the HTTP response headers is the HTTP response body. This is the main content of the HTTP response.

This can contain images, video, HTML documents and other media types.

```json
HTTP/1.1 200 OK
Date: Fri, 11 Feb 2022 15:00:00 GMT+2
Server: Apache/2.2.14 (Linux)
Content-Length: 84
Content-Type: text/html

<html>
  <head><title>Test</title></head>
  <body>Test HTML page.</body>
</html>
```

# Other Internet Protocols

Hypertext Transfer Protocols (HTTP) are used on top of Transmission Control Protocol (TCP) to transfer webpages and other content from websites.
This reading explores other protocols commonly used on the Internet.

### Dynamic Host Configuration Protocol (DHCP)

You've learned that computers need IP addresses to communicate with each other. When your computer connects to a network, the Dynamic Host Configuration Protocol or DHCP as it is commonly known, is used to assign your computer an IP address.
Your computer communicates over User Datagram Protocol (UDP) using the protocol with a type of server called a DHCP server. The server keeps track of computers on the network and their IP addresses. It will assign your computer an IP address and respond over the protocol to let it know which IP address to use. Once your computer has an IP address, it can communicate with other computers on the network.

### Domain Name System Protocol (DNS)

Your computer needs a way to know with which IP address to communicate when you visit a website in your web browser, for example, meta.com. The Domain Name System Protocol, commonly known as DNS, provides this function. Your computer then checks with the DNS server associated with the domain name and then returns the correct IP address.

### Internet Message Access Protocol (IMAP)

Do you check your emails on your mobile or tablet device? Or maybe you use an email application on your computer?
Your device needs a way to download emails and manage your mailbox on the server storing your emails. This is the purpose of the Internet Message Access Protocol or IMAP.

### Simple Mail Transfer Protocol (SMTP)

Now that your emails are on your device, you need a way to send emails. The Simple Mail Transfer Protocol, or SMTP, is used. It allows email clients to submit emails for sending via an SMTP server. You can also use it to receive emails from an email client, but IMAP is more commonly used.

### Post Office Protocol (POP)

The Post Office Protocol (POP) is an older protocol used to download emails to an email client. The main difference in using POP instead of IMAP is that POP will delete the emails on the server once they have been downloaded to your local device. Although it is no longer commonly used in email clients, developers often use it to implement email automation as it is a more straightforward protocol than IMAP.

### File Transfer Protocol (FTP)

When running your websites and web applications on the Internet, you'll need a way to transfer the files from your local computer to the server they'll run on. The standard protocol used for this is the File Transfer Protocol or FTP. FTP allows you to list, send, receive and delete files on a server. Your server must run an FTP Server and you will need an FTP Client on your local machine. You'll learn more about these in a later course.

### Secure Shell Protocol (SSH)

When you start working with servers, you'll also need a way to log in and interact with the computer remotely. The most common method of doing this is using the Secure Shell Protocol, commonly referred to as SSH. Using an SSH client allows you to connect to an SSH server running on a server to perform commands on the remote computer.
All data sent over SSH is encrypted. This means that third parties cannot understand the data transmitted. Only the sending and receiving computers can understand the data.

### SSH File Transfer Protocol (SFTP)

The data is transmitted insecurely when using the File Transfer Protocol. This means that third parties may understand the data that you are sending. This is not right if you transmit company files such as software and databases. To solve this, the SSH File Transfer Protocol, alternatively called the Secure File Transfer Protocol, can be used to transfer files over the SSH protocol. This ensures that the data is transmitted securely. Most FTP clients also support the SFTP protocol.

# APIs and services

> An API is a set of functions and procedures for
> creating applications that access the features or data of an operating system,
> application or other service.

**In Software development,
API's are often the bridge between different components or systems.
This earns them names like gateway or middleware.
The term is used widely to represent many different tools and systems.**

### Browser or Web APIs

**Built into the browser itself.**

> They extend the functionality of the browser by adding new services and
> are designed to simplify complex functions and provide easy syntax for
> building advanced features.

A good example, is the DOM API.  
**The DOM API turns the html document into a tree of nodes that
are represented as JavaScript objects.**  
 
Another example, is the geolocation API that returns coordinates of where
the browser is located.  
There are also other API's available for

- Fetching data known as Fetch API
- Drawing graphics or Canvas API
- Keeping history or history API.
- Client side storage also known as Web Storage API.

# REST API.

> This kind of API provides data for popular web and mobile apps.

These are also called **_web servers_**  
REST or representational state transfer,
**is a set of principles that help build highly efficient API's.**

![rest_api](../Pics/restAPI.gif "rest_api")
<span style='color: #C63; font-weight: bold;'>One of the main responsibilities of these kinds of API's is sending and
receiving data to and from a centralized database.
We can query our own REST API or third party ones.
</span>

These API web servers are designed to provide the data backbone for
a web client like a web page or mobile app.
This means that these API's must be able to accomplish things like

- getting data or `get`,
- creating data. Also referred to as `post`
- updating data or `put`
- and deleting data or `delete`.

API issues, REST principles and
good design practices to create discoverable interfaces.
This helps us get the exact response expected.

### Sensor-Based API.

> This is what the internet of things also known as IOT is based on.

These are actual physical senses that are interconnected with each other.
The sensors can communicate through API and track and respond to physical data.
Some examples are Philips hue, smart lights and node bots.

---

These API's use endpoints to specify how different resources can be accessed.
The endpoint is built into the URL when accessing the API.
Once the endpoint is hit, the API performs whatever service side
processing is needed to build the response.
Two common forms of response are, full web pages and data form based on
JavaScript called `Json`.

![api_mechanism](../Pics/API_mech.gif "api_mechanism")

### Back-end framework

it handles functionality
that is common to all web applications
such as `receiving HTTP requests`
and `sending HTTP responses`.
The developer then adds their own code that
implements the functionality of the web application.  
For instance with the e-commerce website example,
a framework would handle receiving `HTTP` requests.
The developer would implement
code that processes the request and returns
a response from which the framework
would send a response over `HTTP`.
