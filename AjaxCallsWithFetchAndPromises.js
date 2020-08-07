
/*
      Request Some Weather Data From Real Weather Api
      in order to use this i am gonna use a modern web api
      called fetch

      With fetch we can do ajax in a very  simple way
      we can Asynchronous network request cross the internet.
      to fetch data from other servers or even from own server

      we used to do this in javascript using the rather complex
      xmlHttpRequest interface

      we're going to use fetch cuz it's more Modern


  1- fetch() --> function
  take argument the url where the api is located
  we use an api called Meta Weather
  normally api's Request a key in order to use it
  but this one is simple one it doesn't require an api key

  this api has 3 Method
  1 - For Locations
  putting the name of the city and then comes back with Result
  which contains fields in api docs ( title,location,latt_long)
  woeid --> where or earth id


  2- Location
  we will use this method to get weather data from a certain
  where or earth id woeid

  /api/location/{woeid}/ --> this api endPoint

  we will copy the location of Cairo for Example its 15211894
  with the end point url and paste it in fetch function
  as a string but we will get an error !!!

  This Error Because someThing Called same Origin Policy
  javascript which basically prevent us for making ajax
  request to a domain different than own domain
  so right now we don't have any domain in the domain that
  we requesting resource from metaWeather api and so because
  of same origin policy we can not then access this resource
  in order to make Developers to make requests to different
  domains we use something called Cross Origin Resource sharing
  OR CoRs but this doesn't work with metaWeather

  So what Developers usually Do is to Proxy Or to Channel
  the Request throw there own Server like Doing the Ajax Request
  Or on Own Server with the same Origin Policy Doesn't
  Exist and then send data to the Browser
  we don't have our own server so you gonna use a proxy
  called cross origin .me ---> it's probably Down

  all you have to do is prefix your url with
 https://cors-anywhere.herokuapp.com/


  the fetch gets our data and Return a Promise
  we can use then and catch on this promise

  so fetch return a promise you only need to
  consume it here


 we got a result the rally matter for us
 is body
 to get the data from the body we use json method on result
 and json method also return promise
 and we have to handle the result

 */
function getWeather(woeid) {
    fetch
    (`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}/`)
        .then(result => {
        console.log(result);
    return result.json();
})
.then(data =>{
        // console.log(data);
        const today = data.consolidated_weather[0];
    console.log(`Temperatures in ${data.title} 
         stay Between ${today.min_temp} and ${today.max_temp}
       `)
})
.catch(error => console.log(error));
}

getWeather(1521894);
