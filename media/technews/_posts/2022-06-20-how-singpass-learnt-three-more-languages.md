---
layout: post
title: "How Singpass learnt 3 more languages"
permalink: "/media/technews/how-singpass-learnt-three-languages"
category: technews
image: "/images/technews/singpasstranslation.jpeg"
---

One of the most quintessentially Singaporean things is to receive government notices and hear announcements in English, Chinese, Malay, and Tamil. 

Well, the Singpass app has gotten even more Singaporean as it’s now available in the four official languages. More users can enjoy the convenience of transacting on the app in their mother tongue by simply selecting their preferred language in the app settings!

---

![Engineers who worked on the translation](/images/technews/singpasstranslation.jpeg)
*From L-R: Law Xun Da (Associate Software Engineer), Zheng Yurong (Associate UX Designer) and Tay Li Soon (Lead Product Manager)

To find out what went behind the scenes to deliver the quadrilingual Singpass, we caught up with three GovTechies from the National Digital Identity team who worked on the translation project: Zheng Yurong, Associate UX Designer; Law Xun Da, Associate Software Engineer; and Tay Li Soon, Lead Product Manager.

## Ensuring nothing is lost in translation

The project was a major undertaking: fresh translation work had to be done and then blended into an existing app. “Ultimately, it was a dance between different parties – the translators, the engineers, and the designers,” Li Soon said. In fact, legal divisions and other government agencies were also involved in checking that the texts are in line with existing policies.

Right off the bat, there were about 60,000 words that had to be translated into three languages across two platforms. 

To ensure that nothing is lost in translation and prevent translation boo-boos, several rounds of checks were implemented. 

The words were entered into a spreadsheet and given to a team of translators contracted by the Government Digital Services (GDS) division within GovTech. Mock-up screens are shared with the translators to offer context on what they are trying to translate. The team also supported the translators by developing a series of systems, such as locking worksheets to prevent accidental edits and colour coding cells for readability, to reduce human error and continuously improved the processes to achieve quality translations. In addition, the spreadsheet is designed to automate certain processes and make translating various strings to be added into the app more efficient.

The initial translations were then sent for a round of vetting with an external vendor. With this done, the translations were imported into the app and multiple rounds of testing were conducted to ensure that the user interface across different devices could fit the new words, especially since most of the translated text take up more screen space than the English version. Test builds of the translated app were also provided to internal native speakers who corrected contextually wrong word choices and reviewed the accuracy and design.

Finally, Citizen Translators – native speakers/writers who have volunteered with the National Translation Committee (NTC) under the Ministry of Communication and Information (MCI) to review translated materials and help raise the translation standards of public communications in Singapore – provided feedback to further refine the translations. Their comments were reviewed by the same team of internal translators, and some changes were implemented in subsequent app releases as part of ongoing efforts to improve app usability.

![Multi language on the home screen](/images/technews/singpasslanguages2.jpeg)
Same Singpass App, different languages!

## Fresh eyes of the Citizen Translators

The input from the Citizen Translators was invaluable as they had the benefit of distance from the project and could look at it with fresh eyes, said the team. 

“As these volunteers have less context of the project, they help to provide a true assessment of the accuracy and clarity of the translated instructions in the app, which may sometimes be lost during translation,” said Xun Da. 

An example of their recommendation was for the “What is this?” button where users can find out more about the “My cards” section which houses users’ digital identity cards. It was originally translated to “这是什么?”, a factually accurate but literal translation. However, the Citizen Translators recommended “了解更多” (Chinese for “Understand more”) instead. 

Li Soon said: “Interestingly, while ‘What is this?’ made sense in English, ‘Understand more’ worked better in the Chinese context. There are many such nuanced examples, and this is one of the reasons why translation work can be so challenging for a digital product. It is encouraging to see the community actively making such suggestions to better the product.”

Users who would like to provide feedback on the translations in the Singpass app can do so through the “Help us improve translations” form under the app settings.

## Diving into the intricacies of languages

Working on language also presented some challenges outside of the typical issues encountered by app developers. 

For instance, the team encountered difficulties developing tappable text (hyperlinked to other pages) for the Tamil version. The usual technical solutions of unicode and American Standard Code for Information Interchange (ASCII) manipulation didn’t work and the team had to do pattern checking on the Tamil text instead. 

“The Tamil language is very intricate – there may be multiple ways to write a character, and a slight difference in writing may have the same or an entirely different meaning,” said Xun Da. 

## Impact and future challenges

While the multilanguage feature has been successfully launched, there is still work to be done. The use of a spreadsheet to facilitate translations doesn’t allow translators to have a side-by-side view of how the app looks compared to what they are translating, which can hinder translations. Additionally, engineers have to manually import or export new strings of words into the code for each batch of translations, limiting scalability. 

“As we add more features (and translation strings) to the app, the incremental effort may not be as significant compared to our initial translation effort, but these issues remain, and we are looking at ways to improve our efficiency and quality of translations,” said Yurong.

Users may also still spot some information in the Singpass app that are not translated. While the data labels in one’s profile (e.g., Country of Birth, Race, Dialect) are translated to ensure monolingual users can find the data required, the data values (e.g., Singapore, Chinese, Cantonese) provided by the respective government agencies are only available in English to avoid mistranslations and maintain the data accuracy provided by the agencies. The team continues to gather feedback from the various agencies to improve the quality of translations.

Still, the feature has undoubtedly already benefitted many users. After all, the Singpass app enables over 3.5 million Singapore residents secure and convenient access to thousands of services by both the public and private sectors. Since about 11 per cent of Singpass app users set their smartphones to a language other than English, the potential impact of the multilingual Singpass can be far reaching, said Yurong. 

She added that user interviews revealed that some younger users had to help their parents when installing and using the Singpass app as the older generation found it challenging to use the app independently due to language barriers when it was only offered in English. 

“Offering the Singpass app in our four official languages allows residents who may not be proficient in English to access the services enabled by Singpass app, and we also hope it will help more elderly use the app independently,” she said.

