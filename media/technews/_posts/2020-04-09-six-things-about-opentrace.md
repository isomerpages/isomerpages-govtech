---
layout: post
title: "6 things about OpenTrace, the open-source code published by the TraceTogether team"
permalink: "/media/technews/six-things-about-opentrace"
category: technews
image: "/images/technews/OpenTrace-Infographic-Final.png"
---
![TraceTogether GovTech reaches one million](/images/technews/TraceTogether-1m-banner.png)

By open sourcing TraceTogether’s source code, the team hopes other organisations and countries can build similar Bluetooth-based contact tracing solution suited to their local context, while enabling interoperability across jurisdictions so we can collectively combat COVID-19 globally.
---

Developed in an eight-week sprint, TraceTogether has since been downloaded by over a million users or about 1 in 5 residents in Singapore to support Singapore’s contact tracing operations. Since launch, the team has received many requests to replicate TraceTogether internationally. While the team does not know how useful an app like TraceTogether will be in other countries due to the different operating context, GovTech has decided to make the source code for Singapore’s Bluetooth contact tracing app [TraceTogether](https://www.tech.gov.sg/media/technews/geeky-myth-busting-facts-you-need-to-know-about-tracetogether) freely available online so that others can improve and adapt for deployment elsewhere.

This generic codebase is called OpenTrace and comprises the reference implementation source code for an iOS app, an Android app, as well as a central server that is built around Google Firebase (although implementations built on other cloud service providers are also possible). It also includes basic calibration data for a range of popular mobile phones. 

At the same time, GovTech has also published the [BlueTrace](https://bluetrace.io) protocol, which both OpenTrace and TraceTogether are built on. Apps that implement the BlueTrace protocol are assured of interoperability across jurisdictions. The team hopes to work with other countries and national public health organisations to enhance the codebase and protocol. But before that, here are six things you need to know about OpenTrace.

![OpenTrace explained](/images/technews/OpenTrace-Infographic-Final.png)

### **1. OpenTrace will be managed by a group of open-source advocates**

The OpenTrace codebase will be maintained by a group of open-source advocates. As a government body, GovTech has decided to put the code into open-source, so that any improvements to OpenTrace will always be freely available for others to deploy. It also allows users to evolve the codebase to suit their local context. 

“OpenTrace meets an urgent need during the COVID-19 pandemic. The codebase will be a work-in-progress with many opportunities for improvement. I hope the global open source developer communities can come together and make the published codebase as robust as possible. This codebase will be upstream of the TraceTogether code that GovTech initially created.” said Harish Pillay, a coordinator for OpenTrace and global head of Community Architecture and Leadership at Red Hat in APAC. 

### **2. Other communities can adapt OpenTrace to suit their own needs**

TraceTogether was developed for Singapore’s unique circumstances and contact tracing capability. It has been established out of the experiences from previous outbreaks, like SARS, and supports the Singapore Ministry of Health’s contact tracing processes, systems and personnel. 

Instead of having to go through the [painstaking process](https://www.tech.gov.sg/media/technews/tracetogether-behind-the-scenes-look-at-its-development-process) of developing a new Bluetooth-based contact tracing app from scratch, other public health authorities can consider adapting the OpenTrace source code and make modifications to suit their own needs. For example, whereas Singapore has a central public health agency receiving and processing TraceTogether data in parallel with existing contact tracing procedures, this may not be true in different jurisdictions. A decentralised model with human-out-of-the-loop recommendations could be developed.

### **3. BlueTrace protocol can be the basis for privacy-preserving contact tracing standards globally**

“The BlueTrace protocol, which OpenTrace is built around, envisages a federated means of tracing contacts within countries, and across jurisdictions,” explained TraceTogether product lead Mr Jason Bay. “Each participating country or national public health organisation is able to exchange information with counterparties to allow the receiving authority to understand the nature of the exposure and to identify the individual to be contact traced.”

This means that apps based on OpenTrace or adopt the BlueTrace protocol can inter-operate, and be used to share information across national borders, giving health authorities a more comprehensive picture of imported transmissions as well.

Several international contact tracing application developments are underway, including a European group that is, in Bay’s words, “virtually identical” to TraceTogether. This suggests that the two independent projects have found similar solutions to shared challenges. For example, both TraceTogether and this group use encrypted temporary identifiers to protect the identity of individuals, envisage federated sharing of anonymised information between national public health authorities, and provide estimates of proximity using calibrated signal strength data from devices for more accurate contact tracing.

“Collaboration and interoperability are important for such Bluetooth-based contact tracing applications. I hope that our codebase contributes to others’ efforts, and that -- with minor differences to account for integration into domestic public health systems -- most Bluetooth contact tracing solutions will converge around shared standards for data exchange between devices, and between public health authorities,” Bay added.

### **4. Contact logging is decentralised…**

One of the key ways that OpenTrace preserves the privacy of users is by keeping all records stored locally on their phones, as opposed to uploading the information to a database. 

While Google Firebase, which is used by TraceTogether, also collects anonymised information such as brand and model of the mobile phone, that information does not have physical location data (i.e. GPS, cell ID) of users. The anonymised information is only used to improve the user experience across different phone models. This is particularly important given the diversity of features and settings available across phones in the market today.

Keeping logs decentralised on user’s phones rather than on a centralised internet-accessible database means that the information will not be compromised even if the server is breached. 

### **5. …but contact tracing is centralised**

While contact logging is decentralised, the TraceTogether team made a fundamental design choice to develop a hybrid rather than a fully decentralised system. “While it is possible to have a completely decentralised system, positive COVID-19 diagnoses still have to be authenticated to prevent abuse and fraudulent reports leading to unnecessary panic. Capacity permitting, having a human-in-the-loop system is prudent and reliable,” Bay explained.

Centralised contact tracing—which occurs once users provide consent and upload their data to MOH—gives the contact tracing experts room to make their professional judgement in classifying contacts as either transient, casual or close contacts, he continued. The thresholds for classifying contact between individuals can be adjusted for individual circumstances and tuned as necessary to fill gaps in a patient’s memory. For example, short-duration encounters in enclosed spaces can lead to a higher risk of exposure to the COVID-19 virus than longer-duration encounters in well-ventilated open spaces. A fully automated system is unlikely to take these factors into account and will not be able to provide useful information to the national public health authorities.

It is important to note that the TraceTogether solution does not replace the contact tracing process. “Instead, it is an important tool in the toolbox of contact tracers. It is not sufficient to rely on technology alone, as we need the expertise in public health and communicable diseases to make sense of the data collected using this technology,” added Mr Sutowo, MOH’s Director of Analytics and Information Management. 

### **6. Last but not least, an extra step for iOS users**

One common challenge that Bluetooth contact tracing solutions currently face, is ensuring that the apps continue to scan and perform handshakes with other contact tracing app users, especially on iOS devices. iPhone users need to make sure that the TraceTogether app is in the foreground for it to work best. If it is in the background, even if Bluetooth is on, TraceTogether is unable to scan for other TraceTogether phones. This is a design characteristic of iOS devices to improve battery life. 

To help users keep the app running in the foreground while minimising battery usage, the TraceTogether team included a power saver mode setting in the codebase. If you are an iPhone user, all you have to do is keep TraceTogether open but place the phone upside down in your pocket or face down on the table. That will trigger the power saver mode, allowing the app to regularly scan the environment for other TraceTogether users. 


*Download the app from [Google Play](https://play.google.com/store/apps/details?id=sg.gov.tech.bluetrace&hl=en) or the [App Store](https://apps.apple.com/us/app/tracetogether/id1498276074) and help everyone at home to download too.*
