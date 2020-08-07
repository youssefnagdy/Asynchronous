/**
 * Created by YoussefNagdy on 7/31/2020.
 */


/*
   What is Ajax ?
   Stands For
   Asynchronous JavaScript And XML

   and basically its allows us to
   asynchronously communicate
   with remote Servers

   so let's say we have all javascript
   app running in the browser
   which is called the client
   and we want the app to get some data
   from our server
   but ofCourse we didn't want to reload the
   entire page will with ajax we can a simple
   get http request to our server which
   then send back a response
   containing the data that we requested
   and this all happens asynchronously
   in the background just away we learn before
   it's not working for getting data from
   server but also to send data to the server
   by doing a post request rather than a get
   request now in practice there're many
   ways in which we can do ajax in javascript
   and we gonna look at the fetch web api
   that allow us to make ajax calls
   in very easy way


   APIs?
    Stands for
    Application Programming Interface
    and a very high level it's basically
    a piece of software that can be used
    by another piece of software
    in order to basically allow applications
    to talk to each other
    and that's not just valid for web dev
    in javascript but for programming in
    general
    but in reference to web Development
    in ajax and servers , the api is
    not the server itself but it is like
    a part of the server
    like an application that receives request
    and sends back responses

  So let's Distinguesh between two types apis
  that you  can use in javascript
  which are
  1- Your own api , for data coming from
  your own server

  2 - 3rd-party Apis;
     . googleMaps
     . Embed youtube Videos
     . weather data
     . Movies data
     . send email or sms
     . Thousands of Possibilites

 so let's imagine for seconds you
 building a travelling app
 and you have a database with different
 distination and tours that you offering
 so on your server you could build your
 own api that can recive requests from
 your front-end app in javascript
 and send back to results
 so that will be your own api
 hosted on your own server
 but now you also need some current weather
 information for each distination
 which you don't have in database
 and so you can use a 3rd-party Apis
 to get that weather data



 */