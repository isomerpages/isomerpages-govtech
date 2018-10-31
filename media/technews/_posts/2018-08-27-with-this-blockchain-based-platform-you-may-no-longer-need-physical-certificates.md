---
layout: post
title:  "With this blockchain-based platform, you may no longer need physical certificates"
permalink: "/media/technews/with-this-blockchain-based-platform-you-may-no-longer-need-physical-certificates"
date: 2018-08-27
category: technews
image: "images/technews/with-this-blockchain-based-platform-you-may-no-longer-need-physical-certificates-part-1.png"
---

TL:DR: How can employers know if an academic certificate is genuine? Currently, they would have to verify its authenticity with the educational institution that conferred it. Using the Ethereum blockchain, GovTech has developed OpenCerts, a platform for issuing and validating academic certificates that are tamper-resistant and permanent. With the participation of accredited academic centres in multiple countries, cross-border validation of academic certificates could be made much simpler.

---
 
Talk to any employer and the issue of talent acquisition is more than likely to surface as a major bugbear. In a competitive business climate, hiring the right person with the right experience, knowledge and skills can significantly impact an organisation’s bottom line and alter its growth trajectory.

During the hiring process, an individual’s educational qualifications are often used to determine his or her fit for a specific role. But in recent years, fraudsters have gamed the system to gain employment—by submitting fake credentials, they exaggerate their competencies and hijack the hiring process to land themselves positions for which they may be unprepared to fill. 

With globalisation, the problem of forged academic certificates is exacerbated, as cross-border verification of academic certificates can be cumbersome.

At the heart of the matter is trust—how can employers trust that potential candidates are as qualified as they claim to be? When it comes to issues of provenance involving multiple parties situated in different geographies, distributed ledger technology—otherwise known as blockchain—may be the answer.
 

**Building the foundations of trust with blockchain**

Put simply, a blockchain is a tool for digitally recording transactions, be it between a buyer and a seller, or an educational institution and its graduates. A public blockchain is neither owned nor maintained by any individual. Rather, it is decentralised across all the participants who transact on it. This means that the records made on it cannot be altered or destroyed by any single person.

Because of these properties, a team of five led by Mr Steven Koh, deputy director of Government Digital Services at the Government Technology Agency of Singapore (GovTech), is leveraging blockchain to build an ecosystem of trust for academic certification. 

The system, called OpenCerts, allows educational institutions to create digital representations of every academic certificate that it has issued or will issue, and publish them onto the Ethereum blockchain.

“Once you put the certificates on a public ledger like Ethereum, it's permanent and it’s immutable,” he said, adding that the certificates are essentially timestamped and assigned a cryptographic signature that becomes invalidated should any attempt be made to tamper with the certificates’ contents. 

To achieve this, Mr Koh and his colleagues first had to create libraries and open standards to publish digital signature of the certificates on the public blockchain.

“As long as institutions follow this standard, they can publish their academic certificates on the Ethereum blockchain,” he said. “Since it’s on the public blockchain, institutions only need to pay for “gas” [transaction fee] because there’s no [infrastructure] hosting required, The code which we developed is also open source—any institution, in any country, can use it” without being locked-into proprietary standards or technology.
 
**OpenCerts change the way students receive their degree certificates and transcripts**

But how does this change the way students receive their degree certificates and transcripts? Mr Koh explained that the digital representation of the documents will be issued as a single JavaScript Object Notifier (JSON) file by the educational institutions, containing human-readable information about a student’s academic performance.

Once issued, the graduate owns the file but cannot alter its contents (as doing so would void the timestamp and cryptographic signature of the file). However, he or she can freely send this file to potential employers, as if it were a certified true copy of a physical ink-and-paper document. 

“An employer who receives the digital representation can then check the authenticity of the file against the public ledger using our [certificate store interface](https://govtechsg.github.io/certificate-web-ui/admin/){:target="_blank"}” said Mr Koh. This is where the system verifies the timestamp and cryptographic signature of the file to make sure that it has not been doctored in any way.

Furthermore, to vouch for the identity of the owner of the JSON file, Mr Koh explained that an individual’s personal identification information, such as name and identification number could be tagged onto the JSON file. 

“As a student, you won’t have to change the way you interact with potential employers, and that's the beauty of it [the OpenCerts platform]. When technology is sophisticated enough, it should work like magic” Mr Koh quipped, adding that educational institutions will also substantially reduce the time spent on re-issuing certificates and vouching for their authenticity.
 
 
**Patching weak links**

As OpenCerts is built on a public blockchain, any educational institution can set up an account and begin uploading certificates. Mr Koh pointed out that this means degree mills—organisations that claim to be institutes of higher learning but dole out substandard or illegitimate academic certificates for profit—could also make use of OpenCerts to publish certifications onto the public blockchain.

This is where education ministries could step in to create a directory of accredited and blacklisted educational institutions for the 
[validation portal](https://govtechsg.github.io/certificate-web-ui/){:target="_blank"}. “Every country will have their own directory and we can chain these directories together to build a network of accredited and blacklisted institutions across multiple countries” said Mr Koh. 

There is also room to add new features to the OpenCerts platform. For example, a mobile app could be developed to make it easier for graduates and employees to receive, store, share and verify academic certificates on the go. 

“This mobile app could function as an educational passport or wallet, where it stores all your credentials. But these are all what I call icing on the cake—we’ve focussed on the more hardcore or more challenging engineering problems, so that we now have a system that is technically viable. Let’s see where this goes,” he concluded.

*The OpenCerts platform is now available on GitHub for review and adoption by education institutions from around the world. Click [here](https://blog.gds-gov.tech/distributed-ledger-tech-for-public-good-328a7ef12160){:target="_blank"} to watch OpenCerts in action.
