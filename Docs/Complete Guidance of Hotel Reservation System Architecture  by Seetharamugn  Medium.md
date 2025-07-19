Complete Guidance of Hotel Reservation System Architecture

![](https://miro.medium.com/v2/resize:fit:1200/1*17YONIvScNiIosmiNrpH3w.png)

fig. Hotel Reservation System.

This blog explores the design of a scalable hotel reservation system, focusing on architecture that supports efficient listings, secure bookings, and reliable notifications. With components like search clusters, payment integration, and error handling, this system ensures high performance and a seamless user experience. Learn how to create a resilient foundation for modern hotel management platforms.

## **Overview**

-   Introduction
-   Requirements
-   Data Model
-   API Design
-   Hotel Onboarding Flow
-   Booking Hotel Flow
-   Addition Discussion points

## **Introduction**

Hotel reservation systems are one of the most popular topics for system design interviews. While it might seem like a simple concept on the surface, a hotel reservation system is a complex platform that enables users to easily manage bookings, check in guests, and perform other essential functions.

Additionally, it provides the capability to accept direct bookings alongside integrations with various distribution channels like Booking.com and Airbnb.

## Requirements

-   **Functional Requirements  
    \-** Hotel Management  
    \- Search & Reservation  
    \- Reservation History  
    \- Notifications
-   **Non Functional Requirements  
    **\- Consistency  
    \- Low latency

## Data Model

![](https://miro.medium.com/v2/resize:fit:1200/1*HreAfto8U8SRaj1dyADAkQ.png)

fig. Hotel Reservation ER Diagram.

1.  **Users Table  
    \-** Purpose: Stores user account information  
    \- Key fields:  
    `id`: Unique identifier (UUID)  
    `name`: User's full name  
    `email`: Unique email address with regex validation  
    `created_at`: Account creation timestamp  
    Relationships:  
    \- _One-to-many with Reservations_  
    \- _One-to-many with Notifications_
2.  **Hotels Table  
    \-** Purpose: Stores hotel property information  
    \- Key fields:  
    `id`: Unique identifier  
    `name`: Hotel name  
    `address`: Physical location  
    `created_at`: Record creation time  
    Relationships:  
    _One-to-many with Rooms  
    Many-to-many with Amenities (through hotel\_amenities)_
3.  **Amenities Table  
    \-** Purpose: Catalog of all possible amenities  
    \- Key fields:  
    `id`: Unique identifier  
    `name`: Amenity name  
    `description`: Detailed description  
    Relationships:  
    _Many-to-many with Hotels (through hotel\_amenities)  
    Many-to-many with Room Types (through room\_type\_amenities)_
4.  **Room Types Table  
    \-** Purpose: Defines categories of rooms  
    \- Key fields:  
    `id`: Unique identifier  
    `name`: Type name (e.g., "Deluxe Suite")  
    `num_beds`: Number of beds  
    `max_occupancy`: Maximum guests allowed  
    `base_price`: Standard rate  
    Relationships:  
    _One-to-many with Rooms  
    Many-to-many with Amenities (through room\_type\_amenities)_
5.  **Rooms Table  
    \-** Purpose: Individual room inventory  
    \- Key fields:  
    `id`: Unique identifier  
    `hotel_id`: Associated hotel  
    `room_type_id`: Room category  
    `room_number`: Physical room identifier  
    Relationships:  
    _Many-to-one with Hotels  
    Many-to-one with Room Types  
    One-to-many with Reservations_
6.  **Room Inventory Table  
    \-** Purpose: Tracks room availability  
    \- Key fields:  
    `room_id`: Associated room  
    `available_rooms`: Number available  
    `created_at`: Last update timestamp  
    Relationships:  
    _Many-to-one with Rooms  
    Many-to-one with Room Types\\_
7.  **Room Pricing Table  
    \-** Purpose: Dynamic pricing information  
    \- Key fields:  
    `room_type_id`: Associated room type  
    `date`: Pricing date  
    `price`: Rate for that date  
    Relationships:  
    _Many-to-one with Room Types_
8.  **Reservations Table  
    \-** Purpose: Booking records  
    \- Key fields:  
    `id`: Unique identifier  
    `user_id`: Booking user  
    `room_id`: Booked room  
    `check_in_date`: Arrival date  
    `check_out_date`: Departure date  
    `total_price`: Total booking cost  
    `status`: Booking status  
    Relationships:  
    _Many-to-one with Users  
    Many-to-one with Rooms  
    One-to-many with Notifications_
9.  **Notifications Table  
    \-** Purpose: User communication records  
    \- Key fields:  
    `id`: Unique identifier  
    `user_id`: Target user  
    `reservation_id`: Related booking  
    `message`: Notification content  
    Relationships:  
    _Many-to-one with Users  
    Many-to-one with Reservations_

## API Design (REST API)

Given the simplicity of the of data, a classic RESTful API could be used. RESTful APIs are simple, widely used, stateless, and support caching which make it a perfect candidate for our system.

1.  **POST /api/hostel  
    \-** Description: Allows a hotel manger to add a new hotel to the platform.  
    \- Params: names, description etc.
2.  **POST /api/{hotel\_id}/room\_type  
    **\- Description: Allows a hotel manger to add a new room type to a hotel.  
    \- Params: hotel\_id, name, description etc.
3.  **GET /api/search  
    **\- Description: Allows user to search for hotels and room type bases on filters and view available options.  
    \- Params: location, check\_in\_date, check\_out\_date, num\_guests, num\_beds etc.
4.  **POST /api/reservations**  
    \- Description: Allows a user to create a new reservation for a room type.  
    \- Params: hotel\_id, room\_type\_id, check\_in\_date, check\_out\_date ect.

## Estimation and Constraints

Let’s break down the estimations:

## Traffic Estimates

Let’s assume:  
\- 50 million daily active users (DAU) — considering global traffic  
\- Average user performs 20 actions per day:  
\- Search for hotels (10 searches)  
\- View hotel details (5 views)  
\- Check room availability (3 checks)  
\- Make/manage bookings (2 actions)

**Total daily requests:  
**50 million × 20 actions = 1 billion requests/day

**Requests Per Second (RPS):  
**1 billion / (24 hours × 3600 seconds) = ~11,574 RPS  
≈ 12K RPS

## Storage Estimates

1.  **User Profile Data  
    \-** 200 million total users  
    \- Each user profile ≈ 1 KB (name, email, preferences, etc.)  
    \- Total: 200 million × 1 KB = 200 GB
2.  **Hotel Listings  
    \-** 10 million properties worldwide  
    \- Each hotel listing ≈ 10 KB (details, amenities, policies)  
    \- Images stored separately in CDN  
    \- Total: 10 million × 10 KB = 100 GB
3.  **Room Types & Inventory  
    \-**Average 5 room types per hotel  
    \- Each room type record ≈ 2 KB  
    \- Total: 10 million × 5 × 2 KB = 100 GB
4.  **Reservations  
    \-** 1 million new bookings per day  
    \- Each reservation ≈ 2 KB  
    \- Daily storage: 1 million × 2 KB = 2 GB  
    \- Yearly storage: 2 GB × 365 = 730 GB
5.  **Room Pricing & Availability  
    \-** 10 million rooms × 365 days of inventory  
    \- Each record ≈ 100 bytes  
    \- Total: 10 million × 365 × 100 bytes ≈ 365 GB

## Bandwidth Estimates

1.  **Ingress (Write) Traffic  
    \-** New reservations: 1 million × 2 KB = 2 GB/day  
    \- Updates to inventory: 10 million × 100 bytes × 10 updates = 10 GB/day  
    \- Total ingress: ~12 GB/day
2.  **Egress (Read) Traffic  
    \-** Hotel searches: 500 million × 1 KB = 500 GB/day  
    \- Hotel detail views: 250 million × 10 KB = 2.5 TB/day  
    \- Total egress: ~3 TB/day

**Bandwidth required:  
**3 TB / (24 hours × 3600 seconds) ≈ 35 MB/second

**Cache Requirements:  
\-** Hot hotel listings (20% of inventory): 20 GB  
\- Active user sessions: 50 million × 2 KB = 100 GB  
\- Search results cache: 200 GB  
\- Total cache size needed: ~320 GB

## Hotel Onboarding Flow

![](https://miro.medium.com/v2/resize:fit:1200/1*IqQQ8xn0or-7h36_f_LDxw.png)

**Fig. Hotel Onboarding flow**

The Listing Hotel Flow diagram depicts the architectural components and their interactions in a hotel management system. Let me explain the flow in a point-wise manner:

**1\. Admin App (Step 1):** The process begins when an admin uses the **_Admin App_** to create or update hotel listings. This request is sent to the **_Gateway_**_._

**2\. Gateway (Step 2):** The Gateway receives the request and routes it to the **_Admin Service_**. It acts as an API gateway that directs the request to the appropriate backend service.

**3\. Admin Service (Steps 3a, 3b, and 3c):** The Admin Service processes the listing request and may perform the following actions:  
**— Step 3a:** Sends a message to the **_Admin Queue_** to handle further asynchronous processing, ensuring high availability and responsiveness.  
**— Step 3b:** Interacts with **_Object Storage_** to save media assets related to the hotel listing, such as images or videos.  
**— Step 3c:** Updates the **_Content Delivery Network_** _(CDN)_ with the latest media assets to enable fast access to hotel images and content for end users.

**4\. Admin Queue (Step 4a):** The message in the Admin Queue is picked up by the **_Admin Consumer_** for processing.

**5\. Admin Consumer (Steps 4b and 4c):** The Admin Consumer is responsible for handling tasks that may take more time or require additional processing power. It performs the following:  
**— Step 4b:** Updates the **_Elastic Search Cluster_** with the latest hotel listing data to enable fast search and filtering capabilities.  
**— Step 4c:** Updates the _Hotel Database_ with the new or modified hotel listing information.

**6\. Notification Queue (Step 5a):** Once the hotel listing is updated, a notification is placed in the **_Notification Queue_** to inform relevant users (e.g., admins or end users) about the new or updated listing.

**7\. Notification Service (Steps 5b and 5c):** The **_Notification Service_** reads messages from the Notification Queue and sends notifications to users through multiple channels:  
**— Email**  
**— SMS**  
**— APN (Apple Push Notification)**  
**— FCM (Firebase Cloud Messaging)**

The overall flow demonstrates a scalable and distributed architecture, where different components handle specific responsibilities, such as data storage, search, asynchronous processing, and communication, to provide a robust and efficient hotel management system.

## Hotel Booking Flow

![](https://miro.medium.com/v2/resize:fit:1200/1*21k21TJqjS3G_4uaPUjrLw.png)

**Fig. Hotel Booking Flow**

Here’s an explanation of the hotel booking flow based on the architecture diagram:

**1\. User App (Step 1)**: The user initiates a booking request through the User App. This request is sent to the **_Gateway_**.

**2\. Gateway (Step 4a and 4b)**: The Gateway routes the request to the **H_otel Service_**. It handles API requests, and it’s responsible for directing them to the right service in the backend.

**3\. Hotel Service (Step 2):** The Hotel Service handles hotel information, availability, and booking logic. When the request reaches the Hotel Service, it may perform two actions:  
— **step 3a**: It interacts with an **_Elastic Search Cluster_** to retrieve hotel search and filter information quickly.  
— **Step 3b**: It connects to the **_Hotel Database_** for detailed hotel information, booking availability, and other hotel data.

4\. **Reservation Service (Step 5a and 5b):** After gathering the necessary information, the Hotel Service communicates with the **_Reservation Service_** to finalize the booking.  
— **Indempotency Cache:** The Reservation Service utilises an **_Idempotency Cache_** to ensure that duplicate booking requests are not processed multiple times.

**5\. Hotel Database (Step 5c):** The Reservation Service may update the _Hotel Database_ with the confirmed reservation details.

**6\. Notification Queue (Step 6a and 6b):** Once the reservation is confirmed, a notification message is added to the **_Notification Queue_**. This queue system helps handle message delivery asynchronously, ensuring that users are notified of their booking status without delay.

**7\. Notification Service (Step 6c):** The **_Notification Service_** reads from the Notification Queue and processes notifications. It can send alerts to the user through multiple channels:  
**— Email**  
**— SMS**  
**— APN (Apple Push Notification)**  
**— FCM (Firebase Cloud Messaging)**

Each of these services and steps allows for a streamlined booking process, providing users with timely updates and ensuring high availability and responsiveness for hotel booking transactions.

## Addition Discusion points

## 1\. Payment Integration

-   **Secure Transactions**: Integrates with a secure payment gateway (e.g., Stripe, PayPal) to process payments for hotel listings, deposits, or booking fees. This ensures safe handling of customer financial data.
-   **Seamless Checkout**: Allows users to make payments within the application without redirection to third-party sites, improving the overall user experience.
-   **Automated Billing and Refunds**: Manages payment processes, such as recurring billing or refunds for cancellations, to reduce manual work and ensure accurate financial transactions.

## 2\. Error Handling

-   **Automated Error Detection**: Detects and logs issues (e.g., missing data, network failures) within each service. This ensures timely awareness of errors in the listing or booking process.
-   **User-Friendly Feedback**: Provides clear error messages to end users, allowing them to understand issues and take corrective actions, reducing frustration.
-   **Graceful Degradation**: Maintains core functionality even if certain components fail (e.g., if the payment gateway is down, users can still browse listings), ensuring a smooth experience even during partial outages.

## 3\. Monitoring and Logging

-   **Real-Time Monitoring**: Tracks key metrics (e.g., response times, transaction counts) and health checks for each service, allowing rapid response to issues and performance bottlenecks.
-   **Comprehensive Logs**: Stores detailed logs of user actions and system events to facilitate debugging and analyze behavior patterns, aiding in performance optimization.
-   **Alerting and Incident Management**: Integrates with alerting tools (e.g., PagerDuty, Slack) to notify the team of critical errors or unusual activity, helping to resolve issues before they impact users.

These additional components strengthen the architecture by improving security, resilience, and user experience, ultimately helping to maintain a reliable and user-friendly hotel booking system.

## Conclusion

This hotel reservation system design provides a comprehensive, scalable, and resilient architecture for managing hotel listings, reservations, and notifications. By incorporating essential services like an admin and user gateway, object storage, notification queues, and search clusters, the system ensures fast data retrieval, secure media management, and timely updates. Additional layers of payment integration, error handling, and monitoring/logging enhance transaction security, reliability, and maintainability. The use of a notification service ensures effective communication through various channels, creating a seamless experience for users and admins alike. This architecture supports future growth and provides a robust foundation for a dynamic hotel booking platform.