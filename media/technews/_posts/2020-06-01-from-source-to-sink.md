---
layout: post
title: "From source to sink: how data science helps Singapore manage its water resources"
permalink: "/media/technews/from-source-to-sink"
category: technews
image: "/images/technews/pub-technews-part1.jpg"
---
![From source to sink: how data science helps Singapore manage its water resources](/images/technews/pub-technews-part1.jpg)

GovTech and national water agency PUB joined forces to create a model that helps Singapore effectively manage its precious water resources.
---

Everyday, Singapore uses about 430 million gallons of water—an amount equivalent to 782 Olympic-sized swimming pools. In a few decades, demand is expected to nearly double. Fresh water is undeniably a necessity, and yet, it’s one resource that Singapore also naturally lacks. Adding fuel to the fire is the looming threat of prolonged dry spells caused by climate change. 

Responsible for ensuring Singapore’s water supply in the face of these challenges is PUB, Singapore’s National Water Agency. On a daily basis, operators at PUB need to determine how to smartly allocate water resources to satisfy demand islandwide, a task easier said than done. 

To help operators make these decisions, a team composed of PUB engineers and GovTech data scientists built a model that optimally allocates water resources based on operational constraints. Since the model’s implementation, planning time has been reduced from two hours to as low as fifteen minutes. Here’s how GovTech and PUB made every drop count—using data science techniques.

### **Tapping Singapore’s water resources**

Singapore obtains its water from four sources dubbed the “Four National Taps;” namely water from local catchments or reservoirs, imported water, high-grade reclaimed used water called NEWater and desalinated water from the oceans. As climate change warms the world and dries our water bodies, weather-independent sources like the last two are expected to contribute to more of Singapore’s water supply. 

It should be noted, though, that not all taps are created equal; some are more expensive than others. Sources like NEWater and desalinated water, for instance, require extensive processing methods that come at a price. Hence, PUB operators will need to determine on a daily basis how to allocate water from these four sources to satisfy water demand islandwide.

To solve this problem, the team used a common optimisation technique known as linear programming for their model. In linear programming, complex relationships are depicted as linear functions, similar to lines on a graph. This greatly simplified many parameters that were coded into the model, including the different water sources and pipes connecting them. 

All these factors, along with other operational constraints—like the capacity of treatment plants and storage tanks,  as well as size of the water pipes—were taken into account by the team when coding the model.  The model then finds the optimised solution for the given objective given the operational constraints. 

Therefore, in a hypothetical scenario of cost minimisation, where a PUB operator has to make a decision between drawing water from a raw water treatment plant or a desalination plant, the model will choose the former. “[Between] the raw water treatment plant and the desalination plant,” explained Mr Tan Kai Wei, an associate computational scientist at GovTech’s Data Science Artificial Intelligence Division (DSAID). “It will make sense to draw from the cheaper alternative, which is from the raw water treatment plant.”

### **Satisfying and satisficing water demand**

While the example above gives a glimpse of how the model can work under limited conditions, real life is far more tricky. Demand for water can vary day to day, as can the amount of rainfall. “Last year, July and August were very dry,” recalled Dr. Loke Gar Goei, a quantitative analyst also at GovTech’s DSAID . “The amount of rainfall we had last year in this period was only 1.2% of what would fall in this period historically.” 

To ensure the flexibility of their model even in such unexpected situations, the team turned to a technique called satisficing. Instead of choosing the most optimal solution, the model goes for a more conservative option that merely satisfies, or ‘satisfices,’ any operational requirements. 

According to the team, their model is the first in the world to attempt the usage of satisficing in managing water resources. In aiming to satisfice instead of optimise, the impact of uncertainty on the model’s decision making capabilities is softened. 

![From source to sink: how data science helps Singapore manage its water resources](/images/technews/pub-technews-part2.jpg)
*The team of data scientists at GovTech’s Data Science Artificial Intelligence Division (DSAID), from left to right: Dr Loke Gar Goei, Chin Chii Yeh and Tan Kai Wei.*

### **Putting the model through the test**

Upon completion, the model was trialled on data from last year’s dry spell to establish its effectiveness. The results were encouraging but, given the novelty of the satisficing approach and the quality of  available forecast data, the team eventually decided to go for a compromise scenario-based approach where the model is used to optimise for different scenarios instead. 

With this approach, the team was still able to automate a large part of the planning process and increase the optimality of derived solutions. Furthermore, the team also developed several innovative programming solutions to ensure easier adoption by operators. All these served to reduce the time required for detailed operations planning and improved operational outcomes. 

Beyond reducing the time needed to make decisions, the team is quick to highlight the wider relevance of their unique water management model. “One of the main reasons we wanted to do this is because in a public policy setting, we cannot afford large errors,” shared Dr Loke. “Water is a public good. Because of this, we have to be prudent in the way we go about making decisions.” 

For a more in-depth look at how the team created their model, check out this [three-part Medium blog post](https://medium.com/dsaid-govtech/using-robust-optimization-and-mixed-integer-programming-to-manage-singapores-water-resources-a0b899afe601) written by GovTech’s Mr Tan Kai Wei. 

![From source to sink: how data science helps Singapore manage its water resources](/images/technews/pub-technews-part3.jpg)
*The team of PUB Engineers, from left to right: Hariharan s/o Ramasamy (Engineer, Joint Operations Department), Daniel John Tan (Engineer, Joint Operations Department), and Ashley Ng (Senior Planner, Policy and Planning Department).*
