---
layout: post
title: "How GovTech simulates four million bus rides a day"
permalink: "/media/technews/How-GovTech-simulates-four-million-bus-rides-a-day"
category: technews
image: "/images/technews/how-govtech-simulates-four million-bus-rides-day-part1.png"
---

![how govtech simulates four million bus rides a day](/images/technews/how-govtech-simulates-four-million-bus-rides-day-part1.jpg)

TL;DR: Planning bus routes is no easy task; the Land Transport Authority of Singapore must consider the ripple effects of any changes to the transport network. With Reroute, a simulator developed by the Government Technology Agency of Singapore, Land Transport Authority can now test out different scenarios to maximise the convenience of bus services. 
---
 
Imagine this scenario: a new housing development board estate is built in your neighbourhood and it sharply increases the volume of commuters on the feeder bus service. What used to be a comfortable ride now turns into a harrowing experience of jostling to board and alight from the bus. 

You think, “Why can’t the Land Transport Authority (LTA) divert an existing bus service to cater to the increase demand?” It’s a valid question, but one that’s easier asked than answered.

As with most economic decisions, there are trade-offs when planning new bus services or making changes to existing bus routes. LTA need to properly analyse not only the number of people affected by route changes and bus timings, but also take into consideration knock-on effects on other bus routes. With over four million public rides on more than 300 bus routes daily, calling bus planning a complex process would be an understatement.

To enhance the efficiency of bus planning, a Government Technology Agency of Singapore (GovTech) Data Science and Artificial Intelligence (DSAI) team worked with the LTA to develop Reroute, an application that simulates the impact that bus route changes or withdrawals have on commuters. 

![a screenshot of a bus route](/images/technews/how-govtech-simulates-four-million-bus-rides-a-day-part2.png)

Here’s a behind-the-scenes look at how they built it.

Phase 1: Data sources and model choice

Before being able to build a robust simulator, one must have data. Fortunately for the GovTech DSAI team, LTA logs copious amounts of real-world farecard data, which captures commuter behaviours. In the same way, you would have to know a person well enough to understand how he or she may react to an unexpected turn of events, the farecard data would serve as a baseline for analysing potential bus route changes.

The next step involves choosing a model for analysing data. In this case, the GovTech DSAI team decided on what is known as a directed graph model, wherein data is organised as nodes and edges.

Applied to the context of bus services, a node represents a state in a commuter’s journey—a bus stop, or fare gate, for instance. Edges indicate a transition between states, which could mean that the commuter is walking, boarding, travelling or alighting. Since bus routes have a fixed starting and ending point, the edges were deemed directional. Using this model, the team generated a network of approximately 33,000 nodes and some 84,000 edges. Edge weights, or travel times, were estimated based on peak period farecard data and the on-ground experience of bus planners. 

Phase 2: Enabling speedy simulations

With the thousands of nodes and edges, Reroute first creates a transport graph representing the current state of bus routes and commuter journeys. Bus planners can then make a change to one or more specific parameters of a graph and simulate the ripple effects on the system. 

However, the GovTech DSAI team found that its initial model did not take into consideration the fact that commuters can combine different routes to get to their destination. The team therefore used a mathematical technique that efficiently estimates the number of combinations required for accurate simulation of route choices for the same origin-destination pair, which allows commuter options to be ranked based on travelling time.

Now that the modified model accounted for greater complexity in the commuter journey, another problem surfaced—the simulations took too long to complete; more than eight hours, in fact. 

Recognising that this would not be practical for bus planners, the team decided to implement what is known as a deviation path algorithm that allows caching of intermediate results to speed up calculations by 100 times without requiring additional hardware for processing power. Now, each simulation takes 20 minutes to one hour to complete.

Phase 3: Leveraging the power of the cloud and agile methodology

Rather than having to ‘rack and stack’ and integrate computing hardware before deploying Reroute, the GovTech DSAI team relied on managed services on the cloud, such as AWS S3 for storage, AWS Lambda for serving application programming interfaces (APIs) and Databricks for serverless computation. This minimised setup time and configuration while allowing the simulator to be scaled up on a pay-per-use model.

Since simulations are likely to be run on an ad-hoc basis with varying computational intensity, such a pricing method means that costs of running Reroute would be kept low. According to the team, operational costs for Reroute are as low as S$200 per month.

Like most agile development workflows, there is never a finished product, and the GovTech DSAI team comprising data scientists and software engineers continues to build, test and implement code for Reroute. User testing with bus planners is also carried out in parallel with development cycles, which means faster iterations and a solution that fits users’ needs.

