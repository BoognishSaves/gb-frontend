# codesRus - John Paul Haddad - SEI-Project 4 - Garden Buddy


## Product Description

### Perpetual Harvest Farming is a method of commercial production that establishes a constant flow of plants ready to harvested. This is achieved by having farms divided in to each cycle of plant growth. Though this process has become a staple in modern farming, it is not without its flaws. In a Controled Environment setting, this can create areas of vulnerability to pests, disease, and transmission between locations. Integrated Pest Management (IPM) is an ecosytem based strategy that focuses on long-term prevention of pests through a combination of techniques such as close monitoring, data collection, biological control, habitat manipulation, and swift response. The goal being a reduction of the use of pesticides and the ability for the pest to develop immunity. Garden Buddy provides an inspection tool that aids in data collection and catalogues the responses to an issue. Increasing the awareness and response time to problems while reducing the labor needed to manage large indoor commercial farms. 


## Scope
I am planning to build a full stack MERN application called "Garden Buddy". This application will provide the user the ability to perform inspections of commercial farms based on the Integrated Pest Managment (IPP) guidlines. Using a form, the user will detail what part of the farm they are inspecting(via dropdown menu) and upload the requested photo of the plant (using Multer). The form will be saved to a Mongo database so that it may be referenced should a deficiency, pest, or problem arise. 
MVP:
1) Single Photo Upload
2) Meta/Form Data with Photo
3) Each Record Is a Photo w/ Location as a Catagory
4) Form = Farm ID, Plant Name, Date, Location, Picture (URL to start)

## User Story
As a User, I want to be. able to perform a structured inspection of large farming operations. The form would be simple to ensure the inspection could be performed with little to no familiarity of agriculture. I would be guided by icons or text to a certain part of the farm and what photos are required. The forms would be stored in a database so that the manager can review and implement a diagnostic and plan of action if needed.


## Wireframes

![Dashboard](https://user-images.githubusercontent.com/100719674/194616127-5865324a-d957-42de-bce6-3dfb0ad7fbea.png)
The user will be greeted by Icons allowing them to navigate the site by the different areas.

![Farm Location Page](https://user-images.githubusercontent.com/100719674/194616797-3bf9253a-9c1f-431d-be2b-6b78be305ece.png)
By clicking on one of the areas, you are directed to the detail page. The page will display each inspection by day of the week.

![Inspection Detail Page](https://user-images.githubusercontent.com/100719674/194617037-f7317f2a-831b-4afa-8129-8bcd73993061.png)
When the user clicks an inspection, the detail page is brought up. This is where they can view the specifics of the inspection to make an assessment.

![Inspection Form](https://user-images.githubusercontent.com/100719674/194617861-df2c9229-1a65-44be-9921-0349769a7d5e.png)
The inspection form itself is minimalistic in design. It utilized example photos to guide the user into collecting the right data.

## Entity Relation Diagram

![ERD](https://user-images.githubusercontent.com/100719674/194626913-8e2c5f17-52f4-4252-9119-234c79e24804.png)



## Application Photos:

![Home Page](https://user-images.githubusercontent.com/100719674/196046902-9d72b0a9-0078-45a0-afa8-6279692da93f.png)
The Home Page is simple in design. Displaying an index of all areas of the farm

![Inspections Overview](https://user-images.githubusercontent.com/100719674/196046940-edd99367-79f3-43c8-8882-9be4021e96cd.png)
The inspection overview gives a quick glance at the days inspections

![Inspection Detail](https://user-images.githubusercontent.com/100719674/196046956-7487235e-cb76-48dd-b684-3d9b6546bf6f.png)
The detail page shows the inspection specifics and allows editing of the collected info

![Inspection Comments](https://user-images.githubusercontent.com/100719674/196047007-e8cc228d-f2a3-489e-90d8-a65efbedcc31.png)
The ability to comment on each inspection allows the manage to request additional info or provide a response to an issue. The employee is able to provide additional feedback.


## Technologies Use:
### Express RESTful routing was used in tandem with MongoDB and Heroku to allows our client to store information and developers to establish routes.
### REACT was used to establish pages, info and links. REACT components were used for the navbar and header to allow for modular use.
### Cloudinary to upload photos
### Knowledge of HTML, CSS, and JavaScript were key to implementing the aforementined technology.


## Challenging Code:


<img width="585" alt="Screen Shot 2022-10-16 at 10 36 07 AM" src="https://user-images.githubusercontent.com/100719674/196047196-b0ffef61-f6d3-4a74-9565-c5174732daee.png">
The use of nested schemas to provide comments was challenging. How to access an manipulate this info took a lot of time and effort.


## API:
### https://cloudinary.com/
### Cloudinary was implemented to give our client the ability to upload photos from their tablet, computer, or mobile device and attach it directly the form.



## Link:
https://thunderous-concha-f30f02.netlify.app/


## Stretch Goals:
### User Authorization: Using user auth to establish roles and access.
### Organizing the home page by area of the farm. 



## Shout-outs:
## This application was a team effort. I would like to thank the following developers for their selflessness and contributions. I couldn't have done it without you! 

## Taylor Phillips
## https://www.linkedin.com/in/taylorjphillips90/

## Mackenzie Lamour
## https://www.linkedin.com/in/mackenzie-lamour/

## Ian McBee
https://www.linkedin.com/in/ian-mcbee/

## Corey Neal 
## https://www.linkedin.com/in/corey-m-neal/

## Sean Buchas
## https://www.linkedin.com/in/seanbuchas/

## David Robles 
## https://www.linkedin.com/in/david-robles-dr/

## Victoria Vela
## https://www.linkedin.com/in/victoria-vela1/

## Juan Venegas
## https://www.linkedin.com/in/juan-venegas-600254163/

## Tim "The Wizard" Rathert
## https://www.linkedin.com/in/tim-rathert/

## Ben Baker
## https://www.linkedin.com/in/ben-baker-software/

## Eric "Plead the Fith" Fithian
## https://www.linkedin.com/in/eric-fithian/

## Joshua Smith
## https://www.linkedin.com/in/jws-maker/

## To the rest of the General Assembly cohort, I have found friendship and inspiration in each one of you. I am eternally grateful!!  






