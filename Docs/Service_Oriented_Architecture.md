# How does service-oriented architecture work?

In service-oriented architecture (SOA), services function independently and provide functionality or data exchanges to their consumers. The consumer requests information and sends input data to the service. The service processes the data, performs the task, and sends back a response. For example, if an application uses an authorization service, it gives the service the username and password. The service verifies the username and password and returns an appropriate response.
Communication protocols

Services communicate using established rules that determine data transmission over a network. These rules are called communication protocols. Some standard protocols to implement SOA include the following:

- Simple Object Access Protocol (SOAP)
- RESTful HTTP
- Apache Thrift
- Apache ActiveMQ
- Java Message Service (JMS)

You can even use more than one protocol in your SOA implementation.

## What is an ESB in service-oriented architecture?

An enterprise service bus (ESB) is software that you can use when communicating with a system that has multiple services. It establishes communication between services and service consumers no matter what the technology.  

### Benefits of ESB

An ESB provides communication and transformation capabilities through a reusable service interface. You can think of an ESB as a centralized service that routes service requests to the appropriate service. It also transforms the request into a format that is acceptable for the service’s underlying platform and programing language.

## What are the limitations in implementing service-oriented architecture?

#### Limited scalability

System scalability is significantly impacted when services share many resources and need to coordinate to perform their functionality. 

#### Increasing interdependencies

Service-oriented architecture (SOA) systems can become more complex over time and develop several interdependencies between services. They can be hard to modify or debug if several services are calling each other in a loop. Shared resources, such as centralized databases, can also slow down the system.

#### Single point of failure

For SOA implementations with an ESB, the ESB creates a single point of failure. It is a centralized service, which goes against the idea of decentralization that SOA advocates. Clients and services cannot communicate with each other at all if the ESB goes down.


### What are microservices?

Microservices architecture is made up of very small and completely independent software components, called microservices, that specialize and focus on one task only. Microservices communicate through APIs, which are rules that developers create to let other software systems communicate with their microservice.

The microservices architectural style is best suited to modern cloud computing environments. They often operate in containers—independent software units that package code with all its dependencies.
Benefits of microservices

Microservices are independently scalable, fast, portable, and platform agnostic—characteristics native to the cloud. They are also decoupled, which means they have limited to no dependencies on other microservices. To achieve this, microservices have local access to all the data they need instead of remote access to centralized data that other systems also access and use. This creates data duplication which microservices make up for in performance and agility.
SOA compared to microservices

Microservices architecture is an evolution of the SOA architectural style. Microservices address the shortcomings of SOA to make the software more compatible with modern cloud-based enterprise environments. They are fine grained and favor data duplication as opposed to data sharing. This makes them completely independent with their own communication protocols that are exposed through lightweight APIs. It’s essentially the consumers' job to use the microservice through its API, thus removing the need for a centralized ESB.

# Strangler Fig Pattern

you can combine Service-Oriented Architecture (SOA) principles with a Modular Monolith, often as a strategic approach to gradually transition to a more distributed system like microservices. A modular monolith already enforces clear boundaries between functional units, which can serve as a strong foundation for identifying potential services in an SOA or microservices architecture. 
How they can be combined:

    Modular Monolith as a stepping stone:
    You can start with a well-structured modular monolith, where modules have clear responsibilities and low coupling, and then gradually extract these modules into individual services as needed, effectively transitioning towards a more SOA-like or microservices architecture. 

SOA for internal structure:
Within a modular monolith, you can implement SOA principles by defining clear interfaces and communication protocols between modules, even if they are deployed as a single unit initially. This allows for easier extraction later if required. 
Event-driven communication:
You can leverage event buses (like NATS, RabbitMQ, or Kafka) to facilitate loosely coupled communication between modules within the modular monolith. This same event bus can later support communication between independently deployed services in an SOA or microservices environment. 
Frameworks and tools:
Tools like Google Cloud's Service Weaver are designed to combine aspects of modular monoliths and microservices, offering a monorepo structure with components that can be run either as a single process or as separate deployments. 
Gradual evolution:
Instead of a "big bang" transition, you can incrementally extract services from a modular monolith, addressing specific needs for scalability, independent deployability, or team autonomy. This approach reduces the risks associated with adopting a fully distributed system from the outset. 



# Message Broker

 message broker acts as an intermediary in a distributed system, managing the routing and delivery of messages between producers and consumers, while a message queue is a specific data structure used by brokers (or standalone) to store messages temporarily until they can be processed. In essence, a message broker is a more comprehensive solution that often utilizes message queues as a component of its functionality, offering features like advanced routing and transformations, whereas a message queue primarily focuses on the storage and delivery of messages in an asynchronous, often point-to-point manner.
 
Key Differences:

    Role and Functionality:
        Message Broker: An intermediary that handles message routing, transformation, and delivery, often supporting complex communication patterns like publish-subscribe (pub/sub) and request-response, and offering features like protocol conversion and data enrichment. 

Message Queue: A component that stores messages in a specific order, typically used for asynchronous, point-to-point communication where a message is sent and consumed by a single recipient. 

Scope and Complexity:

    Message Broker: Designed for larger, more complex systems, providing a robust platform for distributed communication and integration between diverse applications. 

Message Queue: More suited for simpler, direct message processing and workload balancing scenarios where messages are consumed once. 

Message Consumption:

    Message Broker: Can facilitate various messaging models, including one-to-one (queues) and one-to-many (pub/sub). 

