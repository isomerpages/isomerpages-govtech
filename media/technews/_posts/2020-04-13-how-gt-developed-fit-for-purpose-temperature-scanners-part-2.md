---
layout: post
title: "How GovTech developed fit for purpose temperature scanners – Part 2"
permalink: "/media/technews/how-gt-developed-fit-for-purpose-temperature-scanners-part-2"
category: technews
image: "/images/technews/thermo-part3.JPG"
---

The VigilantGantry contactless system can effectively reduce the manpower needed at temperature screening stations.
---

<div class="bp-youtube">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/4quAADmKs40" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

As the COVID-19 pandemic worsens around the world, Singapore is shoring up its efforts to combat the spread of the novel coronavirus. Businesses, for example, are advised to adopt precautionary measures like temperature screening to help detect the disease and to facilitate contact tracing efforts.

Besides setting up stations for temperature screenings, businesses also require staff members to operate the equipment. While areas with lower footfall can tap on solutions like GovTech’s [self-service temperature scanner](/media/technews/how-gt-developed-fit-for-purpose-temperature-scanners-part-1), areas with high human traffic need a different approach to cope with the high volume.

To speed up temperature screening in crowded areas and reduce the number of human operators required, a team from GovTech’s Data Science and Artificial Intelligence Division (DSAID) has developed VigilantGantry, a fully automated, contactless gantry system for temperature screening. 

In this second instalment of a three-part series  that follows GovTech’s in-house projects to improve temperature screening processes, TechNews spoke with the DSAID team to find out why VigilantGantry is vital in this time of crisis.

![VG thermo scanner](/images/technews/thermo-part4.JPG)

### **Safe, speedy screening**

“The main goal of VigilantGantry is to help automate temperature screening and manage the flow of movement into buildings in a contactless manner,” said Ms Rachel Shong, a video analytics manager from DSAID.

To ensure minimal physical contact, VigilantGantry works like the gates to an MRT station. Instead of swiping your card to enter, a machine screens your temperature and takes your picture before letting you through. GovTech has developed VigilantGantry, a video analytics model to identify cases missed out by current thermal systems (such as fringe, cap, head-gear, and occlusion)  using face and neck segmentation and colour segmentation algorithms. An alert will sound once the system detects an abnormal temperature, and entry will be denied, allowing for further checks on the visitor.

Compare this to the existing thermal systems that deploy at least two or three people per station and it's evident why VigilantGantry can create a significant reduction in the human resources deployed at public spaces, especially during a pandemic.

“VigilantGantry was designed for sites experiencing a medium to high volume of human traffic,” said Mr Corey Chong, a manager at GovTech who is also part of the DSAID team. While solutions like the self-service temperature scanner which uses a regular infrared thermometer might work in non-crowded areas, Mr Chong observed that they are not feasible in places that see large crowds. 

### **Taking people out of the picture**

When development for VigilantGantry first began, the team visited several sites where temperature screening was deployed to understand the users’ needs. Most premises, they realised, were already equipped with thermal sensors. “The goal was to find a way to improve the existing situation with minimal disruption and make it more efficient,” said Mr Bill Cai, an associate computational scientist at GovTech.

Currently, most places that use thermal sensors still require personnel to be present in case a problem arises. For instance, visitors with headgear may need to be directed to take it off since it could potentially hinder accurate temperature screening. 

A truly contactless system that eliminates the need for human supervision must, therefore, have the ability to perform checks and intervene in case of a red flag. “Our key feature—the gantry—controls access using contactless checks that we’ve designed to complement temperature screening,” explained Ms Jean Ho, another video analytics manager on the team.

### **Flexing VigilantGantry’s capabilities**

Along the way, the team faced many site-specific challenges, like making sure that the software could integrate with different thermal sensor models, space constraints and site regulations. “The challenge was making our solution flexible, which meant doing a lot of iterative changes so that we meet the stakeholders’ needs,” said Mr Delon Leonard, an AI engineer at GovTech.

To achieve flexibility, the DSAID team aimed to make every component in VigilantGantry modular so it could be programmed with additional functionality. For example, other than measuring body temperature and performing facial indexing, the system can also capture the location, date and time to support contact tracing purposes. It is also possible to store health and travel declaration data obtained via questionnaires.

VigilantGantry’s flexibility means that it can be scaled up easily, Mr Leonard added. For example, it can be integrated into existing thermal systems without the need to purchase new equipment, a bonus in these uncertain times when demands for thermal sensors are on the rise. 

Currently, there are plans for VigilantGantry to be deployed at hospitals and schools to facilitate higher human traffic at temperature  screening stations. But even as the team concludes their trials to commence first deployments, they are continuing to improve the system. 

At the moment, the team is looking to increase the speed of temperature measurement using thermal imagery. They also intend to build a feedback system to help instruct visitors, for example, to remove headgear, so that manpower needs can be further reduced. The team said that the design thinking behind VigilantGantry was to leave no stone unturned. “Hence, the name Vigilant,” concluded Mr Leonard.

![VG thermo scanner](/images/technews/thermo-part5.JPG)
