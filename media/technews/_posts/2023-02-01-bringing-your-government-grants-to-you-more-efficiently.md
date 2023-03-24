---
layout: post
title: "Timely government support – Made possible by a new citizen disbursement system bringing your government grants to you more efficiently"
permalink: "/media/technews/bringing-your-government-grants-to-you-more-efficiently"
category: technews
image: "/images/technews/citizen_disbursement.jpg"
---

![The team behind the system](/images/technews/citizen_disbursement.jpg)
*The team behind the Citizen Disbursement IT System. From L-R Steven Ooi, Wu Ting Ting, Chia Wei Kang, Tseng Wei Haur*

In recent months, you might have heard of or even benefited from the many Government support schemes being rolled out. These include the GST Voucher, the Assurance Package and various Special Payments, which ultimately help Singaporeans cope with daily living and are an important part of our social security system.

As the implementing agency of these Government schemes, Central Provident Fund Board (CPFB) has been called on more frequently to mete out timely and accurate support to citizens. To this end, CPFB joined forces with GovTech to modernise its IT system, developing a new Citizen Disbursement IT System (“CDIT”), which flexibly caters to varying scheme criteria and grant disbursement amounts. GovTech provided expertise and support in design, engineering and agile practices, which helped CPFB with its harmonisation of existing business processes to enhance the speed of grant disbursement to Citizens. Phase 1 of the system was rolled out to support the 2022 GST Voucher, Cost of Living Special Payment and Assurance Package 2023, disbursing a total of $3.1 billion in grants to up to 2.9 million individuals over five schemes.  

## What does the Citizen Disbursement IT System do? 

The CDIT consolidates common microservices needed for most schemes through a common code base and architecture, which is designed to be reusable, scalable and user-configurable with less IT involvement. Imagine the CDIT as a new drink vending machine that can churn out your favourite drink at a push of a button within seconds, as opposed to having to make your way to your chosen stall, queue to order and wait while the vendor prepares the order. 

Tseng Wei Haur, a product owner at CPFB, shared that, as a system built on cloud-based microservices, CDIT can tap on tools such as Amazon Web Services’ Data Migration Service (DMS), which might not be easily available on traditional on-premise systems. This enables close to real-time data replication between microservices which as there is no need to coordinate file transfer scheduling and lower dependency risk compared to API calls. He added: “This provides the project teams with a wider suite of ready options in designing systems, allowing for more suitable methods and greater effectiveness.”

Looking ahead, the CDIT’s user-configurability will be extended to other microservices to provide more seamless end-to-end solutioning. For instance, business users can have the flexibility to configure the sequence of payment services along PayNow-NRIC, GIRO, and GovCash, enabling greater flexibility in scheme implementation.

## What are the main benefits that the public will enjoy?

With the new system, government schemes can be implemented faster, ensuring uniform and consistent service to Singaporeans in a timely fashion. The team estimates that the time taken for scheme deployment will be reduced by almost three months compared to the past. 

One major reason for the accelerated scheme setup is the CDIT’s user-configurable means testing engine, the first of its kind within the Singapore government. This empowers non-IT users to self-configure schemes and their criteria and parameters on an intuitive user interface with minimal effort, as code isn’t involved. 

This is supported by a comprehensive data repository with up-to-date data from Whole-of-Government Single Source of Truth (SSOTs) and Trusted Centres (TC) to facilitate faster turnaround. The CDIT also automates case handling for straightforward appeals and, more importantly, re-runs of scheme means-testing and pre-empting appeals even before they come in.

Additionally, the reusability of the CDIT brings different schemes into a single platform, harmonising scheme implementation. This means that for every appeal that comes in, the system automatically looks across different schemes, reassesses eligibility, computes delta amounts, and pays the eligible citizen in one go. For citizens, this ensures a uniform service experience that is streamlined with minimal gaps. For example, when there is a change in one’s housing type, automatic reassessment will be applied across all applicable schemes via the CDIT once the updated data is captured in the common data repository. 

The team is also working on speeding up the notification infrastructure so that people can receive scheme updates quickly from trusted digital channels, an important consideration with the prevalence of scams and information circulation from dubious sources. 

## Main challenges and key lessons

One of the biggest challenges in developing the CDIT was that it was a new system with no comparables to take cues from. The project team had to be the first movers in many areas and navigate uncharted territories. 

CPFB scrum master Steven Ooi said the initial stages were difficult as it was hard to measure if the project was going well. He shared: “Transformation is not an easy journey. It always starts from within, and results may not be noticeable at the onset. However, when it strikes you one day that things are progressing well and the team is growing stronger, it is indeed validating and rewarding.”

Another big challenge was the periodic need to reprioritise development plans to support citizens through the pandemic and challenging macroeconomic environment. As such, the project members learnt to build usable minimum viable products while keeping the end goal in mind to provide Singaporeans with progressive benefits. “Think big, start small, and act fast,” as the team summarised aptly. The team explored innovative solutions to work around recurrent issues along the development process, such as Python scripts to consolidate daily reports, reconcile records, and generate test accounts automatically.

The ongoing CDIT project requires close and strong collaboration between the two government agencies. GovTech software engineer Chia Wei Kang noted that both agencies collaborated well together to overcome obstacles. “The camaraderie between the colleagues from both CPFB and GovTech made this learning journey fun and memorable. The journey has only just begun, and I look forward to creating and building on new digital projects,” he said.

## A system that stands the test of time

The demand for government social transfers will continue to evolve with changing circumstances. With the CDIT in place and more plans to future-proof the system, the unspoken need for the infrastructure to support such schemes will remain robust and handle changes without major overhauls. 

Such work, while little known to the public, ultimately supports outcomes that are very visible and impactful to most Singaporeans. 

GovTech UX designer Wu Ting Ting shared that her most memorable moment from working on this project was the successful payment of the GST Voucher in August 2022. 

“When my family and friends happily informed me that they received the grant in their bank account, it reassured me that the work done with my scrum team is meaningful and impactful. This also helps to motivate me to continue improving the user experience for our business users so that our platform can benefit more fellow Singaporeans.”

