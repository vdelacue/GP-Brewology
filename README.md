#Brewology

Brewology offers beer you would like based on a personality test and also works as a brewery locator.

#Built with

The website uses the Giphy and Yelp APIS for a gif and brewery locator respectivley.
Bootstrap, Materialize and Font-Awesome are used to layout the website as well as add buttons.

#Features

The personality quiz chooses a beer you might like based on your personality.
Yelp API is used to find nearby brewery's.

#Screenshots
https://github.com/vdelacue/GP-Brewology/blob/master/README.md/assets/images/Screenshot (10).png

#Code

   #landing
   
Background image is set

A row is created to hold the Brewology logo in the center of the page

Two columns with nothing that take up two columns each they are surrounding the column with the links to the personality test and a link to look for nearby brewerys. The links are both in one column class and takes up eight columns. This keeps the link centered.

When the buttons "Location" and "Personality" are pressed they go to the same page. Personality brings you to the top of that page while location brings you to the bottom so the application so that the user screen displays the app they clicked on hthe top.   
 
   #index
   
Materialize, bootstrap, and fontawesone are linked.

Jumbotron creates the Brewology logo at the top.

Background image is set to the body.

The first row is created and holds the image at the top as well as uses bootstrap to keep it the full length of the that row's grid.

The next row with the personality test in it is made of one column using bootstrap to keep the text of the quiz centered.

The containers at the bottom beneath the text display yelp results.

   #personality
   
Questions for the quiz are created and listed as promps. Each prompt is made to measure a certain trait and each of the prompt_values (answer options) are given a weight of 1,2,3,4, or 5.

createPromptItems appends each question in a <p> tag placed in the ul with the quiz id.

   #personalty-response
   
Calculates extraversion trait by adding the first and sixth prompts.
Calculates agreeableness by adding the second and seventh prompt.
Calculates conscientiousness by addig the third and eigth prompts.
calculates neuroticism by adding the fourth and ninth prompts.
Calcualtes the openess by adding the fifth and tenth promps.
Each trait's final weight can be scored from a possible 2 to 10.
The highest trait is used to make the recommendation. Each trait is linked to a beer.




   #Api
   
Yelp for loop stops at 12 results. Yelp usually gives 20 but, it was set to twelve because it wouldn't matter if there were brewerys too far away.
Jquery call for yelp articles to apend the card that will chose so that is could appear in the html.
response
On click function is created for the zipcode search and is stored at user input. User input holds the zipcode.


#Credits

Emily Betz, Olivia Kalinowski, Will Stark, Vanessa de La Cuetara, Anthony Sambogna
 
