---
layout: post
title:  "Building an operating system for Punggol Digital District"
permalink: "/media/technews/building-an-operating-system-for-punggol-digital-district"
category: technews
image: "images/technews/pdd-part4.PNG"
---

![PDD interface](/images/technews/pdd-part4.PNG)

GovTech is developing ‘plug and play’ digital architecture—the Open Digital Platform—for Punggol Digital District.
---
Opportunities to build an entire digital district from scratch don’t come by every day. Most smart city developments tend to be ‘brownfield’ in nature, where legacy systems are already in place to govern things like the power grid, water supply network, waste removal and other municipal services. Changes to how the city runs are often incremental, rarely revolutionary.

So when Mr James Tan, Deputy Director of the Smart Nation Platform Solutions Group at the Government Technology Agency of Singapore (GovTech), became involved with the development of Punggol Digital District (PDD)—a brand new 50-hectare development in the north-east region of Singapore, he was eager to explore the seemingly endless possibilities of what could be implemented for a smart town. 

“As a ‘greenfield’ development, PDD offers us a chance to shift the paradigm on the way technology is used to manage buildings, citizens and businesses in an area,” Mr Tan said. In particular, his team at GovTech is responsible for developing an Open Digital Platform that allows multiple systems and service providers to interface with one another and integrate their datasets and operations. Think of this as a unified operating system for PDD.

“When you talk about systems that control the carpark gantries, traffic lights, water supply, electricity and so on, each system works in isolation. On their own they are smart, but they are not integrated—and they cannot be smarter because they’re not integrated,” he explained.

![James Tan from GovTech](/images/technews/pdd-part1.JPG)

### **No more silos**

Before integration can occur, all the different systems must be able to “speak the same language”. The Open Digital Platform achieves this by having a well-defined data bus—a software framework for distributing and managing real-time data, wherein the integration specifications are clearly stated upfront for vendors and developers to follow. This promotes interoperability and prevents proprietary system lock-in—new applications following the specifications can simply ‘plug and play’ with other existing applications on the platform. 

More importantly, the Open Digital Platform is designed to handle real-time data streamed to an integrated operations centre from sensors deployed throughout PDD. “Initially, when PDD was conceived, application programming interfaces (APIs) were going to be the default means for data exchange,” Mr Tan said. “But we advised that APIs are not the most efficient in terms of timely communication—when it comes to applications like autonomous vehicles and the power grid, should things change, you need to be able to detect the change and respond in milliseconds.”

If the API-based protocol were a system where caller and recipient must pick up the phone to converse, then the data exchange protocol employed by the Open Digital Platform is like a radio broadcast. The recipient—the integrated ops centre—may not be listening in all the time, but the sensors are constantly streaming data to it, and any deviations from expected values can be automatically flagged. 

### **A new dimension to area management**

The architecture of PDD’s Open Digital Platform is also modular in nature—each system can be inserted, removed, or swapped out easily. “If one system becomes obsolete, it doesn't affect the other systems that may have been interfacing with it,” said Mr Tan. He added that the platform relies on the Singapore Government Tech Stack developed by GovTech, reusing and adapting a suite of tools and services already available.

During the development of the Open Digital Platform, GovTech also mapped out the relationships between system components. For example, within an air conditioning and mechanical ventilation unit, there is a fan coil unit and a compressor, with interrelated functions. “Because all the relationships are mapped in our system, we will be able to predict the downstream consequence of component failure and perform predictive maintenance on the related parts of the system,” said Mr Tan.

In terms of deployment and form factor, the Open Digital Platform is embedded in an integrated operations centre that consists of a seat and screens displaying every system registered on the platform. Instead of 2D maps and blueprints, facility or area managers will be able to navigate the entire landscape of PDD in 3D. They can click on a system to observe, say, the power consumption of an air conditioning unit in a building, or view the video feed at the carpark gantries.

“We’re not doing away with the 2D dashboards and graphs and charts, but we believe that the 3D user interface will be helpful for users to monitor the situation on the ground,” Mr Tan noted. 

![Open Digital Platform](/images/technews/pdd-part2.PNG)

### **Simulation station**

Since the 3D representation of PDD is true-to-life, it can also be used as a ‘Digital Twin’ to run simulations for a variety of scenarios. For instance, the Digital Twin can be used to explore contingencies for flooding, said Mr Tan. A facility manager could simulate how traffic flow is affected by cordoning off the flooded area, then decide on the best course of action—redirect traffic, or quickly drain out the rainwater.

In addition, the realism of the simulation makes it possible to create a visual dataset of scenarios to train autonomous vehicles on. “You can train your driverless car without having to send the real car out onto the street,” Mr Tan quipped.

Nonetheless, getting to this stage of development in a year (initial meetings to conceive the Open Digital Platform took place in January 2019) was not without its difficulties. Primarily, Mr Tan explained that there was a need to translate agile methodologies into a systems engineering framework—a somewhat paradoxical notion.

“We call it agile system engineering—before the software gets committed to development, we will conduct sprints to do things like virtual testing. Within that stage of development, we practice agile. But when it comes to integration, the milestones are still controlled by the system engineering approach,” he said.

Going forward, his team is looking forward to connecting live systems to the Open Digital Platform. PDD will only be ready by 2023, but in the meantime, the Open Digital Platform will be trialled with live systems at the JTC Summit building.

“We’re very excited about the potential of the Open Digital Platform and what it will do for PDD,” Mr Tan concluded. 

![Open Digital Platform](/images/technews/pdd-part3.PNG)
