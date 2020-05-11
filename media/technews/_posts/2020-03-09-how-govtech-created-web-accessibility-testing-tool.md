---
layout: post
title: "How GovTech created a web accessibility testing tool"
permalink: "/media/technews/how-govtech-created-web-accessibility-testing-tool"
category: technews
image: "/images/technews/web4all-part1.JPG"
---

![How GovTech created a web accessibility testing tool](/images/technews/web4all-part1.JPG)

Meet the GovTech team working to embed inclusion and accessibility into webpage design and software development. 
---

When Louis Braille invented the Braille system in 1824, he empowered individuals with vision impairment to participate more actively in their communities. With the print alphabet translated into a touch-based format of raised dots on embossed paper, sight was no longer a prerequisite for accessing printed content—one could read without needing to see. 

Fast forward two centuries and a different kind of accessibility issue has emerged. As information is dominantly published online and transactions are increasingly conducted in the digital sphere, persons with disabilities (PWDs) face new challenges in navigating webpages and obtaining information.

At the Government Technology Agency of Singapore (GovTech), a team of developers and designers wants to make sure that PWDs are not left out of the digital revolution. For a start, the team has created a customisable, automated accessibility testing tool that allows software development teams to assess whether their products are user-friendly to PWDs.

“Before we can improve the accessibility of government websites—especially the ones with many users and high transaction volumes—we need to measure how accessible our digital services are in the first place,” said Ms Gloria Chua, a product designer at GovTech.

### **Know your user**

Conversations about web accessibility should necessarily involve PWDs who are the ultimate end users of digital services, Ms Chua emphasised. That was why the GovTech team began the process of developing their web accessibility tool by carrying out a contextual inquiry on government e-service use by PWDs. This entails not only interviews with PWDs, but also observation of how PWDs interface with the relevant webpages. 

“Our partner, SG Enable and the Singapore Association of the Visually Handicapped, facilitated our involvement of relevant research participants who could help us better understand the needs of PWDs,” Ms Chua said.

The contextual inquiry revealed some crucial shortcomings of government e-services. For example, persons with vision impairments rely on screen readers to inform them of what is being displayed on a screen. However, not all webpages are screen reader friendly. 

“Some webpages might have a clickable button that says ‘next’, but the screen reader simply reads it out as ‘button’”, said Ms Chai Yinn and Mr Dalson Tan, software engineer interns at GovTech who were involved in the contextual inquiry. “Some of our users told us that this problem alone accounted for more than 60 percent of their difficulties in accessing government e-services.”

With a list of common pain points surfaced by PWDs, the GovTech team then brainstormed on how they might develop a tool to automatically detect these accessibility issues and rank them according to impact on PWDs.

![How GovTech created a web accessibility testing tool](/images/technews/web4all-part2.JPG)

### **Who’s keeping score?**

To automate the process of detecting accessibility issues, the GovTech team developed a bot that scans through webpages and analyses the markup language that displays webpages. For example, it looks at whether buttons are properly labelled and how it is read by users using screen readers.  If the ‘submit’ button just reads ‘button’ would hinder the user from understanding that the button actually does. Similarly, pictures that are not labelled correctly with alternate text will be flatted as an accessibility issue. 

The bot then scores the impact of accessibility issues using the AXE accessibility testing engine by Deque Systems Inc. Importantly, the team augmented the AXE scoring system by introducing a local factor which allowed for more fine-grained categorisation of accessibility problems. This resulted in a novel scoring system: New Priority Score = AXE Severity * (1 + Local Factor).

“Our local factor reflects whether an accessibility issue is regarded as an existing functional issue by Singaporean PWDs in our contextual inquiry,” said Mr Lim Zui Young, a DevOps and quality engineer at GovTech. “This will allow development teams to prioritise their accessibility fixes based on the local context rather than a generic scoring system.”

### **All on the same team**

While developing the automated accessibility testing tool, the GovTech team also made sure that their solution could be seamlessly incorporated into the workflow of software development.

“We were adamant that our tool should fit into the continuous integration and continuous delivery (CI/CD) approach of Agile software development,” said Mr Lim. “This means that developers should be able to use our tool at any point in their development process to get a readout of accessibility, not wait until the product is finished before testing for accessibility as an afterthought.”

The team is now trialling their accessibility testing tool with colleagues at GDS, including DesignSystem.gov.sg, and the Ministry of Culture, Community and Youth (MCCY)’s grants portal with the aim of raising the inclusiveness and ease-of-use of e-services. Ms Yang Kaiting, an associate software engineer at GovTech, highlighted that in the future, the tool may even be able to suggest constructive fixes to developers. Features catering to individuals with hearing and cognitive disabilities are also in the works, she added.

“We all believe that inclusivity is a team sport. It’s not something that you pursue ‘only if you are interested in it’,” said Mr Chew Kia Hwee, a user experience designer at GovTech who helped design the accessibility testing tool. “The better you are at working together to identify accessibility problems, the stronger and more inclusive your product will become,” he concluded. 
