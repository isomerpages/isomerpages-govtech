---
layout: post
title: "Clearing the air – using tech to keep our environment smoke-free"
permalink: "/media/technews/clearing-the-air-using-tech-to-keep-our-environment-smoke-free"
category: technews
image: "images/technews/balefire-smoking-1.jpg"
---
As a garden city, Singapore is known for its lush greenery, clean streets, and fresh air. 

Speaking of which, technology has been tapped in the last two years to maintain that fresh air that we value, whether we are in an urban setting or in the great outdoors. 

In this article, we take a look at how video analytics is being used to detect smoking that takes place outside of designated public places. 

---

![Using tech to keep our environment smoke-free](/images/technews/balefire-smoking-1.jpg)
Let's see how tech can be used to keep our environment smoke-free!
Photo by <a href="https://unsplash.com/@johnmcclane?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Andres Siimon</a> on <a href="https://unsplash.com/s/photos/smoking-zone?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
## A fun name for a serious subject

Every project needs a name, and the team chose “Balefire” for this smoking detection video analytics project. A balefire is a bonfire used for sending smoke signals. So since there’s smoke involved and signals need to be sent regarding smoking taking place, balefire was chosen!

## The key to training a machine – data, data, data

Balefire’s basic premise is to train a machine to recognise smoking activities within videos. To do so, the machine needs to be shown many examples of a human smoking, preferably in different poses and stances. 

The team deployed cameras at smoking hotspots such as near dustbins to capture videos. They then manually labelled the data so that the machine understands what it is seeing. They also used powerful machine learning models that could identify key parts of a person, such as face, elbows, and knees) accurately, enabling them to analyse different stances more accurately. 

The labelled data is then used to train the machine so that it eventually can tell when a video shows someone smoking, even though it has not been explicitly labelled as such.  

## First trial – proof of concept

A two-week trial was carried out in March 2019. Mobile cameras were deployed at a hotspot where illicit smoking was known to take place. 

Video is uploaded to a cloud server where it is analysed for instances of smoking taking place. Once detected, Telegram alerts are triggered for National Environment Agency (NEA) officers to carry out enforcement. 

While the solution worked, there were some drawbacks. It was expensive to constantly send data up to the cloud. Areas with a high number of mobile devices also caused the 4G network there to be congested, affecting video streaming quality and the accuracy of video analytics. 

## Second trial – effectiveness enhanced

The second trial, which lasted a month in September 2020, saw higher accuracy thanks to a few factors. 

One, the team had collected a bigger data set with more varied scenarios of smoking, enabling the machine to recognise even more instances of smoking. They also enhanced the analytics pipe line to include pose estimation. 

Two, video analytics was now done in a device deployed together with the mobile camera, enabling near real-time analysis. Known as edge data processing, this meant that video no longer needed to be streamed to the cloud and intermittent 4G networks were no longer a problem. It was also more cost effective as it was not constantly uploading data. 

This “video analytics on the edge” was made possible thanks to increasingly powerful computational power on smaller hardware that required less power.  

## Tech challenges accepted and overcomed 

Overall, there were three major areas of tech challenges to overcome. 

* Video analytics – It took years to tune the video analytics engine so that it performs well in a variety of settings such as in crowded areas, narrow alleys, and amount of daylight.

* Deployability – The solution had to be scalable, meaning it had to be deployed in different locations with minimal manual effort and without having onerous infrastructure support. The edge processing of video was a major development that allowed scalability. 

* Robustness – To ensure operation across the island 24/7 without crashing, the team built data pipelines to back up data, raise alerts to NEA, monitor the functioning of deployed devices, and also collect feedback. 

## What’s next

The video analytics team is constantly exploring other video analytics models that can be deployed on the edge so as to expand the use of this technology. 

It is also hoping that other government agencies can tap on the tech behind Balefire to support their operational needs in monitoring, security, and surveillance.



The promise of super fast mobile internet in the form of 5G has been around for some time, but this year was when it got closer to reality here in Singapore. 

