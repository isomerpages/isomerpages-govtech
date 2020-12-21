---
layout: post
title: "Postman.gov.sg-putting the 'mass' in mass communications"
permalink: "/media/technews/postman-gov-sg-putting-the-mass-in-mass-comms"
category: technews
image: "images/technews/images/technews/postman.PNG"
---

In January 2020, a new virus spread at unprecedented speed across multiple countries. Little was known about this novel threat – it would be named COVID-19 only in the next month – and amid the uncertainty, misinformation about the pandemic travelled as rapidly as the coronavirus itself. To combat the flood of fake news, the government had to pivot and find ways to communicate accurate, verified information to Singaporeans across the globe directly.

![Gov.sg WhatsApp sign up page](/images/technews/postman.PNG) Gov.sg WhatsApp sign up page. If you haven't, sign up for all the latest on COVID-19 and other news. PHOTO: GovTech


[Postman.gov.sg](https://postman.gov.sg/) is a product built by GovTech’s Open Government Products (OGP) together with the team at the Ministry of Communications and Information (MCI) under the leadership of Minister Iswaran to address the unmet needs of updating citizens with bite-size information rapidly and at scale. Using Postman.gov.sg, the Gov.sg WhatsApp channel was able to send a million messages within 22 minutes. This was a feat that was first of its kind, leading the wave to revamp how governments across the world could provide accurate public health information to control the pandemic. And the most amazing part? It was built in just three days, said Jean Tan, the tech lead for Postman.gov.sg's engineering team at OGP who shared her experience in developing Postman.gov.sg at the Stack 2020 Developers Conference. 

Well, know what they say – modern problems require modern solutions.


### **The need for speed**!
Towards the end of January, Jean’s team met with MCI to tackle the problem at hand. MCI leadership emphasised the need to communicate on a timely and frequent basis. Both teams came together and recognised that the existing WhatsApp channel that was used for peacetime communication was not meant for scale from a technical perspective and quickly pivoted to finding a new solution. 

As with any emergency operational processes, they started with manual processes for the updating of subscription requests while waiting for tech enhancement for the existing systems. One gap that was identified by the teams within 24 hours of operation was the fact that manual processing of subscription requests was not scalable. There was a pressing demand for official Covid-19 updates given the uncertainty, however, the team could not keep up with the influx of requests – which they had to manually process. The second gap identified was the sending speed of the existing solution – which was built for peacetime operations and scoped for a smaller subscriber base. As a result of COVID-19, the subscriber base jumped from around 7,000 to more than 50,000 overnight. The problem with lower sending speed was that it would take 14 hours to send out half a million messages, so the first and 500,000th recipient would get their messages more than half a day apart. It was not ideal for a citizen to receive an update from the government hours after someone else had received it. 

Both MCI and the Postman.gov.sg teams came together to pivot a Postman.gov.sg prototype that was built during OGP’s hackathon to a new product that would address the problems that the Government faced with COVID-19. The team pulled all-nighters in the office to integrate Postman.gov.sg with Form.gov.sg and Facebook’s WhatsApp Business Client – where the subscription applications were made – to automate the processing, closing the four-hour lag. 

After a couple of prototypes, MCI gave the go-ahead to launch on Feb 1, just three days after their first meeting. Eventually, the team managed to hit their target of sending out half a million messages in 10 minutes, 80 times faster than before.
 
 
 ## Overcoming technical difficulties
However, things were far from smooth sailing on launch day. The team was forced to scramble for solutions after the boost in sending speed overwhelmed their cloud computing service. They also had to come up with a more efficient database to read and store the millions of messages that were generated after each broadcast. These issues were valuable lessons in understanding the technical limits of the system they were working with, Jean said. 

This experience also taught her that she needed to know a system’s technical capabilities in order to stretch them and, more importantly, that she should not be afraid to push the boundaries.

For instance, the team noticed that each round of message sending involved a time-consuming validation of the phone numbers that were being pinged. Studying the technical documentation of the WhatsApp client closely, they figured out that they could do the validation just once a day at a different time from the broadcasts. As such, the system could now focus solely on sending out messages without being bogged down by the validation process. 

 

### **Work in progress**
Today, MCI uses Postman.gov.sg to send a million messages two to three times a day. The tool, which can also send email, SMS, and Telegram messages, has also been enhanced such that any public officer with a gov.sg email can use it. Entities without a government issued email are also using Postman.gov.sg. For example, hospitals use the system to send out Covid-19 test results to individuals who did swab tests. 

The team is not done with Postman.gov.sg and already has plans to improve it, such as by adding a rich text editor so that its interface resembles an email client. Perpetually on the lookout for feedback, Jean encouraged everyone – public officers or not – to try out the tool and reach out to the team with suggestions.  

“We’re always happy to talk to you about what you want to achieve with Postman and help you achieve your goal,” she said. 
