---
layout: post
title: "What you need to know to be a white hat hacker"
permalink: "/media/technews/what-you-need-to-know-to-be-a-white-hacker"
category: technews
image: "/images/technews/whitehacker1.png"
---
     
TL;DR: Singapore has concluded its second Government Bug Bounty Programme (GBBP) and TechNews spoke to the Singaporean champion of the second GBBP, Mr Samuel Eng about common weaknesses and best practices in the white hat hacker space. 
---
 
Mention the word ‘hacker’ and the first image that comes to mind is likely that of a hooded person, perhaps with a Guy Fawkes mask on, hovering over a computer in a dark room. It’s a stereotype perpetrated by the movies and the mainstream media, painting all hackers with the same brush—surreptitious and seemingly up to no good.

Enter Mr Samuel Eng, 29-year-old security consultant at ST Engineering (Info-Security), who is part of a growing community of white hat hackers around the world, helping organisations find loopholes in their cybersecurity landscape before the ‘bad guys’ get to them. Mr Eng uncovered four of 26 bugs in government IT systems during the second Government Bug Bounty Programme launched by the Government Technology Agency of Singapore and the Cybersecurity Agency of Singapore, emerging as the top white hat hacker from Singapore.

![what you need to know to be a white hacker](/images/technews/whitehacker1.png)

“I actually found five bugs, but one of them was a duplicate, which means someone identified the vulnerability before me. Sometimes people beat you to it, so you have to live with that,” he said jokingly.

![mr eng shares about what being a white hacker is like](/images/technews/whitehacker2.jpg)

### **A contest of wits**

The bug bounty format of hunting down digital vulnerabilities can be traced back to 1983, when a Silicon Valley startup called Hunter & Ready offered a Volkswagen Beetle—a ‘bug’—to anyone who could find software ‘bugs’ in their operating system. The crowdsourcing nature of bug bounties made it highly popular, and today, one of the largest platforms for bug bounties is HackerOne, which allows organisations to tap on an international community of white hat hackers and cybersecurity experts.

At the time of writing, Mr Eng is ranked within the top 200 of the HackerOne community. Getting there required a great deal of persistence, he said. Individuals interested in becoming white hat hackers need to get themselves qualified as an Offensive Security Certified Professional, then prove themselves repeatedly in real-world challenges posted on HackerOne.

“Even seasoned professionals could find nothing for weeks or months. Eventually, if you are determined enough, you will find a vulnerability, only to discover that someone else may have already found it,” he said. “But the most important thing is to take it as a learning experience.”


### **You don't need great coding skills to find great 'bugs'**

Contrary to the popular notion that sophisticated coding skills are needed to become a white hat hacker, Mr Eng noted that a basic knowledge of programming was sufficient to get started in finding ‘bugs’ in IT systems. What’s more important is to understand the logic of user interfaces and websites. “You don’t need great coding skills to find great ‘bugs’,” he quipped.

### **Make responsible disclosure a norm**

When a white hat hacker identifies a major cybersecurity loophole, it is their social responsibility to make it known to the public. However, organisations need time to patch these vulnerabilities, so white hat hackers operate under a responsible disclosure model, where they only release information about the vulnerability after a certain amount of time has lapsed.

Mr Eng recommends that organisations set up a portal or contact point for white hat hackers to practise responsible disclosure. For those relatively new to the white hat hacking space, he advocates that they “stick to the rules” and participate in public bug bounties where the legal boundaries are clear.

### **3 common bugs cybersecurity professionals should note**

Over the years, Mr Eng has noticed three common ‘bugs’ in the IT systems he has tried to penetrate as a white hat hacker, which he thinks cybersecurity professionals ought to pay more attention to:


1. Insecure Direct Object References (IDOR)

    This occurs when an application allows an individual to bypass authorisation and access an organisation’s data by changing the value of a specific parameter. “Let's say I’m logged in as ID#1000. But if I change a field to ID#1001, I may be able to view someone else’s personal information within the same database,” said Mr Eng.
    

2. Cross-site scripting (XSS)

    An attacker can send malicious code to an unsuspecting user which grants access to the victim’s cookies and sensitive information, such as usernames and passwords. The malicious code could arrive as a pop-up link while someone is making a banking transaction, and once clicked, becomes a gateway for information to be siphoned from the banking site.
    

3. Cross-site request forgery (CSRF)

    Unlike XSS attacks which allow hackers to steal data, CSRF attacks grant hackers the ability to force a user to make a state-changing action, such as approving a fund transfer. “Basically, the attacker sends you a link, and this link will make you do something on the attacker’s behalf,” Mr Eng said.

