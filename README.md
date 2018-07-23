# Welcome to Blueprint! 

## Why Markdown and YAML?

Traditionally, in order to edit a website, one had to write in pure HTML. This is challenging for website administrators who had limited experience with HTML as it is not immediately readable or intuitive to non-experienced users. 

Our team decided to go with Markdown (.md) – more human readable syntax – so as to empower non-technical website administrators.

While Markdown is appropriate for writing long segments of text, it alone does not allow users to edit small details of the website (e.g. change the hero-banner image) without diving into the HTML.

We therefore chose to supplement the Markdown syntax with YAML (.yml) – yet another human readable syntax.
 

## What can I edit?

*_application-guidelines*
Contains the Application Guidelines

*media* 
Contains the media-related files, e.g. Forms and Templates and Guides

*EDIT-THIS* 
Contains the rest of the markdown files, e.g. Privacy Statement, Terms of Use, Who We Are, Contact Us

*_data* 
Contains the YAML files to make fine tweaks to the website.

*images*
Contains the images used in the website.

## How should I go about editing my website?

The best practice is to always look for the Markdown file first. The Markdown file tells the website generator what to do. 

Sometimes, if the edits are to be made to the YAML file that is related to the Markdown file, the Markdown file will contain instructions on where this YAML file is.

For example, if I wanted to edit the Who We Are page on the website. I would go into the *EDIT-THIS/who-we-are/who-we-are.md* file. I could make changes to the paragraphs of text there. However, if I wanted to change the names of the board members, I would – as instructed by the Markdown file – have to go to the YAML file to do so (*_data/who-we-are.yml*).


## Where Should I Look If I Am Trying To Edit [Insert Page]?

For more detailed instructions, refer to the Blueprint_User_Guide.pdf in the repo.

#### Homepage
If you are looking to edit anything on the **Home page**, you are likely to find them in these files:
1. *_data/homepage.yml*

#### Application Guidelines
If you are looking to edit anything on the **Application Guidelines pages**, you are likely to find them in these folders:
1. *_application-guidelines*

#### Media (Forms & Templates, Guides)
If you are looking to edit anything on the **Media pages**, you are likely to find them in these folders:
1. *media/forms-&-templates*
2. *media/guides*

#### Who We Are
If you are looking to edit anything on the **Who We Are page**, you are likely to find them in these folders/files:
1. *EDIT-THIS/who-we-are*
2. *_data/who-we-are.yml*

#### Contact Us
If you are looking to edit anything on the **Contact Us page**, you are likely to find them in these folders/files:
1. *_data/contact-us.yml*

#### Privacy Statement
If you are looking to edit anything on the **Privacy Statement page**, you are likely to find them in these files:
1. *EDIT-THIS/privacy/privacy.md*

#### Terms of Use
If you are looking to edit anything on the **Privacy Statement page**, you are likely to find them in these folders:
1. *EDIT-THIS/terms-of-use/terms-of-use.md*
