---
layout: post
title: "SG got talent – GovTech’s cybersecurity specialist is 6th in global Facebook challenge"
permalink: "/media/technews/sg-got-talent-govtech-cybersecurity-specialist-sixth-in-global-facebook-challenge"
category: technews
image: "/images/technews/Eugenelim.jpg"
---

Now, say what you will about TikTok gaining popularity amongst teenagers but the fact remains: a large portion of Singaporean youth are still using Facebook. Notice I used the word ‘youth’, which according to the National Youth Council, are people aged 15–35. 

Yes, 35; you did not read it wrongly.

With such a large portion of society still on Facebook, it is really important for the platform to remain secure and proactively search for any hidden vulnerabilities.

---

![Eugene Lim, Cybersecurity Specialist](/images/technews/Eugenelim.jpg)
*Eugene took 6th place during a live hacking segment held at BountyCon. PHOTO: GOVTECH*

That’s exactly what GovTech cybersecurity specialist Eugene Lim did! Not only did he try his hands at it last year, he flew the Singapore flag high by coming in sixth at a global cybersecurity hacking challenge. 

Bountycon – the invitation-only security conference – was organised by Facebook and featured a live hacking segment where participants were tasked to find cybersecurity vulnerabilities in any of Facebook’s assets – including beta and internal features not yet released to the public. Facebook encouraged the participants to focus more in particular on “Facebook Gaming”.

Yup, this is not a drill, fellas. 

### **Zooming in on Facebook Gameroom**

Eugene – whose duties at GovTech include simulating attacks on government cyber infrastructure to discover potential routes of attacks – started the competition on the backfoot due to administrative issues that delayed his entry. To maximise the opportunity, he strategically chose to focus on Facebook Gameroom, a desktop gaming platform that was launched in November 2016 to compete with the likes of the popular gaming platform Steam. 

He began by systematically probing for weaknesses that could be exploited through offensive reverse engineering. This involved examining a software system to trace its original design and implementation,

This approach yielded an early moment of promise when Eugene managed to modify a file used by Facebook Gameroom that could be parsed in an unsafe manner. In theory, this meant he could “hack” Gameroom into running a malicious program from the file instead of its usual functions. 

However, this proved to be a false dawn. The Facebook team clarified that this did not qualify for points in the hacking segment as he had not found a way to pull off the same thing remotely on another person’s machine. In cybersecurity parlance, there was no viable remote attack vector.

“I learnt an important lesson about the different threat landscape posed by native applications – search for a viable remote attack vector first before diving into the code-level vulnerabilities,” he said. 


### **Redirecting users to danger**

Eugene eventually found success by targeting custom URIs – a type of link that launches a program when it is clicked. One common example is a Zoom meeting invitation link; when you click on the invitation link, the Zoom program will be launched which will take you straight to the meeting room. 

Similarly, when you click on a custom Facebook Gameroom URI on the web browser, Gameroom will automatically open. This was the key vulnerability Eugene had been seeking for. He also noticed that Gameroom relied on an outdated version of the Chromium (which Chrome is based on) web browser to display web content. After experimenting with various workarounds, Eugene managed to create a URI that opened Gameroom and directed users to web content controlled by him, instead of launching the intended web content that the users wanted to access. 



In other words, a hacker could exploit this to display authentic-looking requests for users to perform cyber-attacks such as phishing. A hacker could also run JavaScript code that would exploit the outdated Chromium browser to execute malicious programs.

For a technical walkthrough, check out [Eugene’s blog](https://spaceraccoon.dev/applying-offensive-reverse-engineering-to-facebook-gameroom) for his experience during the challenge.


### **Showcasing SG expertise**

Eugene’s discovery propelled him into the top ten leaderboard for Bountycon and eventually he secured the sixth position. 

His achievement endorses Singapore’s position on the tech  world map, sending a clear message that the country is a prime choice for tech companies to sink roots not only because of its outstanding infrastructure and business environment, but it  also has a  strong pool of tech talent to offer. It also reaffirms Singapore’s efforts to nurture homegrown tech talent – from newbies joining the workforce to mid-career professionals. Eugene had previously been awarded the Most Valuable Hacker at a similar live hacking event by co-organised by Verizon Media (Yahoo), the US Air Force, and the UK Ministry of Defense, as well as won the Best Team award at a PayPal live hacking event.

Although Facebook Gameroom is a relatively unknown product and is scheduled to be decommissioned in June 2021, Eugene – who has been with GovTech for just over a year – said it was still satisfying to see that Facebook patched the vulnerability, cutting off this potential route of attack for bad actors. 

He added: “Although Gameroom will be shut down soon, this episode definitely left me with some fond memories of the practice in applying basic offensive reverse engineering to discover system vulnerabilities.”
