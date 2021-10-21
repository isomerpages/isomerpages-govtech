---
layout: post
title: "Using AI to differentiate different types of mosquito larvae"
permalink: "/media/technews/using-ai-to-differentiate-mosquito-larvae"
category: technews
image: "images/technews/Using AI for Mosquito Larvae Differentiation.png"
---

Did you know there are more than 180 species of mosquitoes in Singapore? That’s more than the United States, which has [176 mosquito species](https://www.mosquito.org/page/funfacts).

The most common types in Singapore are the *Aedes* (which spread dengue and chikungunya), *Culex* (which spread filariasis), and *Anopheles* (which spread malaria). The National Environment Agency (NEA) does active monitoring of mosquito populations and correctly identifying different species is an integral part of enabling targeted measures to eradicate mosquitoes. 

To aid NEA in its fight against mosquitoes, GovTech teamed up with the agency to explore the feasibility of using Artificial Intelligence (AI) based video analytics to identify mosquito larva species. And the first step was to understand how the job is being done by humans now. 

---

## **How is mosquito species identification done today?**

Currently, trained analysts examine taxonomical characteristics of mosquito larvae through a microscope. A mosquito larva observed through a microscope would look like this:

![Anatomy of mosquito larvae](/images/technews/ai_larva_Fig1.png)*Anatomy of mosquito larvae. (Source: [OECD Publication](https://www.oecd-ilibrary.org/environment/safety-assessment-of-transgenic-organisms-in-the-environment-volume-8_9789264302235-en))*

A mosquito larva typically has an ovoid head, thorax, and abdomen of nine segments. Analysts look for subtle differences to identify different species. For example, the *Ae. aegypti* (left) has pitchfork scales while the *Ae. albopictus* (right) has thorn-like scales.

![Mosquito larva pitchfork vs thorn-like scales](/images/technews/ai_larva_Fig2.png)*Source: Florida Medical Entomology Laboratory* 

As you can see, analysing mosquito larvae remains a challenging task due to the high resemblance of various species, especially those within the same groups. The distinctions among different species are difficult to identify even for human experts with the naked eye, as subtle distinctions can only be observed through microscopic scrutiny. Methods of larvae image analysis mostly rely on manual work, which can be labour intensive and prone to human error.

## **How did GovTech approach the problem?**

When we saw several studies indicating that different mosquito species may exhibit different movement patterns, the team explored the use of video analytics to classify larvae. We focused on the four most common species in Singapore:

*	*Aedes aegypti*, 
*	*Aedes albopictus*, 
*	*Culex quinquefasciatus*, and 
*	*Anopheles sinensis*

## **Getting the dataset of videos**

NEA used a consumer-grade mobile phone to capture about 6,800 high quality videos of between 5 and 50 seconds. The videos were filmed in a controlled environment so that the lighting, angle and focus were consistent, providing a “cleaner” dataset. 

About 92 per cent of the videos came from lab-reared samples. As they are grown in a controlled environment, the larvae had fewer variations within a species in terms of size, colour, body texture, and movement patterns. The field-collected samples, which were harder to obtain, had more diverse features, as seen below. 

![Lab-reared larvae vs. Field-collected larvae](/images/technews/ai_larva_Fig3.png)*Comparison of lab-reared and field-collected larvae. (Source: National Environment Agency)*

Next, we took still images from the videos at fixed intervals and then used an automated process to detect the area of interest where the larva is, crop the images to a consistent size, and rotate the images so that the head was on top. 

![Pre-processing steps](/images/technews/ai_larva_Fig4.png)*Pre-processing steps. (Source: GovTech and National Environment Agency)*

These steps produced a sequence of images that can be analysed for differences in the motion of different species. 

![Examples of pre-processed inputs](/images/technews/ai_larva_Fig5.png)*Examples of pre-processed inputs. (Source: National Environment Agency)*

These images are then split into the two sets, the training and test set. The training set is fed into the AI model – a neural network called CNN-LTSM that is good at handling sequences of video frames. The model learns from the training set to recognise different movement patterns in the video frames. After it has been trained, the model is then shown the previously-unseen test set and is tasked to predict which species the video frames come from. 

## **How did the AI model perform?**

When we first started the project, only lab-reared sample videos were available. Using this limited dataset, we were able to achieve more than 99 per cent in weighted F1 score, which judges how accurate the model is! The model could not only correctly classify species from different groups (*Aedes* vs. *Culex* vs. *Anopheles*), but it also managed to differentiate seemingly lookalike species (*Ae. aegypti* vs. *Ae. albopictus*) from the same group. This was not surprising as the lab samples were consistent in appearance within the same group. 

However, when the lab-sample trained model was tested on the field-collected samples, the F1 score dropped to about 89 per cent. Clearly, the different appearance of field-collected larvae was giving the model difficulties. For example, the appearance of lab (left) and field (right) *Ae. aegypti* looked very different.

![Colour and pattern differences in lab-reared and field-collected samples](/images/technews/ai_larva_Fig6.png)*Colour and pattern differences in lab-reared (left) and field-collected (right) samples. (Source: National Environment Agency)*

We had known of this problem and tried to adjust for it by adding random colour differences to our lab-collected images. However, this solution was clearly not enough to mitigate the problem. 

Subsequently, we introduced more field samples to train the model and after a few iterations, we were able to build up our F1 score to almost 100 per cent!

## **What lies ahead**

The result of the project has demonstrated the viability of using AI to classify the four most common species of mosquito larvae in Singapore. 

However, there are a few caveats to note. The end-to-end process, including image processing and model training, is computationally expensive. Also, while the model can recognise the four species effectively, we don’t know how well it can handle new species that it has not seen. It will likely have to be retrained for every new mosquito larva we introduce. 

Nonetheless, this project has set the stage for developing complex AI models to handle challenging object classification problems and we are excited about enhancing it further to apply to other cases! 


### **Like what you read? Subscribe for the latest tech stories in your inbox.**

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

