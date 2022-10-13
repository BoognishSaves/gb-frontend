# Scope 

I am planning to build a full stack MERN application called "Garden Buddy". This application will provide the user the ability to perform inspections of commercial farms based on the Integrated Pest Managment (IPP) guidlines. Using a form, the user will detail what part of the farm they are inspecting(via dropdown menu) and upload the requested photo of the plant (using Multer). The form will be saved to a Mongo database so that it may be referenced should a deficiency, pest, or problem arise. 
MVP:
1) Single Photo Upload
2) Meta/Form Data with Photo
3) Each Record Is a Photo w/ Location as a Catagory
4) Form = Farm ID, Plant Name, Date, Location, Picture (URL to start)

# User Story
As a User, I want to be. able to perform a structured inspection of large farming operations. The form would be simple to ensure the inspection could be performed with little to no familiarity of agriculture. I would be guided by icons or text to a certain part of the farm and what photos are required. The forms would be stored in a database so that the manager can review and implement a diagnostic and plan of action if needed.


# Wireframes

![Dashboard](https://user-images.githubusercontent.com/100719674/194616127-5865324a-d957-42de-bce6-3dfb0ad7fbea.png)
The user will be greeted by Icons allowing them to navigate the site by the different areas.

![Farm Location Page](https://user-images.githubusercontent.com/100719674/194616797-3bf9253a-9c1f-431d-be2b-6b78be305ece.png)
By clicking on one of the areas, you are directed to the detail page. The page will display each inspection by day of the week.

![Inspection Detail Page](https://user-images.githubusercontent.com/100719674/194617037-f7317f2a-831b-4afa-8129-8bcd73993061.png)
When the user clicks an inspection, the detail page is brought up. This is where they can view the specifics of the inspection to make an assessment.

![Inspection Form](https://user-images.githubusercontent.com/100719674/194617861-df2c9229-1a65-44be-9921-0349769a7d5e.png)
The inspection form itself is minimalistic in design. It utilized example photos to guide the user into collecting the right data.

# Entity Relation Diagram

![ERD](https://user-images.githubusercontent.com/100719674/194626913-8e2c5f17-52f4-4252-9119-234c79e24804.png)
