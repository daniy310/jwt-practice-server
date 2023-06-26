# 🤖  JWT Practice Server

This project demonstrates the server-side of a PERN full stack application.

It includes :
 - a RESTful API for handling the http requests :
   - querying the postgres db for creating accounts and logging in
   - encrypting the password before storing it in the db for every new user
   - validating the incoming password with the encrypted one stored in the database
   - generating a JWT on each auth action
 - middleware scripts :
   - authorization for accessing the dashboard so only logged users can do it
   - validInfo.js for validating the auth data (both register and login)
     
 

Client repo : https://github.com/daniy310/jwt-practice-client
