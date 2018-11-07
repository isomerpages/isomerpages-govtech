---
layout: post
title:  "Meet the man who is working on improving the accuracy of your GPS system"
permalink: "/media/technews/meet-the-man-who-is-working-on-improving-the-accuracy-of-your-gps-system"
category: technews
image: 
---
![paul](/images/technews/meet-the-man-who-is-working-on-improving-the-accuracy-of-your-gps-system-part-1.jpg)

TL:DR: GPS technology has revolutionised navigation, making it easier than ever to find directions. However, the accuracy of GPS can be improved by having base stations broadcast error correction values via a dedicated short-range communications system. Mr Paul Piong, Smart Nation fellow at the Sensors and Internet of Things division at GovTech, has developed a proof-of-concept for this technology.

---

It’s becoming more and more difficult to get lost these days. With global positioning system (GPS) now on mobile devices, all you need to do is whip out your phone to know where you are, then map a direct path to where you want to be. Whereas in the past, explorers confirmed their earthly positions by looking at the stars at night, modern travellers now have a constellation of artificial stars—satellites in space—to guide their paths.

The position of the satellites is known because a ground station keeps track of them throughout the day. Each time you use GPS to navigate, your device is measuring its distance from four or more satellites. With some calculations, the position of your device can be obtained. 

GPS has become so pervasive that most people don’t even think about the technology as they explore foreign places on foot or on board a vehicle. But Mr Paul Piong, Smart Nation fellow at the Sensors and Internet of Things (IoT) division of the Government Technology Agency of Singapore (GovTech), thinks that the accuracy of GPS can be improved further.


**Room for improvement**

Mr Piong is no stranger to refining GPS technology. His first job after graduating from the University of Michigan was at Garmin, a global leader in GPS innovation. For five years, from 2008 to 2012, he worked on Garmin’s GPS watches and cycling computers. 
Then, restless and eager to learn something new, he left Garmin and joined electric carmaker Tesla, where he worked on Tesla’s version control system—a code repository containing all the code required to update Tesla vehicles. More recently, he worked on the battery management system for Tesla’s Model 3.
![paul](/images/technews/meet-the-man-who-is-working-on-improving-the-accuracy-of-your-gps-system-part-2.PNG)
<sub>Mr Piong worked on Tesla’s version control system and the battery management system for the Model 3.</sub>

It was in October 2017 that Mr Piong met Mr Quek Yang Boon, director of the Sensors and IoT division at GovTech, who invited Mr Piong to return to Singapore for a short stint. Arriving in Singapore as a Smart Nation fellow in May 2018, Mr Piong has spent the past three months researching differential GPS, a method to enhance location accuracy for pedestrians and vehicles. 

“Typically, a base station has a fixed location—this is the ground truth programmed into it—but it also figures out its own location based on the constellation of satellites that it ‘sees’. Sometimes, its ‘view’ is blocked by weather conditions, like clouds, and this could affect positioning accuracy,” Mr. Piong explained. A discrepancy thus arises between the base station’s actual and satellite-derived locations.
![paul](/images/technews/meet-the-man-who-is-working-on-improving-the-accuracy-of-your-gps-system-part-3.PNG)
<sub>One of base station prototype Mr Piong created for the dedicated short-range communications system.</sub>


**Positioning with precision**

To improve the accuracy of GPS, Mr Piong has programmed his base station to measure the difference between the actual and satellite-derived locations to calculate an offset value.

“This offset value can then be transmitted to other devices in the area as a correction stream, thereby allowing them to compensate for any discrepancies caused by atmospheric effects or urban interference [from nearby buildings and overhead structures],” he said.

But a data connection is required to broadcast and receive this correction stream, and this is where Mr Piong has suggested using dedicated short-range communications (DSRC) as an anchoring technology. DSRC works like a walkie-talkie—messages can be wirelessly sent and received between pairs of devices equipped with the technology. 

What Mr Piong envisions is a base station equipped with a DSRC unit, which broadcasts the correction stream to a vehicle that has an onboard DSRC unit and a GPS. This way, the vehicle’s GPS can constantly be corrected, allowing it to pinpoint its location down to the centimetre.

“Maybe the government can take this technology and be a provider of accurate positioning to the private sector. Or perhaps we can do it for the public sector first, for example, with emergency response vehicles, where every second counts and it’s important to have very precise location tracking,” he said.


**Keeping the roads safe**

In addition to enhancing the accuracy of GPS, Mr Piong also proposes that DSRC technology be used to improve road safety. For instance, traffic lights could be equipped with DSRC units that send messages to vehicular DSRC units, informing drivers to slow down lest they run a red light. Because the link between DSRC units is reliable and has very low latency, the speed of sending these messages between traffic infrastructure and vehicles is “probably on the order of milliseconds,” Mr Piong said.  

Looking towards the future, DSRCs can also function as a framework to guide autonomous vehicles, adding another layer of sensing and navigation while sending warning messages to help them avoid pedestrians as they ply the roads. Moreover, when merged with the Smart Nation Sensor Platform, the DSRC could become another source of data, as well as a real-time feedback channel to citizens. 

“But for the technology to be implemented, you need the infrastructure to be in place, and some form of regulation requiring all vehicles to install the DSRC unit. From a regulatory standpoint, there’s already a precedent for that in Singapore—the in-vehicle unit for electronic road pricing,” he said. “This is why I think Singapore is in a unique position to do research on DSRC technology.”