Message Queue: Primarily designed for one-to-one communication, where a message is consumed by one receiver and then removed. 

Examples:

    Message Brokers: RabbitMQ, Apache Kafka. 

Message Queues: Often implemented within brokers, but also can be standalone systems like AWS SQS in certain contexts


## A message queue provider

 is a software system that facilitates asynchronous communication between different applications or components by acting as an intermediary for messages. Popular examples include Amazon SQS, RabbitMQ, Apache Kafka, Google Cloud Pub/Sub, and Azure Service Bus.
 
Key features and benefits of message queue providers:

    Asynchronous Communication:
    They allow senders and receivers to operate independently, improving system responsiveness and decoupling applications. 


Reliability and Scalability:
Many providers offer features like message persistence, retry mechanisms, and distributed architectures to ensure reliable message delivery and handle varying loads. 
Load Balancing:
They can distribute tasks among multiple consumers, preventing a single component from being overwhelmed. 
Buffering:
Message queues act as buffers, absorbing spikes in message volume and smoothing out processing workloads. 

Common message queue providers and their characteristics:

    Amazon SQS (Simple Queue Service):
    A fully managed service from AWS for message queuing. 

RabbitMQ:
An open-source message broker widely used for various messaging patterns, including traditional queues and publish-subscribe. 
Apache Kafka:
Known for its high throughput and fault tolerance, it functions as both a message queue and a distributed streaming platform. 
Google Cloud Pub/Sub:
A managed messaging service offered by Google Cloud for high-volume data streams. 
Azure Service Bus:
Microsoft's offering for enterprise messaging, supporting queues, topics, and subscriptions. 
IBM MQ:
A robust and secure messaging middleware often used in enterprise environments. 
Apache Pulsar:
A cloud-native messaging and streaming platform that can also function as a message queue. 
Redis:
While primarily a data structure store, Redis can also be used for high-performance message queuing, especially with its pub/sub capabilities. 


## gRPC


gRPC is a high-performance, open-source framework for building APIs, leveraging Remote Procedure Calls (RPCs) and the HTTP/2 protocol. It enables efficient communication between services, especially in microservices architectures, and is designed to be language-agnostic and platform-neutral. 
Here's a more detailed breakdown:

    Remote Procedure Calls (RPC):
    gRPC is built on the RPC model, which allows a program on one machine to execute a procedure on another machine as if it were a local call. 

HTTP/2:
gRPC uses HTTP/2 as its transport protocol, offering benefits like multiplexing, header compression, and binary framing, which lead to faster and more efficient communication compared to older protocols like HTTP/1.1. 
Protocol Buffers:
gRPC utilizes Protocol Buffers (protobuf) as its interface definition language and serialization mechanism. Protobufs define the structure of data exchanged between services in a compact, binary format. 
Language and Platform Agnostic:
gRPC supports various programming languages and platforms, making it easier to build distributed systems with diverse technology stacks. 
Key Features:

    Contract-first API development: gRPC encourages defining APIs using protobufs, which ensures clear contracts between services. 

Strong typing: Protobufs provide strong typing, which helps prevent errors and ensures data integrity. 
Streaming support: gRPC supports client, server, and bidirectional streaming, enabling efficient data transfer for real-time or large datasets. 
Load balancing and interception: gRPC offers built-in features like load balancing and interception, allowing for more robust and flexible service communication. 

Use Cases:

    Microservices: gRPC is well-suited for connecting microservices within a distributed system, enabling efficient communication between independently deployable services. 

Client-server communication: gRPC can be used to connect mobile devices, web clients, or other applications to backend services. 
High-performance applications: Its efficiency and low latency make gRPC a good choice for applications that require fast data exchange. 



# Fault tolerance

Fault tolerance in software development refers to a system's ability to continue operating correctly and without interruption despite the failure of one or more of its components. It's about designing systems to be resilient to errors and disruptions, ensuring the continuity of service and high availability of critical applications. 
Key aspects of fault tolerance:

    Detect, Isolate, and Recover:
    Fault-tolerant systems are designed to detect failures, isolate the faulty component, and then recover by automatically bringing backup components or processes into operation to maintain functionality. 

Redundancy:
This often involves using backup hardware or software instances that can take over if a primary component fails. Examples include mirrored disks, replicated databases, or parallel server instances. 

redundancy refers to the intentional duplication of critical components or functionalities within a system to enhance reliability and fault tolerance, ensuring continued operation even if one component fails. This concept can also refer to unnecessary or repeated code or data, which is undesirable and should be minimized through practices like refactoring and encapsulation. 

Redundancy in terms of reliability:

    Purpose: To prevent single points of failure and ensure system availability. 

Examples: Duplicate hardware, backup power supplies, or redundant network connections. 
Benefits: Increased uptime, protection against data loss, and seamless failover. 

Redundancy in terms of code: 

    Purpose: To eliminate repetitive code that can lead to maintenance issues and potential bugs.
    Examples: Multiple identical code blocks, duplicate logic in different parts of the program.
    Benefits: Easier maintenance, improved code quality, and reduced development effort. 

Focus on Availability and Business Continuity:
The primary goal is to prevent disruptions and ensure that mission-critical systems remain accessible and operational, regardless of underlying hardware or software issues. 
Not about preventing failure, but about graceful failure:
While some systems aim to prevent failures, fault tolerance acknowledges that failures are inevitable and focuses on designing systems that can "fail gracefully" and continue to function with minimal or no user impact. 

