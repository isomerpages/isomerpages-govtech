---
layout: post
title: "Are you leaking information on the web? Use these tools to find out"
permalink: "/media/technews/are-you-leaking-information-on-the-web"
category: technews
image: "/images/technews/are-you-leading-information-on-the-web-part1.png"
---

![Are you leaking information on the web? Use these tools to find out](/images/technews/are-you-leading-information-on-the-web-part1.png)

Information that is publicly available on the internet can be used for good or malicious intent. Here’s how you can scan the web with open-source intelligence (OSINT) tools to protect yourself or your organisation.
---

It’s a recurrent trope in spy movies—a skilled secret agent infiltrates an organisation and gathers compromising data on its people and processes; information that can be used as leverage. Far from being limited to works of fiction, such intelligence gathering is more common in everyday life than you think, especially in this digital age.

For example, when companies seek to fill a position, their human resource division runs background checks on potential candidates, tapping information on job portals and even social media pages to make hiring decisions. Intelligence amassed from public and unclassified sources and analysed for a specific purpose—be it national security or corporate profiling—is known as open-source intelligence (OSINT). Depending on how the information is used, it can help or harm individuals and organisations.

Here are three things you need to know about OSINT, with tips on how you can identify and plug information ‘leakages’ about yourself and your organisation.

### **What are some key OSINT sources?**

Traditional media remains one of the most accessible sources of public information. These include magazines and newspapers as well as radio and television broadcasts. Some governments and corporations may also put out unclassified datasets and reports for public viewing.

Importantly, following the dawn of the Internet, new media such as blog posts, digital newsletters and social media have emerged and quickly developed into an OSINT treasure trove. Not only is new media accessible from anywhere. It is also easily shared, which means that it enters the collective consciousness of the general populace more rapidly. 

### **Why should you use OSINT?**

OSINT can be used by companies to inform the hiring process. Law enforcement agencies could also use OSINT to identify and track security threats. In these contexts, OSINT is directed outwards.

However, organisations can also carry out OSINT on themselves to learn more about their online privacy and security landscape. For example, OSINT could help organisations uncover leaked credentials of high-value targets such as C-suite personnel. Employees may also inadvertently reveal their organisation’s IT assets on their LinkedIn profiles, perhaps even providing outsiders with details on the operating systems and servers used as IT infrastructure at their organisation. Similarly, developers may fail to keep application source code confidential.

Having an OSINT protocol in place could help plug these loopholes before they are exploited by hostile groups. 

### **How do I perform OSINT?**

Search engines and social media sites are perhaps the most straightforward means of carrying out OSINT. Simply by keying in the name of an individual or organisation, one can learn what the public knows about the said party.

To go deeper, organisations can use advanced search engines like:

### Google Hacking Database

The Google Hacking Database (GHD) is a repository of custom Google search terms for files containing sensitive information such as usernames, vulnerable servers, and even passwords, also known as ‘Google Dorks’. Attackers can use this database to identify search strings that may uncover vulnerabilities and sensitive information on affected websites.

For example, the following search string would produce a list of directories within <domain> with directory listing enabled, and these files are publicly accessible:

**site:<domain> intitle:”index of”**

Hence, organisations may use GHD to check whether any of their sensitive information is inadvertently exposed via these custom search strings.

### Wayback machine

The [Wayback Machine](https://web.archive.org/) is a digital archive of the World Wide Web that stores snapshots of websites at various points in time over the course of history. Attackers may use it to gather compromising intelligence about an organisation through earlier versions of its websites.

Defensively, organisations may use Wayback Machine to ensure that no sensitive data exists in legacy editions of its webpages.

### Sploitus

[Sploitus](https://sploitus.com/)is a search engine for publicly-available exploits for vulnerable software. Attackers may use these exploits to launch attacks against organisational assets.

On the other hand, organisations may use Sploitus to find out if exploits for the specific software versions they are using are publicly available. Organisations can then remediate these exploits to pre-empt a breach.

For example, if an organisation server is using Drupal 8.6.10 (a Content Management System, or CMS), a search in Sploitus could reveal if a public exploit exists to compromise the CMS.

### HaveIBeenPwned

![Are you leaking information on the web? Use these tools to find out](/images/technews/are-you-leading-information-on-the-web-part2.png)

[HaveIBeenPwned](https://haveibeenpwned.com/) is a search engine for compromised email addresses. Anyone can use it to check if their email addresses have been hijacked for malicious purposes and identify which breaches the email addresses were involved in. If an employee learns that his or her email address has been compromised, they can be advised to change their passwords or to enable 2-factor authentication.

Hopefully, with the sharing of some of these basic OSINT tools, you can now leverage this knowledge to discover unexpected information you or your organisation might have leaked on the internet. Take action now to prevent vulnerabilities from being exploited.


