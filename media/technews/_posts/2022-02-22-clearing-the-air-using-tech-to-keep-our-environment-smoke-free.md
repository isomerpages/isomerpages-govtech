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

### **Like what you read? Subscribe for the latest stories in your inbox.**

<!-- Begin Mailchimp Signup Form -->
<link href="//cdn-images.mailchimp.com/embedcode/classic-10_7.css" rel="stylesheet" type="text/css">
<style type="text/css">
#mc_embed_signup {
	background: #f2f2f2; 
	clear: left; 
	font: 20px Lato,sans-serif;
	margin-bottom: 16px;
	padding: 16px;
	display: inline-block;
}
#mc_embed_signup .indicates-required {
        margin-bottom: 16px;
}
#mc_embed_signup .mc-field-group {
        margin-bottom: 16px;
	margin-right: 16px;
	width: inherit;
}
ul, li{
    list-style:none;
    list-style-type:none;
}
label {
        font-weight: bold;
	margin-bottom: 16px;
	margin-right: 16px;
}
input {
        height: 40px;
}
select {
        height: 40px;
}
option {
        font:20px Lato,sans-serif;
	height: 40px;
}
input[type='radio'] {
  height: 14px;
  width: 14px;
  vertical-align: middle;
  margin-right: 14px;
  margin-left: 4px;
}
#mc_embed_signup .button {
        background-color: #B41E8E;
	font:20px Lato,sans-serif;
        color: #ffffff;
}
#mc_embed_signup form {
    padding: 0;
}	
</style>
<div id="mc_embed_signup">
<form action="https://tech.us16.list-manage.com/subscribe/post?u=9326ff42459737140a6baa881&amp;id=8b7e185878" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
    <div id="mc_embed_signup_scroll">
	
<div class="indicates-required">
	<span class="asterisk">*</span> indicates required
</div>
<div class="mc-field-group">
	<label for="mce-EMAIL"
	       >Email Address  <span class="asterisk">*</span>
</label>
	<input 
	       type="email" 
	       value="" 
	       name="EMAIL" 
	       class="required email" 
	       id="mce-EMAIL"
	/>
</div>
<div class="mc-field-group">
	<label for="mce-FNAME"
	       >Name  <span class="asterisk">*</span>
</label>
	<input 
	       type="text" 
	       value="" 
	       name="FNAME" 
	       class="required" 
	       id="mce-FNAME"
	/>
</div>
<div class="mc-field-group">
	<label for="mce-TECH"
	       >Are you in a tech-based job / field of study?  
	       <span class="asterisk">*</span>
</label>
	<select name="TECH" class="required" id="mce-TECH">
	<option value=""></option>
	<option value="Yes">Yes</option>
	<option value="No">No</option>
</select>
</div>
<div class="mc-field-group">
	<label for="mce-INDUSTRY"
	       >Which industry do you primarily work in?  <span class="asterisk">*</span>
</label>
	<select name="INDUSTRY" class="required" id="mce-INDUSTRY">
	<option value=""></option>
	<option value="Manufacturing - Energy &amp; Chemicals">Manufacturing - Energy &amp; Chemicals</option>
<option value="Manufacturing - Precision Engineering">Manufacturing - Precision Engineering</option>
<option value="Manufacturing - Marine &amp; Offshore">Manufacturing - Marine &amp; Offshore</option>
<option value="Manufacturing - Aerospace">Manufacturing - Aerospace</option>
<option value="Manufacturing - Electronics">Manufacturing - Electronics</option>
<option value="Built Environment - Construction &amp; Architecture">Built Environment - Construction &amp; Architecture</option>
<option value="Built Environment - Real Estate">Built Environment - Real Estate</option>
<option value="Built Environment - Cleaning">Built Environment - Cleaning</option>
<option value="Built Environment - Security">Built Environment - Security</option>
<option value="Trade &amp; Connectivity - Logistics">Trade &amp; Connectivity - Logistics</option>
<option value="Trade &amp; Connectivity - Transportation">Trade &amp; Connectivity - Transportation</option>
<option value="Trade &amp; Connectivity - Wholesale Trade">Trade &amp; Connectivity - Wholesale Trade</option>
<option value="Essential Services - Healthcare">Essential Services - Healthcare</option>
<option value="Essential Services - Education">Essential Services - Education</option>
<option value="Professional Services - Professional &amp; Consulting Services">Professional Services - Professional &amp; Consulting Services</option>
<option value="Professional Services - Financial Services">Professional Services - Financial Services</option>
<option value="Professional Services - Infocomm, Technology &amp; Media">Professional Services - Infocomm, Technology &amp; Media</option>
<option value="Lifestyle - Food &amp; Beverage">Lifestyle - Food &amp; Beverage</option>
<option value="Lifestyle - Retail">Lifestyle - Retail</option>
<option value="Lifestyle - Hotels &amp; Tourism">Lifestyle - Hotels &amp; Tourism</option>
<option value="Lifestyle - Food Manufacturing">Lifestyle - Food Manufacturing</option>
<option value="Government">Government</option>
<option value="Other Industry">Other Industry</option>
<option value="Not Applicable">Not Applicable</option>
	</select>
</div>
<div class="mc-field-group size1of2">
	<label for="mce-BIRTHYEAR">Which year were you born in? </label>
	<input type="number" name="BIRTHYEAR" class="" value="" id="mce-BIRTHYEAR">
	<span id="mce-BIRTHYEAR-HELPERTEXT" class="helper_text"></span>
</div>
<div class="mc-field-group input-group">
    <strong>Are you interested in co-creation opportunities? </strong>
    <ul><li>
    <input type="radio" value="1" name="group[59]" id="mce-group[59]-59-0">
    <label for="mce-group[59]-59-0">Yes</label>
</li>
<li>
    <input type="radio" value="2" name="group[59]" id="mce-group[59]-59-1">
    <label for="mce-group[59]-59-1">No</label>
</li>
</ul>
    <span id="mce-group[59]-HELPERTEXT" class="helper_text"></span>
</div>	    
	<div id="mce-responses" class="clear">
		<div class="response" id="mce-error-response" style="display:none"></div>
		<div class="response" id="mce-success-response" style="display:none"></div>
	</div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
    <div style="position: absolute; left: -5000px; font:20px Lato,sans-serif;" aria-hidden="true"><input type="text" name="b_9326ff42459737140a6baa881_8b7e185878" tabindex="-1" value=""></div>
    <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
    </div> 
</form>
</div>
<!--End mc_embed_signup-->

*By submitting this form, you accept the [Terms & Conditions](https://www.tech.gov.sg/files/GovTech-Subscription-Terms-Conditions-2021.pdf) relating to the subscription to GovTech’s digital updates and acknowledge that you have read and understood the [Government Agency Privacy Statement](https://www.tech.gov.sg/privacy/).*


