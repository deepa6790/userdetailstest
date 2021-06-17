# Frontend Challenge

A small, mobile responsive application for updating a user's name and address



## The task

This project contains a partially created page with a form which allows a user to update their name and address. Your task is to finish what has been started.

The design of the page is in the root of the project -> app-design.jpg

### Things to do:

1. In the HomeComponent, use the UserDataService to load the data for the page. Call getCurrentUser() to get the user's ID and use the ID to then call getUserData() to get the remaining user data.

2. Once the data is loaded, apply it to the form so that the form inputs reflect the correct values.

3. Use the app-spinner component to show the user when the form data is being loaded. Hide the form when the spinner is visible

4. Use SCSS to style the form to match the design.

5. The user must be able to modify the address using the form.

6. Add a submit button to the form. When clicked:
  
    1. A read-only version of the form's data should be displayed at the top of the page, as per the design.
    
    2. Show the user's initials inside the circle shown at the top of the page. Example: Rodney Trotter === RT 

7. Write 1 unit test to ensure the read-only address is formatted correctly

### Rules:

1. Please do not use any third party libraries which are not already included in this project

2. You can modify the existing project in any way EXCEPT for the UserDataService. You can add to the UserDataService but not modify the functions: getCurrentUser() or getUserData() 
