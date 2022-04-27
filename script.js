
async function getWeatherData(){
    
    let response= await fetch("http://api.openweathermap.org/data/2.5/weather?q=cairo&APPID=068d23d9fa379d316035082989e6bf18");
    let obj=await response.json();

    console.log(obj.main.feels_like);
    console.log(obj);
    // if(obj.cod==404)
    //     throw Error('city not found');

    return obj;
}
// getWeatherData().catch((obj)=>{
//     if (obj.cod==404)
//     console.error("invalid parameter");
// })

getWeatherData().then(respone=>{
   console.log(processData(respone));
})

function processData(obj){
    let processedObj={
         cityName :obj.name,
         feelsLike:obj.main.feels_like,
         temp:obj.main.temp,
         description:obj.weather[0].description,
         icon:obj.weather[0].icon

    }
    return processedObj;
    
}
// console.log(processData(getWeatherData()))