Consumers may be getting as many as [three standalone 5G networks](https://www.businesstimes.com.sg/technology/singtel-m1-starhub-tie-up-and-tpg-provisionally-awarded-21-ghz-spectrum-rights-for-5g) to choose from, thanks to an awarding of network spectrum rights to Singtel, an M1-Starhub consortium, and TPG. 

They are aiming to deploy 5G with 50 per cent coverage within 2 years and nationwide coverage within five years. 

Meanwhile, [Sentosa has been serving as a testbed](https://www.tech.gov.sg/media/media-releases/2021-10-20-first-batch-of-public-sector-5g-trials-at-sentosa-underway) for trials of 5G’s application in public sector projects. The Building and Construction Authority and National Environment Agency were among the first government agencies to leverage low latency 5G for trials involving fully autonomous robots, tele-operated vehicles, and augmented reality.

## Electric vehicles

Wait a minute, haven’t electric vehicles, or EVs, been around for quite a few years already? True that. But 2021 was the year that Tesla, perhaps the most well known EV maker, opened a sales portal in Singapore.

Singapore has been pushing to upgrade its infrastructure to support the adoption of EVs. This year, government agencies [awarded the pilot tender](https://www.ura.gov.sg/Corporate/Media-Room/Media-Releases/pr21-31) for EV charging points in public car parks across the island.

Starting September 2021, more than 600 EV chargers will be deployed at over 200 car parks in locations such as public housing and industrial estates, public parks, community centres and the Central Business District over the next 12 months. Singapore aims to outfit 40,000 charging points in public car parks by 2030.

## Cryptocurrency

It’s up, it’s down, it’s going all around. That sums up the story of Bitcoin, the cryptocurrency that has made multimillionaires out of some early adopters and captured the world’s attention. 

It hit a new milestone this year as [El Salvador](https://www.npr.org/2021/09/07/1034838909/bitcoin-el-salvador-legal-tender-official-currency-cryptocurrency) became the first country to accept Bitcoin as legal tender, an alternative to its other currency, the US dollar. The country’s president argued that the move would spur investment in the country and help 70 per cent of the El Salvadorans who don’t have access to traditional financial services. Whether the bold experiment will succeed is [still up in the air](https://www.nytimes.com/2021/10/07/world/americas/bitcoin-el-salvador-bukele.html), and the world is watching for clues about cryptocurrencies’ future. 

Back home, Singapore is aiming to be a leading player in the global crypto economy. The Monetary Authority said that it s putting in place [“strong regulation”](https://www.straitstimes.com/business/companies-markets/singapore-has-grand-ambitions-to-become-a-global-crypto-hub), so firms that meet its requirements and address the multitude of risks in one of the fastest-growing areas of finance.

And Singapore is not the only country in Southeast Asia with its eye on the potential of crypto. Thailand is paving the way for the [acceptance of digital currency](https://www.bloomberg.com/news/articles/2021-11-28/thailand-lays-groundwork-for-crypto-tourism-to-revive-industry) for travel so that tourist with crypto will find it convenient to spend and provide much needed support to its pandemic-hit tourism industry.

## Metaverse

The metaverse entered everyday lexicon thanks to Facebook’s renaming itself [Meta](https://www.cnbc.com/2021/10/28/facebook-changes-company-name-to-meta.html) and announcing its ambition to chart the next era of online behaviour by establishing a metaverse  where humans can live, work, and play as an extension of the physical world. [Other tech giants like Microsoft](https://sg.news.yahoo.com/2021-was-the-year-of-the-metaverse-but-itll-take-years-before-its-a-reality-170559280.html) also outlined their plans to make the metaverse a reality. 

What might the metaverse look like? Right now, it’s anyone’s guess as it’s more a notion than a definition. Possibilities abound at this point, which is what makes it exciting and what makes it look like a potential pot of gold to different companies competing to establish the number one metaverse playground. 

It also seems fitting that the fourth Matrix movie dropped this year, given that the first Matrix was a groundbreaking film featuring a sinister version of total immersion in a digital reality. 

## NFTs

NFTs, or non-fungible tokens, announced its arrival in the mainstream when a [jpeg NFT](https://www.nytimes.com/2021/03/11/arts/design/nft-auction-christies-beeple.html)sold for US$69 million. 

These uniquely tokenised objects reside in the digital world and are recorded in the blockchain, ensuring that they are one of a kind, giving them value derived from scarcity. By the first half of the year, [US$2.5 billion of NFTs have been sold](https://www.reuters.com/technology/nft-sales-volume-surges-25-bln-2021-first-half-2021-07-05/), ranging from digital artwork, to GIFs, to basketball highlights. 

## New trend or flash in the pan? 

With all things digital new, there is huge potential to be a game changer and there is also the chance that it’s just the equivalent of a shooting star, burning bright but also burning out quickly.

Which of these buzzwords will have staying power? Only time will tell and we’ll be sure to keep our eyes on them to see what the next chapter holds. 

