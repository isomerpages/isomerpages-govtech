---
layout: post
title: "TraceTogether - behind the scenes look at its development process"
permalink: "/media/technews/tracetogether-behind-the-scenes-look-at-its-development-process"
category: technews
image: "/images/technews/tt-part1.JPG"
---
<div class="bp-youtube">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/buj8ZTRtJes" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

Contact tracing is essential for containing COVID-19, but not everyone can remember who they have been in contact with. TraceTogether uses Bluetooth to identify who you have been with rather than where you have been. To develop this app, GovTech had to test dozens of different phones, calibrating wildly differing Bluetooth signal strengths. 
---

Singapore has been battling COVID-19 since its first case of infection was confirmed on 23 January 2020. As of 23 March, 12pm, there are a total of 509 confirmed cases in Singapore. Much of the credit for the country’s response goes to our contact tracing efforts. Working in collaboration with healthcare colleagues at the hospitals, as well as the Singapore Police Force, the contact tracers at the Ministry of Health (MOH) have to date identified over 8,000 close contacts who have been quarantined.   

While contact tracing has helped Singapore contain the spread of the virus, the process is painstaking and labour-intensive. Furthermore, even the most strenuous efforts of contact tracers can be thwarted by lapses in memory and the fact that there is simply no way for people to retroactively identify strangers they might have come into contact with.

But most people already carry a pocket contact tracer with them at all times: their mobile phones. Taking advantage of Singapore’s high mobile penetration rates, GovTech has built TraceTogether, an app that uses Bluetooth to do contact tracing with a difference.

![tt Bebind the scenes](/images/technews/tt-part1.JPG)

### **Who, not where**

Given the ubiquity of mobile phones and their range of communication capabilities, they were a natural starting point when thinking about technological solutions to the problem of contact tracing. However, many of the existing apps focus on location-based services, using global positioning service (GPS) to identify people who have been in close proximity to an infected person.

While GPS works well in wide, open spaces, it fares poorly when it comes to indoor and highly urbanised settings, said Mr Jason Bay, Senior Director of Government Digital Services at GovTech. “If you are one floor down in a building, your GPS location could look the same as someone in the floor above you because of signal reflections and multipath propagation effects,” he explained.

Aside from the technical challenge, using location data for contact tracing also raises serious privacy and data security concerns. If users are hesitant to download the app for fear of inadvertently revealing their movements, its ability to link the dots would be greatly diminished.

“So instead of attempting to tackle the issue of contact tracing by answering the question of ‘where,’ we address contact tracing by answering the question of ‘who’,” explained Mr Bay, who led the team behind TraceTogether. “After all, you could argue that the virus doesn’t care where transmission happens; it’s only interested in whether there is a hospitable host in close contact.” 

He added that TraceTogether only needs Location Permissions to know the relative distance of between users and the app does not collect or use any real-world geographic location.

![tt Bebind the scenes](/images/technews/tt-part2.JPG)

### **Much more than memes**

Used by teens to AirDrop random pictures of memes to strangers, Bluetooth can also be put to use in the service of contact tracing. Instead of a meme, phones with the TraceTogether app installed will send each other a message that contains four pieces of information: a timestamp, Bluetooth signal strength, the phone’s model, and a temporary identifier or device nickname. 

If someone with TraceTogether is diagnosed with COVID-19, he or she can simply upload their data to MOH, which will then be able to decrypt the information and begin contacting other TraceTogether users who have been in close contact of the confirmed COVID-19 case. 

“Bluetooth has a maximum range on the order of about ten meters,” Mr Bay said. “And because it is a low power signal that degrades very quickly over distance, we can use signal strength to figure out the distance between two phones within a reasonable margin of error.”

### **And now for something completely different**

This ‘figuring out’ turned out to be much more complicated than anticipated, however. “In the course of developing this app, we found out that the Bluetooth signal strength difference between two phones can be 1,000 percent or even more—up to 10,000 percent even,” Mr Bay said. 

“To use a metaphor, some people speak with booming voices and others have very soft voices. If you are trying to estimate the distance based on volume, you will have to calibrate the microphone you use for each speaker -- loud or soft. One of the hardest parts of this project was characterising and calibrating across different models of phones,” he said. 

The team ended up testing dozens of different models, enlisting the help of partners at Nanyang Polytechnic and the Institute for Infocomm Research who had anechoic chambers that blocked out all other signals so that they could measure base-level signal strength. All this was new territory for the GovTech engineers, who are primarily software rather than hardware engineers.

“Compared to the other apps and websites we have done, TraceTogether is qualitatively and categorically different because we had to drill deep into the Bluetooth hardware stack and access low-level functionality that was sometimes implemented differently across different Bluetooth chipsets,” Mr Bay said. “Many teammates shared that this was one of the most fulfilling projects for them because of the amount of learning needed.”

The end result is an app that will hopefully be able to help contact tracers uncover previously unknown close contact with COVID-19 cases and speed up the contact tracing process, he concluded. 

“TraceTogether does not replace the contact tracing process. Instead, we see it as an important tool in the toolbox of contact tracers. It is not sufficient to rely on technology alone, as we need the expertise in public health and communicable diseases to make sense of the data collected using this technology,” added Mr Sutowo, MOH’s Director of Analytics and Information Management. “TraceTogether only works between phones that have the app downloaded and running. The more people download and use TraceTogether, the more effective it will be. We hope more people will use it.” he added.  

