---
layout: post
title: "Safe Distance @ Parks: how AI replaced eye power for crowd counting"
permalink: "/media/technews/safe-distance-at-nparks"
category: technews
image: "/images/technews/nparksimage4.png.jpg"
---

---
Singapore is well known for having ample green spaces amid the urban landscape that stem from our commitment to building a network of parks over the years.  

Beset by the many challenges that cropped up during the circuit breaker period last year, Singaporeans flocked to the parks to find respite in nature. As a result, popular parks like East Coast Park became congested with many visitors. 

The Government quickly rolled out the Safe Distance @ Parks website and app which could display near real-time crowd sizes for parks across Singapore, so that people could avoid those with high footfall. Developed in 3.5 days and subsequently enhanced with automated updates, Safe Distance @ Parks is a great example of the Government’s commitment to use tech in an agile manner to make people’s lives better. 

Mr Abhishek Tandon, who is from GovTech’s Services division and is currently seconded to NParks, led the combined NParks and GovTech team which developed Safe Distance @ Parks. We spoke to him to learn more about what it took to make the project a reality. 

![Abishek who worked on the Safe Distance @ Parks](/images/technews/nparksimage4.png.jpg)

*Abhishek Tandon led the team which developed Safe Distance @ Parks. Photo:GovTech*
 
# Qns: Let’s start with an overview of Safe Distance @ Parks. What problem was it meant to tackle and how did it do so? 

As you observed, the pandemic led to a spike in visitors to our parks and with the Covid-19 situation still ongoing, NParks is still seeing heightened public interest in Singapore’s green spaces. 

As a result, NParks’ staff who patrol gardens, parks, nature reserves and park connectors as part of their daily work, have also been working to enforce safe distancing measures in our green spaces. This manpower-intensive effort has involved staff and volunteers from other public agencies to patrol more than 500 green spaces. 
 
So NParks wanted to leverage technology to support its safe distancing operations, developing the Safe Distance @ Parks app (Diagram 1) to allow members of the public to look for a park near them and check visitor levels before leaving their homes. The app receives near real-time updates on crowd sizes.

![Safe Distance @ Nparks](/images/technews/nparksimage1.png)
*Diagram 1 Photo:GovTech* 



We used these prepared examples to train a case-details recogniser which can identify the different types of key information with 85 percent accuracy. 

At this stage, we are able to automatically identify the nature of the complaint, extract the relevant details, fill up the feedback template, and prompt the user to add missing information. 


# Qns: The Safe Distance @ parks website was developed in 3.5 days, and the automated update was developed in two weeks. Prior to the automated counting enabled by computer vision, how were crowd sizes determined and updated on the site? What did the team change or improve on? 

As GovTechies, we are ABC (Agile, Bold, and Collaborative). With support from GovTech and NParks management, we got the portal up and running in 3.5 days. Initially, the crowd sizes were determined by observations from NParks officers on the ground. Basically, that meant NParks officers were manually counting and assessing! 

They would then use the Safe Distance @ Parks mobile app to update visitor levels at fixed intervals as well as to communicate any remarks or recommendations for specific locations. 
 
But we knew from the start that this manpower-intensive way of doing things might not be sustainable. So, we developed an automated update system that is scalable, able to get inputs from various sources (CCTV, Drones, EPS carpark, etc. - Diagram 3) and makes use of analytics to assess crowd sizes and update the Safe Distance @ Parks app. 

![Safe Distance @ Nparks](/images/technews/nparksimage3.png) 
*Diagram 3 Photo:GovTech*

This process was developed within 2 weeks to reduce the reliance on staff input. This was achieved by deploying CCTV cameras with live streaming capability extensively in our parks to reduce the physical deployment of staff, employing central video analytics systems and integrating with Electronic Parking Systems. Given that the COVID-19 situation is still ongoing, this has helped to free up staff time to perform essential greenery and park maintenance tasks. 


# Qns: What were the main challenges involved in this project? 

One of the challenges was establishing the networks of cameras for the automated updating. 

There were already existing cameras in place at various gardens and parks, but not enough to meet the operational needs of the automated updating system. Also, not all cameras had the ability to live-stream the feeds to a central location or share images. NParks rapidly deployed additional CCTV cameras to our parks, gardens and nature reserves, prioritising sites that were more popular with visitors and required closer monitoring.




## Qns: What was it like working across agencies and partnering with the data science team from GovTech? What processes did you use to enable rapid development and deployment of the solution? 
 
Actually, Safe Distance @ Parks is not the only project we have collaborated with GovTech on. Another example is the “Spot the Robot dog”, which was programmed to monitor social distancing.

For Safe Distance @ Parks, we started with a loose set of requirements by explaining our goal of “people counting” to the GovTech Data Science team. 

The GovTech team compared three commercial off-the-shelf people detection and counting algorithms. They also built a prototype using a native cloud service provider and quickly sorted out various technical tasks such as standardised protocol to receive images from the cameras. 

All teams worked together to gather feedback from operational staff on everything from the frequency for updating the public website, limitations, existing camera height, coverage area and so on. The team optimised algorithms as well as suggested placement of camera location.
 
In all, NParks was able to reduce manpower deployed for safe distancing measures in parks by two thirds. This allowed Singaporeans to continue to seek respite at our parks safely, reaping the benefits of greenery and nature for their health and wellbeing this period.


# Qns: How essential were cloud services to this project? 

A major part of Safe Distance @ Parks is hosted on the cloud. The various teams’ familiarity with cloud systems gave us a significant head start in rapidly deploying our CCTV analytics prototype. 

The flexibility of the cloud platforms also enabled us to scale up and down different aspects of the project as and when necessary, such as during a sudden surge in website traffic. The website received 620,000 monthly visits at its peak. 

To sum up, the end-to-end architecture is scalable, resilient, and secure.

# Qns: What other tech projects can we look forward to from NParks? 

We’re always looking to collaborate with partners from both the public and private sector, as well as institutes of higher learning. The “Spot the Robot dog” example earlier is one. We’re also working with Garuda Robotics for drone analytics and Ngee Ann Polytechnic on park surveillance robots, which are autonomous machines that can detect the flouting of safe distancing measures. 

And of course, we’re always working to enhance the capabilities of our existing systems. We hope to have exciting new updates in the future! Stay safe and healthy!


*Enjoyed this article? Well guess what, we have ALOT more articles just like this. Head [here](https://www.tech.gov.sg/media/technews/) for more stories! Also, if you always wondered why BlueTooth is called Bluetooth, follow this [link!](https://www.tech.gov.sg/media/technews/history-of-bluetooth)*

### **Subscribe for more tech stories**

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





