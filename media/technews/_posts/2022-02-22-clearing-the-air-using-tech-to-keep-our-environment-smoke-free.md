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

## What’s next?

The video analytics team is constantly exploring other video analytics models that can be deployed on the edge so as to expand the use of this technology. 

It is also hoping that other government agencies can tap on the tech behind Balefire to support their operational needs in monitoring, security, and surveillance.

