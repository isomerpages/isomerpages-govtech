---
layout: post
title: "Build Your Own Personal Voice Assistant Part 1"
permalink: "/media/technews/build-your-own-personal-voice-assistant-part1"
category: technews
image: "/images/technews/personal-voice-assistance-head.jpg"
---

![personal voice assistant](/images/technews/personal-voice-assistance-head.jpg)


In the last few years, personal voice assistants like the Amazon Alexa and Google Home have become commonplace in our humble home. Many would say that the personal voice assistant is the first essential when it comes to a smart home. In this tutorial, by Yap Zi Qi, we teach you how to make your own with a Raspberry Pi and Google Assistant! 
---



> Hardware and software you need and where to find them:
 
 ![parts to build a personal voice assistant](/images/technews/personal-voice-assistant1.jpg)
 
 
 
 
 <table class="table-h">
  <tr>
    <!-- <th>TRANS Lab</th> -->
    <th>Hardware/Software</th>
    <th>What does it do?</th>
    <th>Where can I buy it?</th>
  </tr>
  <tr>
	  <td colspan="3"><b>FOR VOICE CONTROL SETUP</b></td>
  </tr>	
  <tr>
    <!-- <td colspan="3">TRANS Lab: A*STAR</td> -->
    <td>Raspberry Pi 3</td>
    <td>A microprocessor where Google Assistant can run</td>
    <td>Element14.com</td>
  </tr>
  <tr>
    <td>Power Adapter for Raspberry Pi</td>
    <td>To power up the Pi</td>
    <td>Element14.com</td>
  </tr>
  <tr>
    <td>USB Microphone</td>
    <td>For invoice input</td>
    <td>SgBotic.com</td>
  </tr>
  <tr>
    <td>3.5mm Headphone Jack Speaker</td>
    <td>For audio output</td>
    <td>SgBotic.com</td>
  </tr>
  <tr>
    <td>Micro SD Card</td>
    <td>Memory where the Pi can run its OS</td>
    <td>Any tech store</td>
  </tr>
  <tr>
    <td>Web browser logged into a Google account</td>
    <td>To download the required software developer kit from Google and link the smart WiFi plug</td>
    <td>[nil]</td>
  </tr>
  <tr>
	  <td colspan="3"> <b>FOR LIGHT CONTROL CIRCUIT</b></td>
  </tr>	
  <tr>
    <!-- <td rowspan="5">NTU</td> -->
    <td>Lightbulb With Power Plug</td>
    <td>A home appliance that can be controlled by the smart WiFi plug</td>
    <td>Any hardware store</td>
  </tr> 
   <tr>
    <td>Sonoff WiFi UK Plug (We use Sonoff in this tutorial but feel free to use any brand of WiFi plug)</td>
    <td>The plug that links with the Google account for controlling the lights</td>
    <td>Tech stores or online</td>
  </tr> 
  <tr>
    <td>2.4Ghz WiFi</td>
    <td>Required to link the WiFi plug</td>
    <td>[nil]</td>
  </tr>
</table>
 
*Retailers are provided for reference only. GovTech TechNews is not affiliated with any of the retailers listed in this tutorial.*

#### **What you need** 

1. Computer with Windows/Mac OS to flash the Raspbian OS onto the SD card

2. SD card slot/reader

3. USB mouse & keyboard

4. HDMI-compatible Monitor & HDMI cable


**Step 1: Flash the SD card**

1. Download the [Raspbian Image](https://www.raspberrypi.org/downloads/raspbian/).Raspbian is the OS for the Raspberry Pi.

2. Download and install [Etcher](https://etcher.io/). Etcher cross-platform tool for flashing images to SD cards & USB drives.

3. Insert micro SD card to your computer

4. Open Etcher and select the downloaded Raspbian Image (either .img or .zip file)

5. Select the micro SD card.

6. Click 'Flash!' to begin writing Raspbian to the micro SD card


**Step 2: Boot Raspbian for the first time**

1. Login with the following credentials

    ```
    User: pi
    Password: raspberry 
    ```

    (You can change the password by running Terminal and typing sudo raspi-config and selecting the Change Password option)

    > Testing the microphone and speaker

2. Plug in the microphone and speaker
3. Open Terminal and run the following commands

    ```
    arecord -l
    aplay -l
    ```

    `arecord -l` displays the list of input hardware devices

    `aplay -l` displays the list of output hardware devices

4. Note down the card and device number of the microphone and speaker 

    ![a screenshot of a bus route](/images/technews/personal-voice-assistant2.jpg)

    In the above screenshot, the recording device is USB PnP Sound Device and the playback is bcm2835 ALSA. So, the card no. and device no. for recording device is 1 and 0 respectively, and for playback it is 0 and 0.

5. Create a new file by typing the following command in Terminal

    ```
    sudo nano .asoundrc
    ```

6. Copy the following code into the file, and adjust the card and device number according to what card and device numbers you have recorded down in step 3.

    ```
	pcm.!default {
	    type asym
	    capture.pcm "mic"
	    playback.pcm "speaker"
	}
	pcm.mic {
	    type plug
	    slave {
		pcm "hw:1,0"	# "hw:card,device (for recording)"
	    }
	}
	pcm.speaker {
	    type plug
	    slave {
		pcm "hw:0,0"	# "hw:card,device (for playback)"
	    }
    ```

    ![a screenshot of a bus route](/images/technews/personal-voice-assistant3.jpg)

7. To test the audio setup, run the following code in Terminal

    ```
    arecord --duration=5 test.wav
    ```
	
    The raspberry pi will record audio through the microphone for 5 seconds.
    Then, run:

    ```
    aplay test.wav
    ```

    to listen to the audio recorded.

    ![a screenshot of a bus route](/images/technews/personal-voice-assistant4.jpg)

    And there you have it, your microphone and speaker are working and all that’s left is to set up the Google Assistant and link up the WiFi plug and lightbulb. 

    Be sure to look out for part 2 coming next week where you learn to light up your room with a simple voice command!
