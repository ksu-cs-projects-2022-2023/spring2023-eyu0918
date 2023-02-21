# Eric Yu CIS598 Senior Project
## Smith Scholarship House Website
### Advisor: Dr. Lior Shamir

### Overview
The Maitland E. Smith Scholarship House is the place I have been living at for the past 3 and half years of my college career. Currently, the house does have a website (www.smithscholarshiphouse.org), however, it is quite simple and only has a few pages that contain images and paragraphs. In my opinion, there are some great improvements that can be made, both appearance wise and functionality wise. 

Overall, improving the quality of our website can help greatly with recruiting, as people who are interested 
in becoming a member can utilize the site to learn more about the culture of the house. Additionally, this 
can also be a great platform for individuals to stay connected with current house members or alumnus. 
Finally, the alumni board will possibly have the ability to donate to the house through this site, which is 
an implementation they have asked for in the past that saves them the trouble from donating by traveling 
to the house or writing a physical check.

### Problem/Solution
Like I briefly mentioned above, I believe the single biggest concern when it comes to the existing website 
revolves around recruiting. Currently, our recruiting strategy is sending out a physical pamphlet in the 
mail to all the qualifying high school seniors around the country. However, the pamphlet, if it isn’t lost or 
misplaced, can only cover so much information. Being in the digital world that we live in today, a well-organized website provides better and more detailed information for the candidates who wants to learn 
more about the house. 

Another problem that I see with the current website is the “Current Member” page. Specifically, this 
page only contains a copy of our most-recent composite picture. I believe that there are some big 
improvements that can be made within this page to make it more beneficial for not just incoming 
members, but also current members as well. My current thought is besides the composite picture, I will 
list out each member individually with their information attached, such as major, year in the house, 
hobbies & interests, etc.. For the ones that have a LinkedIn profile, that will be included as well for 
people to connect with them. Finally, there will be filtering options at the top that allows you to filter 
this member list. I will go into more details in the section below.

### Algorithmic Functionality
The majority of my algorithmic functionality will happen in the backend within the members’ page. After 
listing out each member individually, I will have a filtering bar at the top that contains several filtering 
options. This can be especially beneficial for incoming members, as they will have ability to look for 
members with similar hobbies & interests so that they can quickly make friends and adapt to the 
culture.

To achieve the above functionalities, it will require me to write a few queries. Since I am planning on 
using Cypher, a graph database language, to support all my data, I will have to write and import queries 
written in Cypher into my frontend to make this filtering bar fully functional.

### Qualifications
I feel qualified for this project because I have had previous experience in web developing, specifically 
working with React on the frontend and Cypher in the backend.

During my most-recent internship this past summer, I worked with a pre-existing internal website that 
was built with React and Cypher. While it was an interesting learning experience, I also saw how 
powerful these tools can be when combined and thus developed strong interest throughout this 
process. I believe that this project is a great opportunity to not only refresh my mind on what I have 
learned, but also discover new knowledges along the way.

### Feature Lists
#### Minimum Viable Product (MVP)
  ▪ A functional website that contains a home page, navigation bar, footer, and 3-4 additional pages.
  ▪ Each page has a title and a minimal of one paragraph of text and one image.
  ▪ All current members displayed on the members page with its data generated from the backend.
  ▪ Website follows a certain CSS style so that it looks cleaner and more organized.

#### Version 1.0
  ▪ Allow users to have the ability of scheduling a visit AND applying directly on the site.
  ▪ Create filtering ability for members page to establish deeper connections between individuals.
  ▪ Add the ability to pay rent/donate.
 
#### Version 2.0
  ▪ Allow current house members to log in and access internal documents.
  ▪ Create a chatting service to better the communication between the house and the alumni board.
  ▪ Make the webpage more interactive.
