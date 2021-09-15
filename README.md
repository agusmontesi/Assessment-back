# Assessment-back

   Steps to run the back code:
    
    npm run dev to start the server! Enjoy de backend

Back-end:

You will be using this service https://rapidapi.com/api-sports/api/covid-193. It’s a free and accessible COVID-19 API that provides data about the progress of the coronavirus around the world. Through a login with Github, Facebook, or Google, they grant you an API key that you can use to make free use of their API with no stated restrictions. They expose three endpoints but we’re going to focus on statistics.

 

You will use this endpoint https://covid-193.p.rapidapi.com/statistics to get all current statistics for all countries and populate your database. We want you to build your own API, so the usage of RapidAPI is to provide you with an initial data source. You should provide an endpoint called /sync, this endpoint will perform the initial data fetching and will process the insertions in your database. You will also enable an endpoint to insert more data in your database, but every time you call the /sync endpoint, data should be overwritten by the response provided by RapidAPI.

 

Your API should expose endpoints to get statistics of all countries and allow searches by country. The API should be secured by an auth middleware that will check if the user logged in successfully.

 

The sign-up endpoint should include a hash mechanism to prevent plain passwords from being saved in the database —feel free to use your favorite one— (bcrypt, argon). To login to a user, the password hash must be verified before issuing a JWT token. While long-living JWT tokens is a bad practice, due to time constraints you will be allowed to use long-lived tokens for authorization.

 

Required endpoints:

    /statistics (protected) GET

    /statistics/{country-id} (protected) GET, POST

    /sync (protected) GET

    /auth/login (public) POST

    /auth/signup (public) POST

 

Requirements:

 

    Use ES6 or Typescript syntax

    The solution should have CORS enabled.

    The source code must be a GitHub repository publicly available containing backend code only.

    The repository should include a README file with all documentation necessary to run the project locally.
    
    
 
