/*
  AsyncAwait to consume a promises in easier way
  with AsyncAwait remember we didn't use then/catch
  we use await keyword

  return some data from getWeatherAw function
  async function always return a promise

  you must use then method to return the result
 const dataCairo = getWeatherAw(1521894);
 console.log(dataCairo);
 */

  async function getWeatherAw(woied) {
    try{
        const result = await
        fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woied}/`);
        const data = await result.json();
        const today = data.consolidated_weather[0];
        console.log(`Temperatures in ${data.title} 
         stay Between ${today.min_temp} and ${today.max_temp}
       `);
        const tomorrow = data.consolidated_weather[1];
        console.log(`Tempertures Tomrrow in ${data.title} Stay 
                 Between ${tomorrow.min_temp} and ${tomorrow.max_temp}  
               `);
        return data;
    }catch (error)
    {
        alert(error)
    }

}
let dataCairo;
getWeatherAw(1521894).then(data =>{
    dataCairo = data;
    console.log(dataCairo);
});
