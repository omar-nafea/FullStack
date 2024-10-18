# Internet Protocols

When you send data between computers across the internet,
a common way of understanding this is that the computers
are the destinations that request and recieve the data
and the networks are the roads that the data travels across.  
What makes that possible is the Internet Protocol.

Think of it as postal system when you send a letter to a friend
you need their address otherwise they won't receive your letter.
Computers work in a similar way.

## IP protocol

Every computer on a network is assigned an IP address.

Version four and version six are currently the two most widely used
standards of internet protocol.

In protocol version four an IP address contains four octet.
It's separated by periods or dots.
For example `192.0.2.235`
In protocol version six.
An IP address contains eight groups of hexadecimal digits separated by a colon.
For example `4527:0a00:1567:0200:ff00:0042:8329`

When you send data across a network,
you send the data as a series of messages called IP packets.
Also known as data grams.  
At a high level IP packets contain a header and a payload or the data.

Think of that as postal system , when you send a letter.
You not only include the recipient's address but
also your own address in case a return location is needed.
IP packets are the same.

- <span style='color: #C63; font-size: 18px;font-weight: bold
      '> IP packets include the destination IP address and source IP address.
  These addresses are in the header along with some additional information to help
  deliver the packet.</span>

- And the payload contains the data of the packet and
  **some of the other protocols**.

![ipPackets](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBAElIEZYzxh6hZahlu5kl_ZKOjwdEecSZvg&s "IpPacktes")
When sending multiple letters to a friend it's possible they may arrive out
of order.
It's possible that a package will get damaged or
if you're really unlucky a letter could get lost.
These issues can happen to IP packets too they can

- arrive out of order
- become damaged
- corrupted to in transit
- be dropped or lost during transit.

To solve these problems,
the payload part of the packets contains other protocols too.
You can think of them as another message inside the payload of the IP packet.

### TCP | UDP

The two most common protocols are the **Transmission Control Protocol**
referred to as **TCP** and the **User Datagram Protocol**, also known as **UDP**.

- TCP can solve three issues but
  at the cost of a small delay when sending the data.
  This protocol is used for sending the data that must arrive correctly and
  in order such as a text or image files.


- UDP solves the corrupt packet issue but
  packets can still arrive out of order or not arrive at all.
  This protocol is used for sending data that can tolerate some data loss such
  as voice calls or live video streaming.  
- Both of these protocols contain payloads that contain further protocols inside of them

The internet uses internet protocols much like an old fashioned postal system.
These protocols can help to make sure that data
arrives in order does not become corrupted or lost or dropped during transit.

<!-- TCP/IP protocol form the basic communication language of the internet   -->
<!-- which labels the packets of data and makes sure that even though some -->
<!-- pieces of the same data take a different route, they all arrive at their -->
<!-- destination and can be reassembled. -->

# HTTP

> HTTP is a core operational protocol
> of the world wide web.
> It is what enables your web browser to
> communicate with a web server that hosts a website.

**HTTP stands for Hypertext Transfer Protocol.**  
It is a protocol used for transferring
web resources such as HTML documents,
images, styles, and other files.  
**HTTP is a request response based protocol.**  
A web browser or client sends an HTTP request to
a server and the web server sends the HTTP response back to the browser.


# HTTP request

An HTTP requests consists of a method,
path, version and headers.

```json
GET / HTTP/1.1
Host: developer.mozilla.org
Accept-Language: en
```

The HTTP method describes
the type of action that the client must performed.
The primary or the most commonly used HTTP methods are,
`GET`, `POST`, `PUT`, and `DELETE`.

**The `GET` method is used to
retrieve information from the given server.**

---

**The `POST` request is used to send data to the server.**

---

**The `PUT` method updates whatever
currently exists on the web server with something else.**

---

**The `DELETE` method removes the resource.**

---

The path is the representation of
where the resource is stored on the web server,
for example if you wanted to
request an image from a page in a website,
then the URL in the address bar would need to
contain the full path to
that particular file on the web server,
`https://example.com/images/image.jpg`

There are multiple versions of the HTTP protocol.
**1.1 and 2.0 are the most used.**

Finally, there are the headers.
Headers contain additional information about
the request and the client that is making the request.

For certain requests methods,
the request will also contain
a body of content that the client is sending.
Now, let's cover some details
about the makeup of an HTTP response.

# HTTP responses

follow a format similar to the request format.

