---
layout: post
title: "Improving TraceTogether through community engagement"
permalink: "/media/technews/2020-07-06-tracetogether-token-teardown"
category: technews
image: "/images/technews/tracetogethertokenteardown1.jpg"
---

![Improving TraceTogether through community engagement](/images/technews/tracetogethertokenteardown1.jpg)

At a recent GovTech engagement session, several experts from Singapore’s tech community came forward to “tear down” the TraceTogether token and give feedback for improvement. 
---

On 28 June 2020, the [Government began the distribution of the TraceTogether Token](https://www.sgpc.gov.sg/sgpcmedia/media_releases/sndgo/press_release/P-20200628-2/attachment/Media%20Release%20-%20Seniors%20to%20receive%20first%20batch%20of%20TraceTogether%20Tokens%2028062020.pdf), catering first to the vulnerable seniors in the community. Nearly 10,000 tokens were given out to these seniors who are not digitally connected, and are physically frail, living alone or have poor family support. The TraceTogether Token supplements the TraceTogether mobile app – by extending contact tracing to groups in the community [who do not have smart phones and those whose phones do not work well with the TraceTogether app.](https://www.tech.gov.sg/media/technews/two-reasons-why-singapore-sticking-with-tracetogether-protocol)  

### **The tale of the token**

Mr Chan Cheow Hoe, the Government Chief Digital Technology Officer and GovTech deputy chief executive, explained that the Trace Together Token is designed to do only one thing: capture proximity data based on Bluetooth signals. Every five minutes, it scans to detect other TraceTogether users on the Token or the app. The more ‘hits’ between two TraceTogether users, the more likely the two users are in close proximity for an extended period of time. Proximity can be estimated by the strength of the Bluetooth signal. The closer users are to one another, the stronger the signal is and vice versa. According to Mr Chan, the Token’s battery allows it to continuously scan for between six to nine months, with no charging required.

There are only four types of data contained in the token: the Bluetooth signal, the user’s randomised ID, the randomised ID of any other user in proximity and a timestamp of the encounter. It’s important to note that these IDs do not refer to your NRIC number, but randomised and anonymised IDs linked to a personal identifier like a mobile number. Mr Chan emphasised that no data is extracted unless a user has tested positive for COVID-19. “From there, the MOH has a special software key that can unlock the device and reveal the data for use in contact tracing,” Mr Chan said. 

“The reason why we wanted such a simple device was to assure everybody that it is not a tracking device,” said Mr Chan. “The device is so small that it stores only about 25 days of data.” 
.

<iframe width="560" height="315" src="https://www.youtube.com/embed/Wg5qjUDQHgU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


### **“Tear down” the token!**

When plans for the TraceTogether Token were first announced, there were public concerns over privacy, with some worried that it could be used as a location tracking device. To allay public fears, as well as to improve future iterations of the token, the Government Technology Agency (GovTech) organised a [“tear down” event](https://www.facebook.com/Vivian.Balakrishnan.Sg/posts/10156902734466207?__xts__%5B0%5D=68.ARDZuC1cYDuUuW2xB6i5nlD4uievD9cO9tjnvyjenNKzCCFzEALdcjkLEOY-1VharDTcIGhBtZIkDd8gfaheJod7cZCXMkmCwdWuspyUmt4Bq1ovUggfTvNFanXjiQ16nby5wRME9dlTrxV-jcnjH07rUOigYJl11oqEcKtVBxTzUCziTR81_U9oXzGi7QoCs2xMW4675Iz4LVOJP7TI0VtMT-RTKT6sLxb1RIeAanRCcI50UPdpJQXdIyFcqHpYZEJkWjmuWVzSGStRzLYP8DRGun_jrxkriS_t4UcCK8CjX-buYFKAQFcbpztmIz86xTMOyW3lP33wo_7GMtwf53UkKhSPLfDIy4UxH_9zpci7IMh966INRN17JwkFjZfNZkBpLu3KqL8nHnBVCodU4TL_Tdjhc2EPxwD81XGVAeG7PBq3rj1eFPYTPx0RNwg4UPHqntcMNBp9pf0FhX8hczoaURVY4cd5B1YRJ2s6&__tn__=H-R) on 19 Jun with four experts and open-source advocates—giving them a first look at the TraceTogether Token.  

These experts included: hardware hacker Dr Andrew ‘bunnie’ Huang; firmware developer Mr Sean ‘xobs’ Cross; Mr Roland Turner, Chief Privacy Officer of relationship analytics provider [TrustSphere](https://www.trustsphere.com/); and Mr Harish Pillay, Chief Technology Architect at open-source software provider [Red Hat](https://www.redhat.com/en). They were joined by the Minister-in-Charge of the Smart Nation Initiative, Dr Vivian Balakrishnan and Minister-in-Charge of GovTech, Dr Janil Puthucheary.

After an hour of probing the Token and its components, the four tech experts were unanimous in their observations that the Token would only perform what it was set out to do.

According to Dr Huang, GovTech’s TraceTogether Token is remarkably similar to a privacy-preserving contact tracing token he had previously designed with Mr Cross. “There were no surprises,” said Dr Huang. “If our inference [about its chip] is correct, we can safely say the Token cannot do anything other than Bluetooth-related activities. It cannot do GPS, Wi-Fi or cellular. It can’t sense your orientation or record your conversations.” Mr Turner agreed with Dr Huang’s observation. “The Token contains only the components required to do the job,” he added. 

Perhaps the most compelling piece of evidence that the Token does not compromise privacy lies in the battery. “If the Token is to last several months on such a tiny battery, there is simply not enough power available to operate beyond the advertised Bluetooth functions,” [commented Dr Huang in a blog post](https://www.bunniestudios.com/blog/?p=5820). “The battery would only last a few hours if it were receiving GPS or communicating via Wi-Fi,” [stated Mr Cross on his website](https://xobs.io/trace-together-token-teardown/). “There are also no additional sensors such as an accelerometer, pressure sensor, or microphone.”

## **Learning from the community** ##

To further strengthen community engagement and co-creation, Mr Chan shared that the GovTech team will be holding a hackathon to further improve the Token. “It’s about learning from the community,” he explained. “If you suggest better ways, we’ll adopt it and we will keep revising and improving our algorithms and firmware.” 

Mr Pillay added, “Open, honest collaboration is critical for trust building. I think Minister Balakrishnan reaching out to all of us is an extremely powerful move, but it’s also equally important for the Government to be willing to hear and accept strong and honest feedback.” 

“Overall, I’m pleased with the direction they are going for with the TraceTogether Token, and I look forward to getting one of my own,” remarked Mr Cross. 

Indeed, by working hand-in-hand with the community, it’s possible to overcome COVID-19 through tech.  




