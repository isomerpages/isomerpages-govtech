---
layout: post
title: "Three important considerations in API development"
permalink: "/media/technews/three_important_considerations_in_api_development"
category: technews
image: "/images/technews/3-important-considerations-in-API-development-govtech-smart-nation.png"
---

![Three important considerations in API development](/images/technews/3-important-considerations-in-API-development-govtech-smart-nation.png)

Application programming interfaces (APIs) are essential for the interoperability of digital services. The MyInfo team at GovTech encourages the tech community to keep standards, security and documentation in mind when developing APIs.
---
You’re thinking about taking a holiday, but before you purchase your air tickets, you decide to use the fare aggregator website Skyscanner to get a sense of how much your flight may cost. Simply by keying in your desired flight dates and clicking on the ‘search’ button, you receive a list of fares from various airlines for comparison. It’s incredibly convenient, but it doesn’t happen magically.

Behind the scenes, application programming interfaces (APIs) are serving as digital ‘messengers’ carrying requests from the Skyscanner website to each airline’s database, then shuttling back with the desired information. APIs are responsible for allowing digital applications to communicate with one another and enabling seamless data sharing among organisations. Content-based systems such as Facebook and Twitter expose web APIs for other systems to easily consume and publish content, while others like Google expose functionalities or features which can be embedded on a website.

At the Government Technology Agency of Singapore (GovTech), we’re harnessing the power of APIs too to create better government digital services for citizens and businesses. 

For example, when a citizen uses [MyInfo](https://www.singpass.gov.sg/myinfo/common/aboutus) to transact with the government, APIs are running in the background to extract and compile information from multiple data sources. Organisations are welcome to [work with GovTech using our NDI {api} platform](https://www.ndi-api.gov.sg/library/trusted-data/myinfo/introduction) to tap on MyInfo, as well as collaborate with the government on other digital projects.

If you are building an API library, the MyInfo team would recommend you to consider these three important aspects.

![the MyInfo Team at GovTech](/images/technews/technews_api_part2.png)

### **1. Standards**

Good API design is the key to adoption. Just as the USB port helped unify the interface by which electronic devices connect to one another, API standards ensure that digital applications follow a common set of rules and ‘speak the same language’.

The World Wide Web Consortium (W3C) is the international community responsible for defining and updating these standards, which recommend that web APIs be delivered over the Hypertext Transfer Protocol Secure, or HTTPS system. In essence, this means that data is encrypted before being sent over a secure internet connection, SSL certificates for sender and recipient websites are appropriately installed and signed, and domain names check out. 

Also, web API responses should be in XML or JSON format. As the term ‘format’ implies, data returned in the response should be structured in a specific way so as to make it readable across multiple web applications. Uniform resource identifiers (URIs)—a string of text or numbers specifying a resource (such as a user profile) should be used as well. Importantly, APIs should be stateless; that is, authentication or authorisation protocols should not depend on cookies or sessions. 

Given that APIs may require frequent updates, version control for each API is essential to maintain an organised API library. Following these standards in API development will help expedite the development process while ensuring interoperability between web applications.

### **2.Security**

Rather than being built in only as an afterthought, security should be integral to the process of API development. This is especially important because very often, APIs are the entry points to your system data or functionality. Like a castle that is protected by a moat, high walls and other internal defences, a multi-layered approached to securing APIs and their associated applications is recommended. 

Firstly, network layer security should be in place. This secures the communication channel between applications (e.g. to only allow communications via HTTPS) and prevents programmes known as ‘sniffers’ from illegitimately monitoring network traffic or deciphering data. This should be accompanied by robust application layer security, which acts like bouncers at points where digital applications interact with other network elements, serving to protect against malicious attacks that expose private information.

Another good practice is to enforce IP whitelisting, which involves creating lists of trusted IP addresses or IP locations from which users can access an application. For more sensitive applications, the API should also require user identification, established using different authentication schemes such as Basic Authentication or Open Authorisation.

### **3. Documentation**

Well-designed APIs without good documentation and support is like a good company without a sales and customer relations department. This is because if the structure and function—and therefore, the value—of an API is not well communicated to someone other than its creator, it will not be adopted or plugged into any application ecosystem. 

Good API documentation should be easy to read and interpret, and contain information such as developer environments, URIs, parameters and response formats, security mechanisms and so on. Ideally, documentation should be supported by tutorials, examples and sample codes so that developers can easily integrate the APIs with their applications.

Furthermore, instead of regular content creation and maintenance tools and/or text editors, we suggest using modern and widely adopted standards such as OpenAPI Specification to provide potential developers with a good experience when trying to adopt an API solution.

Finally, nothing is more frustrating than encountering a problem and having no one to reach out to for help. If you are the creator of an API, do leave your contact details and respond to queries from potential users within a reasonable timeframe. Your community will thank you for it. 
