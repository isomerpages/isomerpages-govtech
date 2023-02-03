---
layout: post
title: "Timely government support – Made possible by a new citizen disbursement system bringing your government grants to you more efficiently"
permalink: "/media/technews/bringing-your-government-grants-to-you-more-efficiently"
category: technews
image: "/images/technews/citizen_disbursement.jpg"
---

![The team behind the system](/images/technews/citizen_disbursement.jpg)
*The team behind the Citizen Disbursement IT System. From L-R Steven Ooi, Wu Ting Ting, Chia Wei Kang, Tseng Wei Haur*

In recent months, you might have heard of or even benefited from the many Government support schemes being rolled out. These include the GST Voucher, the Assurance Package and various Special Payments, which ultimately help Singaporeans cope with daily living and are an important part of our social security system.

As the implementing agency of these Government schemes, Central Provident Fund Board (CPFB) has been called on more frequently to mete out timely and accurate support to citizens. To this end, CPFB joined forces with GovTech to modernise its IT system, developing a new Citizen Disbursement IT System (“CDIT”), which flexibly caters to varying scheme criteria and grant disbursement amounts. GovTech provided expertise and support in design, engineering and agile practices, which helped CPFB with its harmonisation of existing business processes to enhance the speed of grant disbursement to Citizens. Phase 1 of the system was rolled out to support the 2022 GST Voucher, Cost of Living Special Payment and Assurance Package 2023, disbursing a total of $3.1 billion in grants to up to 2.9 million individuals over five schemes.  

## What does the Citizen Disbursement IT System do? 

The CDIT consolidates common microservices needed for most schemes through a common code base and architecture, which is designed to be reusable, scalable and user-configurable with less IT involvement. Imagine the CDIT as a new drink vending machine that can churn out your favourite drink at a push of a button within seconds, as opposed to having to make your way to your chosen stall, queue to order and wait while the vendor prepares the order. 

Tseng Wei Haur, a product owner at CPFB, shared that, as a system built on cloud-based microservices, CDIT can tap on tools such as Amazon Web Services’ Data Migration Service (DMS), which might not be easily available on traditional on-premise systems. This enables close to real-time data replication between microservices which as there is no need to coordinate file transfer scheduling and lower dependency risk compared to API calls. He added: “This provides the project teams with a wider suite of ready options in designing systems, allowing for more suitable methods and greater effectiveness.”

Looking ahead, the CDIT’s user-configurability will be extended to other microservices to provide more seamless end-to-end solutioning. For instance, business users can have the flexibility to configure the sequence of payment services along PayNow-NRIC, GIRO, and GovCash, enabling greater flexibility in scheme implementation.

## What are the main benefits that the public will enjoy?

With the new system, government schemes can be implemented faster, ensuring uniform and consistent service to Singaporeans in a timely fashion. The team estimates that the time taken for scheme deployment will be reduced by almost three months compared to the past. 

One major reason for the accelerated scheme setup is the CDIT’s user-configurable means testing engine, the first of its kind within the Singapore government. This empowers non-IT users to self-configure schemes and their criteria and parameters on an intuitive user interface with minimal effort, as code isn’t involved. 

This is supported by a comprehensive data repository with up-to-date data from Whole-of-Government Single Source of Truth (SSOTs) and Trusted Centres (TC) to facilitate faster turnaround. The CDIT also automates case handling for straightforward appeals and, more importantly, re-runs of scheme means-testing and pre-empting appeals even before they come in.

Additionally, the reusability of the CDIT brings different schemes into a single platform, harmonising scheme implementation. This means that for every appeal that comes in, the system automatically looks across different schemes, reassesses eligibility, computes delta amounts, and pays the eligible citizen in one go. For citizens, this ensures a uniform service experience that is streamlined with minimal gaps. For example, when there is a change in one’s housing type, automatic reassessment will be applied across all applicable schemes via the CDIT once the updated data is captured in the common data repository. 

The team is also working on speeding up the notification infrastructure so that people can receive scheme updates quickly from trusted digital channels, an important consideration with the prevalence of scams and information circulation from dubious sources. 

## Main challenges and key lessons

One of the biggest challenges in developing the CDIT was that it was a new system with no comparables to take cues from. The project team had to be the first movers in many areas and navigate uncharted territories. 

CPFB scrum master Steven Ooi said the initial stages were difficult as it was hard to measure if the project was going well. He shared: “Transformation is not an easy journey. It always starts from within, and results may not be noticeable at the onset. However, when it strikes you one day that things are progressing well and the team is growing stronger, it is indeed validating and rewarding.”

Another big challenge was the periodic need to reprioritise development plans to support citizens through the pandemic and challenging macroeconomic environment. As such, the project members learnt to build usable minimum viable products while keeping the end goal in mind to provide Singaporeans with progressive benefits. “Think big, start small, and act fast,” as the team summarised aptly. The team explored innovative solutions to work around recurrent issues along the development process, such as Python scripts to consolidate daily reports, reconcile records, and generate test accounts automatically.

The ongoing CDIT project requires close and strong collaboration between the two government agencies. GovTech software engineer Chia Wei Kang noted that both agencies collaborated well together to overcome obstacles. “The camaraderie between the colleagues from both CPFB and GovTech made this learning journey fun and memorable. The journey has only just begun, and I look forward to creating and building on new digital projects,” he said.

## A system that stands the test of time

The demand for government social transfers will continue to evolve with changing circumstances. With the CDIT in place and more plans to future-proof the system, the unspoken need for the infrastructure to support such schemes will remain robust and handle changes without major overhauls. 

Such work, while little known to the public, ultimately supports outcomes that are very visible and impactful to most Singaporeans. 

GovTech UX designer Wu Ting Ting shared that her most memorable moment from working on this project was the successful payment of the GST Voucher in August 2022. 

“When my family and friends happily informed me that they received the grant in their bank account, it reassured me that the work done with my scrum team is meaningful and impactful. This also helps to motivate me to continue improving the user experience for our business users so that our platform can benefit more fellow Singaporeans.”


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

