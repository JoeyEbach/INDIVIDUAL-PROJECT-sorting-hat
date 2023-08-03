Project Name: "Harry Potter's Sorting Hats"
Project Overview: Harry Potter's Sorting Hats is a game where users can put on the sorting hat (enter their name in the form) and be randomly assigned a house, or a school of learning. The site displays two sides: the Houses and Voldemort's Army. Users have the ability to expel themselves, or other users, which permanently moves their card from the Houses to Voldemort's Army.  
Wireframe: https://www.figma.com/file/l3X75HKPYiEah4gJVQeItG/Harry-Potter's-Sorting-Hat?type=design&t=GOSYNfzGNDW4lFEY-6
Data Flowchart: https://github.com/JoeyEbach/INDIVIDUAL-PROJECT-sorting-hat/assets/137849948/28457954-6480-4e4a-a443-34eeb02f85ae
Deployed Site: https://ebach-sorting-hats.netlify.app/
Project Board: https://github.com/users/JoeyEbach/projects/1
User Description | Problem Solved: As a developer, it is important to know how to access and manipulate data in order to present it to the site user in an organized fashion. In this repo, I have code samples that show how I have worked with data arrays and objects in order to provide the best site user experience. 
Features: 
   [1] Dynamically rendered cards displaying user information and category (house)
   [2] Card filtering buttons based on the user's category (house)
   [3] Form modal that appears upon click and offers the ability to dynamically add new user cards
   [4] Expel buttons that permanently remove a user card from their house category and moves them to the army category 
Project Screenshots: 
   [1] https://github.com/JoeyEbach/INDIVIDUAL-PROJECT-sorting-hat/assets/137849948/f1cd7631-7951-4fca-be79-4f3662afcda7
   [2] https://github.com/JoeyEbach/INDIVIDUAL-PROJECT-sorting-hat/assets/137849948/f9fa12b9-bb4d-4758-9a7e-4ee2bd31ded7
   [3] https://github.com/JoeyEbach/INDIVIDUAL-PROJECT-sorting-hat/assets/137849948/67a91e96-5a47-4257-bc8e-ae187d765cf5
Contributors: Joey Ebach [https://github.com/JoeyEbach]
Loom Video Walkthrough: 














_____________________________________________________________________________________________________________________________________________________________
# Sorting Hat

## Goals
The goal of this project is to test your knowledge and to have a FUN time stretching yourself on your FIRST independent application that will become a part of your portfolio.

Focus on MVP. Do not spend a ton of time styling initially. Hit functionality first and then spend time on the styling of the project using bootstrap.

- READ THROUGH ALL OF THE INFORMATION BELOW before planning how you will tackle the project.
- Check the Issue Tickets to organize your process. You will have all week in class to work on this in class. 
- PLEASE submit questions in help tickets if you need help. We will guide you to the resources that are available to you.
- When done, tell an instructor. Everyone will present how far they got AND their favorite piece of code that they wrote to an instructor.
- MOST OF ALL HAVE FUN!!!!!

## Instructions
You are in charge of bringing the Hogwarts sorting hat to life! 

This is what the finished app should have:
- To start off with, you will use a [bootstrap card](https://getbootstrap.com/docs/5.0/components/card/#header-and-footer) to have your sorting hat introduce itself and start the sorting process (by clicking on a button). The form should not be on the DOM until the button click happens.

- A [bootstrap form](https://getbootstrap.com/docs/5.0/forms/overview/) will then appear to fill in the student's name and a button to sort. This should then assign the student to a random house (Gryffindor, Hufflepuff, Ravenclaw, or Slytherin). 

- On sorting a student, the form should clear and a [bootstrap card](https://getbootstrap.com/docs/5.0/components/card/) with the student's name and a random house assignment should print below the form. 

- You should also be able to expel a student after they have been sorted, which should remove their card from the student array and move them to Moldy Voldy's Army.

In the end, your app will look something like: 

![screencapture-drt-sorting-netlify-app-2022-04-23-14_28_47](https://user-images.githubusercontent.com/29741570/164943525-d20275be-c312-42d1-9730-0c1fd3fd9834.png)


<!-- [See Demo](https://drt-sortinghat.netlify.app/)
 -->
## Technical Requirements
- You MUST plan your project and highly suggest using issue tickets. There are a few that have been provided for you to use already. Continue to add to these so you know what work you need to complete. 
- You MAY use the `renderToDom()` function that we worked on in class, but you also need to be able to explain it if you use it
- You have to create a data structure for your project. Review all the elements that need to be on the DOM and create the structure accordingly
- You must use [Boostrap](https://getbootstrap.com/) to style your page components
- You must use a loop other than a `for loop`
- Your JS file should be comprised of functions, no actions should happen in your code outside of a function except for your initial `startApp()` function
- Your code MUST be YOUR code. Do not copy and paste code into your project. Type every bit of it out
- Your HTML and JS should all have proper indentation
- Helpful Form: An error message shows if a user tries to sort a student without filling out the form
- Voldermort's Army: Create a separate container of cards that hold the cards for students that have been expelled. These should be styled differently from Hogwarts students.
- Add filter buttons to filter the non-expelled students by house

## DEFINITION OF DONE
Once you have completed all the technical requirments, you should complete the following:
- [README Requirements](https://github.com/orgs/nss-evening-web-development/discussions/13)
- **RECOMMENDED** Loom Video: [Sign up for Loom](https://www.loom.com/signup) and record a video of you walking through your app 

## Expel Button Hints
Think of a way you can expel students without just hiding those divs on the page. This would mean when the button is clicked you modify the array of students and pass the new array into your `renderToDom()` function.  Double hint - put a unique id in the student object when you create them.

## Optional Bonus
- House Colors: The color of the student's card changes depending on which house they were sorted.
- Card Sorting/Ordering: Sort the student cards by some criteria (i.e. alphabetically by name, by house)

