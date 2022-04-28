let city=document.getElementById('cityName');
let tempertatue=document.getElementById('temperature');
let feelsLike=document.getElementById('feelsLike');
let description=document.getElementById('description');
let icon=document.getElementById('icon');



async function getWeatherData(){
    
    let response= await fetch("http://api.openweathermap.org/data/2.5/weather?q=cairo&APPID=068d23d9fa379d316035082989e6bf18");
    let obj=await response.json();

    // console.log(obj.main.feels_like);
    //  console.log(obj);
    // if(obj.cod==404)
    //     throw Error('city not found');

    return obj;
}
// getWeatherData().catch((obj)=>{
//     if (obj.cod==404)
//     console.error("invalid parameter");
// })

getWeatherData().then(respone=>{
 let obj= processData(respone);
 toDom(obj);
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

function toDom(obj){

    city.textContent=obj.cityName;
    tempertatue.textContent=obj.temp;
    feelsLike.textContent=`Feels like : ${obj.feelsLike}`;
    description.textContent=obj.description;
    icon.src=`http://openweathermap.org/img/w/${obj.icon}.png`;
}
