---
layout: post
title: "Two reasons why Singapore is sticking with TraceTogether’s protocol"
permalink: "/media/technews/two-reasons-why-singapore-sticking-with-tracetogether-protocol"
category: technews
image: "/images/technews/two-reasons-singapore-sticking-with-tt1.png"
---

Although alternatives exist, here’s why the BlueTrace-powered TraceTogether is still preferred for digital contact tracing in Singapore.
---

![ttmasthead](/images/technews/two-reasons-singapore-sticking-with-tt1.png)

On 20 March 2020, the Government Technology Agency (GovTech) of Singapore released [TraceTogether](https://www.tracetogether.gov.sg/) which uses Bluetooth technology to alert users if they have been in contact with COVID-19 patients. The app was built to augment existing contact tracing efforts so that authorities can quickly identify and quarantine close contacts of COVID-19 patients.

Since its launch, TraceTogether, which uses the BlueTrace protocol, has amassed more than two million users—roughly one in every three people living in Singapore. But for the app to have any substantial impact on contact tracing efforts, experts believe that TraceTogether has to be downloaded by a bigger proportion of the Singapore population. 

One issue affecting TraceTogether’s efficacy is the fact that it does not work well on Apple’s iOS operating system. TraceTogether has to be kept running in the foreground for it to work most effectively, going against user behaviour and draining battery life. To get around this problem, tech giants Apple and Google have recently come together to launch Exposure Notification (EN), a protocol that can run on both iOS and Android systems. 

“Each protocol has their own strengths. Both try to achieve the same thing, but they both have different limitations,” observed Mr Harish Pillay, Chief Technology Architect at open-source software provider, Red Hat. 

In the first article of this two-part series, we lay down the reasons why TraceTogether is better-suited for Singapore’s needs. 

### **Catering to the local context**

It’s important to note that TraceTogether was designed specifically to support the Ministry of Health (MOH)’s response to a public health crisis – to intervene and quickly control the spread of the coronavirus. “[The app] provides contact tracers with additional information to allow them to locate infected contacts more quickly, reducing the spread of the disease and giving the population greater freedom to move, work and socialise than would otherwise be possible,” noted Mr Roland Turner, Chief Privacy Officer of relationship analytics provider TrustSphere. 

Once a user is confirmed to be infected with COVID-19, the user is able to upload the TraceTogether Bluetooth data. From there, MOH contact tracers can then decrypt the list of close contacts and quickly issue quarantine orders. To protect user data, all IDs are encrypted—with only MOH retaining exclusive access to the identification key. 

However, some have raised questions about why the Government chose not to use the EN Protocol since it would lead to higher adoption among iOS users, and higher adoption would mean better contact tracing. In a [Facebook post](https://www.facebook.com/Vivian.Balakrishnan.Sg/posts/10156889801466207) on 15 June, the Minister- in-charge of the Smart Nation initiative, Dr Vivian Balakrishnan,  said that while “it is a good and innovative system, however, we decided that it would be less effective in the local context.” 

### **Pinpointing the source of infection**

Why is this so? First, EN ultimately relies on users being responsible by monitoring their own symptoms and uploading their data to the cloud if they come down with COVID-19. Second, EN was designed to withhold certain information from public health authorities like the MOH. For example, in a situation where three infected persons A, B and C come into close contact with three others X, Y and Z, EN would notify X, Y and Z that they have potentially been exposed, but would not be able to tell if the exposure was linked to either A, B or C. 

So while EN allows MOH to know who the potential close contacts of the infected person are, contact tracers will have no way of identifying how, when and who infected the person in the first place. Without this information, MOH’s contact tracers cannot accurately identify the chain of transmission, pinpoint the exact source of infection, and verify which close contacts were indeed exposed to COVID-19. “The cost of this limitation is greater disease propagation because there’s no expert contact tracer in the loop,” said Mr Turner. 

“It seems COVID-19 is a more complicated disease than EN was designed to handle,” added open-source activist Dr Andrew “Bunnie” Huang. “In particular, EN cannot determine the cause of infections. Asymptomatic carriers may receive numerous notifications that they’ve been exposed to COVID-19, when in fact, they were the ones who exposed others to the virus.” Echoing Dr Huang’s statement, firmware developer Mr Sean “xobs” Cross concluded, “The Exposure Notification protocol is insufficient to aid in contact tracing.” 

On the other hand, Dr Huang noted that TraceTogether’s BlueTrace protocol has the potential to reveal the cause of infections, or causality—but only if there are enough participants in the network. Therefore, increasing the accessibility of TraceTogether is a top priority. 

### **TraceTogether’s accessibility**

But given that approximately one out of every five Singaporeans still does not own a smartphone, there is a need for TraceTogether to be more than an app to achieve greater coverage. “Not everyone can afford a smartphone and older smartphone models or operating system versions do not run the BlueTrace or EN protocol well. In order to extend effective protection to as many people as possible, we had to consider [hardware] tokens that would be simpler, more effective and more convenient than phones,” noted Minister Balakrishnan. 

A new portable device, called the [TraceTogether Token](https://www.tech.gov.sg/media/media-releases/2020-06-16-tracetogether-token-media-statement), will help address some of the challenges faced by the mobile app, like the need for maximum effectiveness, as well as battery drain. 

Such an option however, wouldn’t have been possible with EN, which is limited to the iOS and Android operating systems. As a home-grown solution designed to meet the country’s needs, TraceTogether and the underlying BlueTrace protocol is an example of how tech can be harnessed to support a very human endeavour – the specialised and professional work of our contact tracers. Watch out for the second part of this series, where we’ll be sharing ongoing efforts to improve TraceTogether by engaging with the wider community.