```json
HTTP/1.1 200 OK
Date: Sat, 09 Oct 2010 14:28:02 GMT
Server: Apache
Last-Modified: Tue, 01 Dec 2009 20:18:22 GMT
Etag: '2434j4224-423243n2424'
Accept-Ranges: bytes
Content-Length: 23309
Content-Type: text/html
```

Following the header, the response
will optionally contain
a message body consisting of
the response contents such as the HTML document,
the image file and so forth.

```html
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Internet Protocols</title>
  </head>
  <body>
    <p>Hello, World!</p>
  </body>
</html>
```

HTTP status codes contained within the header
indicate if the HTTP request successfully completed.  
The code values are in the range of
`100-599` and are grouped by purpose.  
The status message `OK` is
a text representation of the status code.  
`404` error not found or `500` errors Server is not responding.

### There are five groups of status codes.

They are grouped by the first digit of the error number.

### `Informational` responses are grouped `100-199`.

**Information responses**
are provisional responses sent by the server.
These responses are interim before the actual response.
The most common information response is 100 continue,
which indicates that the web client should continue to
request or ignore the response
if the request is already finished.

### `Successful` responses are grouped from `200-299`.

**Successful responses** indicate that
the request was successfully processed by the web server,
with the most common success response
being `200 OK`.
You're receiving these responses every day when you
receive content successfully from a website.  
The meaning of `OK`,
depends on the `HTTP` method.

- If the method is `GET`,
  it means that the resource is `found/included` in the body of the HTTP response.
- If it's `POST`, it means that the resource was
  `successfully transmitted` to
  the web server
- if it's `PUT`,
  the resource was `successfully
transmitted` to the web server.
- if the method is `DELETE`,
  it means the resource was `deleted`.

### `Redirection` message are `300-399`.

> Redirection responses indicate to the web client
> that the requested resource
> has been moved to a different path.

The most common response codes used are
`301 moved permanently` and `302 found`.

```json
HTTP/1.1 301 Moved Permanently
Location: http://www.somemetaexamplesite.com/mypage.html
Content-Type: text/html
```

The difference between the redirection messages
`301` and `302` is that
`302` indicates a temporary
redirection. The resource has been temporarily moved.

```json
HTTP/1.1 302 Found
Location: http://www.somemetaexamplesite.com/mypage.html
```

<span style='color: #C63; font-size: 18px;font-weight: bold
      '> When web browsers receive these responses,
they will automatically submit
the request for the resource at the new path.
</span>

```json
HTTP/1.1 301 Moved Permanently
Location: 'https://www.somemetaexamplesite.com/mypage.html' # New path
```

### `Client error` responses range from `400-499`,

> Client error responses indicate
> that the requests contained
> bad syntax or content
> and cannot be processed by the web server.

- The most common codes used are `400` is
  used when the web browser or
  client submitted bad data to the web server,

---

- `401` is used to indicate that the user
  must log into an account
  before the request can be processed,

---

- `403` is used to indicate the request was valid,
  but that the web server is refusing to process it.
  - This is often used to indicate user does not have sufficient permissions to execute
    an action in a web.

---

- `404` is used to indicate that
  the request resource was not found on the web server.
  Server error responses indicate that a failure
  occurred on the web server
  while trying to process the request.

---

### `server error` responses are `500-599`.

The most common code used is `500` internal server error,
which is a generic error status
indicating that the server failed to process the request.

**HTTPS is the secure version of HTTP**

It is used for secure communication between two computers
so that nobody else can see
the information being sent and received.
It does this by using something called encryption.

Like in HTTP, the requests and responses
still behave in the same way and have the same content.  
The big difference is that before the content is sent,
it is turned into a `secret code`.  
Only the other computer can turn
the secret code back into its original content.
If someone else was to look at the code,
it wouldn't be understandable.  
![secure_code](../Pics/secureHTTP.png "secure_code")
You use HTTPS every day.
This is the lock icon you see
beside the URL in your web browser.

# A brief summary of HTTP

> Firstly, it is a protocol
> used by web clients and web servers.  
> It works to transfer web resources such as HTML files,
> and is the foundation of any data exchanges on the web.

_*Also, remember that by using HTTPS,
we send the information securely.*_

---

**_Requests are sent by the client,
usually a web browser,
and the server replies with responses which may be
the return of an image or an HTML page._**

## HTTPS requests

have a syntax that includes 
<span style='color: #C63; font-size: 18px;font-weight: bold'>method, path, versions and headers</span>

![http_request](../Pics/HTTPrequest.png)

## HTTP responses

follow a similar format to the request.

- **HTTP status codes indicate**  
  whether
- **HTTP requests successfully completed.**
