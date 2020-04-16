---
layout: post
title: "How GovTech developed fit for purpose temperature scanners – Part 1"
permalink: "/media/technews/how-gt-developed-fit-for-purpose-temperature-scanners-part-1"
category: technews
image: "/images/technews/thermo-part1.JPG"
---

Take a behind-the-scenes look at how the Sensors and Internet of Things (SIOT) team at GovTech invented a system that automatically measures a person’s temperature.
---

<div class="bp-youtube">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/GeM9phUWgck" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>


Since COVID-19 touched Singapore’s shores, temperature screening has become a common practice at medical facilities, workplaces and events across the island. A fever is one of the more immediately identifiable symptoms of infection, so thermometers are a key defensive tool in the fight against the highly contagious virus. The Ministry of Health even recommends that all employers should have their staff take their temperature at least twice daily. 

As it turns out, not every organisation, household or individual owns a thermometer, and by the time they sought one out, most retail outlets no longer had stock of the devices. Even in places with existing temperature screening systems in place, the sheer volume of traffic can sometimes be overwhelming. Noticing this shortage—and thinking of ways to make temperature screening less manual—Government Technology Agency of Singapore (GovTech) engineers have come up with three solutions, each catered to addressing the needs of a specific population. 

In this first part of a three-part  series  looking at each solution, we spoke to Mr Quek Yang Boon, director of Sensors and Internet of Things (SIOT) capability centre at GovTech, to find out how his team assembled an automated, self-service temperature scanner that is being deployed in the heartlands.

“We asked ourselves: what if we could have 100 people share just one thermometer? What if we could reduce the exposure of the staff who may have to screen hundreds of people per day?” said Mr Quek. “With these questions in mind, we decided to build a machine that can take your temperature for you.”

![SiOT thermo scanner](/images/technews/thermo-part1.JPG)

### **On the ball and off-the-shelf**

Conceptualisation of the self-service temperature scanner began on Friday, 7 February 2020. Mr Quek gathered his team to brainstorm on the design of the system, including the kind of hardware and software that would be needed to make it work. The ideas flowed fast and free—the team would have to re-engineer a non-contact infrared thermometer so that it would no longer require someone’s finger to trigger the temperature-taking function. Instead, the thermometer would take a temperature reading automatically when a person stands in front of it, at an appropriate distance.

“We decided that our system needed a camera that not only serves to trigger the temperature-taking function automatically, but to also record and display the individual’s temperature readout on an LCD screen,” said Mr Ebi Jose, a systems engineer at GovTech. He added that the device should also produce a long beeping sound if a person’s temperature readout exceeds 37.5oC, indicative of a fever. 

Over the weekend, the team scrambled to acquire all the components required for assembling the self-service temperature scanner. From the camera to the single-board computer and the LCD display, all the parts were readily available off-the-shelf, except for the centrepiece—a clinical grade non-contact infrared thermometer.

“It was out of stock everywhere, so we got an industrial-grade temperature scanner as a workaround so that we could at least prove that our concept would work,” Mr Quek quipped. By 10 February, a functional prototype was ready. 

### **A different kind of valentine**

The next step that the team took was to test their device with users. Between 11 February and 13 February, the prototype was deployed at the Chief Digital Strategy Officer conference at GovTech’s headquarters in Mapletree Business City and at an event at Kreta Ayer People’s theatre. Albeit with an industrial grade thermometer, the team gleaned valuable user insights into how to refine their technology.

For example, they learnt that users needed some guidance to position themselves in front of the thermometer. To this end, Mr Quek’s team programmed the device so that it would instruct users what to do via the LCD screen, and even count down to the time their temperature would be taken. A short ‘ruler’ was also mounted so that users would know how far to position themselves from the thermometer. 

By Valentine’s day, everything was working as it was supposed to, but the team still lacked a clinical grade non-contact infrared thermometer. It was time to call in favours. 

“Deputy Secretary of the Public Service Division Ms Teoh Zsin Woon knew what we were doing and was very excited about our idea of a self-service temperature scanner,” Mr Quek said. “So I told her about our lack of clinical grade thermometers, and she put us in touch with the People’s Association, which had thermometers for use at their events.”

Like a successful match made on dating apps like Tinder, the GovTech team received 30 thermometers to re-engineer on Valentine’s day. Several romantic dates were cancelled that evening, but the team knew that what they were doing was important in the larger scheme of virus containment. 

### **Bringing Agile to hardware development**

“I divided my team into four groups: one to modify the thermometer, another to program the single-board computers, a third group to assemble the different components and ensure the robustness and stability of the system, and the final group to test the system and make sure that everything is working properly,” Mr Quek said.

Asked why GovTech was taking it upon itself to build the self-service temperature scanners, Mr Quek emphasised that timeliness was key. “At a time of urgent need when people were all queuing up to take temperature just to enter their workplaces or buildings, it would have taken too long to put out a tender and invite vendors to manufacture these devices,” he explained, adding that “within GovTech, we have been building up our engineering capabilities for years, and this is the time where we put it to good use. We took a system from idea to design, prototype and production in just a week.”

The first two self-service temperature scanners were deployed at Keat Hong Community Club and Bishan Community Club. . The People’s Association is also providing GovTech with more units of thermometers from its stockpile to be upgraded into self-service scanners. ‘Orders’ for scanner units are already streaming in from other government agencies, so Mr Quek is prioritising delivering the scanners to agencies that carry out more people-facing activities.  

![SiOT thermoo scanner](/images/technews/thermo-part2.JPG)

“This outcome really reflects the Agile methodology applied to hardware development and showcases how the country is coming together to fight this virus situation as a unit,” Mr Quek concluded.

While the self-service approach works fantastically for areas with a low volume of human traffic, what are the options for areas which have to process more people? Read [part 2](/media/technews/how-gt-developed-fit-for-purpose-temperature-scanners-part-2) and [part 3](/media/technews/how-gt-developed-fit-for-purpose-temperature-scanners-part-3) to find out!
