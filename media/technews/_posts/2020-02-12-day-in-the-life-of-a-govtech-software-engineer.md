---
layout: post
title:  "A day in the life of a GovTech Software Engineer"
permalink: "/media/technews/day-in-the-life-of-a-govtech-software-engineer"
category: technews
image: "images/technews/michael-part1.jpg"
---

![GovTech software engineer](/images/technews/michael-part1.jpg)

Michael Cheng, lead software engineer at GovTech, shares how his team helps keep the Ministry of Manpower’s work pass system for Foreign Domestic Workers running smoothly. 
---
 
Ever wondered what it’s like to manage a team of software engineers tasked with keeping a government digital service running seamlessly? Follow Michael Cheng, a lead software engineer at the Government Technology Agency of Singapore (GovTech), as he goes about his day. 

![GovTech software engineer](/images/technews/michael-part5.jpg)


**7:30 a.m**
I’m up and about getting ready for the day! On my way to the office, I make it a point to check in on the Telegram chat group that I have with my colleagues. We are responsible for the smooth running of the Ministry of Manpower’s (MOM) work pass system for Foreign Domestic Workers (FDW), so if any problems with the system surfaced during the night, I’ll be notified about it via the chatgroup. As they say, “no news is good news!” 

**8:45 a.m**
I grab breakfast at the food court nearby my office—usually, it’s a bao (bun) and a cup of coffee—before heading up to my workstation. I greet my colleagues, sit down at my desk, and call up a dashboard on my computer which displays the status of the work pass system and how it’s running. Everything shows up green, so that’s good! The bao tastes great too.

**9:30 a.m**
Time for our morning stand-up meeting (nothing to do with stand-up comedy)! For the uninitiated, this is where everyone in the team gathers and shares three things: what we worked on the day before, what we plan to work on today, and what issues, if any, are impeding our progress. It’s a short and to-the-point session just to touch base with everyone early in the day.

**9:45 a.m**
An error crops up on the dashboard! This is when we, as a team, will huddle together and figure out what’s going on. I have production support members, DevOps people, quality engineers and business analysts on my team, so depending on the severity of the problem, different people will get involved. This time, it looks like an issue with payments. Because transactions on the system typically require information to be exchanged among agencies, sometimes there may be a timeout in the exchange process, and the transaction fails. Let’s try to fix that.

**9:55 a.m**
We’ve diagnosed the error as a minor issue. Some maintenance works were carried out the night before, and we just needed to tweak a few settings to get things working again. Only the production support team members were needed. Phew!

![GovTech software engineer](/images/technews/michael-part4.jpg)

**10:30 a.m**
Something on the dashboard flickers from green to red, and I spot it from the corner of my eye. What now? This one looks like a real bug in the system, and we might take a few hours to get to the root of the problem. But we can’t afford hours of downtime, so we come up with what we call a ‘hotfix’ to buy us some time.

**10:45 a.m**
The quality engineers have managed to duplicate the bug locally so we can start analysing the bug and testing various solutions against it. Here’s where the developers come in to build a code snippet and help us to ‘put a band-aid’ on the problem. We practice pair programming in our team, which, as the name implies, means that two developers team up to code and work on the problem.

**11:30 a.m**
We’ve managed to get a hotfix done, and our quality engineers have verified that things are running smoothly again. Kudos to the team! At the back of my mind, I know we’ve only triaged the symptoms; we’ll still need to dig deeper to solve the fundamental cause of the symptoms so that the error doesn’t resurface in the future. But first, lunch!

**11:45 a.m**
We walk over to the nearby hawker centre and it’s already super crowded! There’s 15 people on our team, so getting enough seats for all of us looks extremely unlikely. We decide to pack our lunch back to the office. 

**12:00 p.m**
Since we’re all seated in the pantry having lunch together, I usually take the opportunity to ask my team members about their lives outside the office. My favourite question to them is: what did you do this past weekend? I think it’s important to engage with my team on a more personal basis so that they feel comfortable enough to share their aspirations and challenges with me. Sometimes, we even play a quick game of Avalon (a card game) to de-stress!

**1:00 p.m. – 4:00 p.m**
This part of the day is usually spent diving deep into the more complex issues that we identified earlier. During this time, we also receive emails from our business users, the MOM officers, about other issues they may encounter while using our system. Sometimes, it’s just a matter of guiding them through certain processes, but at other times, they may identify a quirk in the system that’s worth looking into to improve operations.

**4:30 p.m. – 5:30 p.m**
I check in with my team on how they are doing and whether there are any problems that I can help them with. In some instances, they may need me to obtain permission from the database administrators in our DevOps team so that we can make a modification to the system. Or perhaps an issue has its roots in policy, which is when I will need to consult our business analysts to move things forward.

**6:00 p.m**
We’re almost done for the day! Before leaving the office, I make it a point to check the dashboard and the system logs just in case something mission-critical crops up. If everything is in the clear, then I can be off to my JuniorDev.SG meetup. JuniorDev.SG is my latest passion project where, together with a small team, I organise meetings and workshops for junior developers, fresh graduates or other IT professionals to improve their coding skills, discuss industry best practices and network. I see it as a way of nurturing the wider developer community and giving back to society.

And that’s a day in the life of a lead software engineer!
