let city=document.getElementById('cityName');
let tempertatue=document.getElementById('temperature');
let feelsLike=document.getElementById('feelsLike');
let description=document.getElementById('description');
let icon=document.getElementById('icon');
const searchBtn=document.getElementById('search-btn');


searchBtn.addEventListener('click',async(e)=>{
    e.preventDefault();
    let city=getCity();
    if (city === "") return;
    toDom(await getWeatherData(city));
       
    
})



function getCity(){
    const city=document.getElementById('search-form').search;
    return city.value;
}




async function getWeatherData(city){
    
    let response= await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=068d23d9fa379d316035082989e6bf18`);
    try{
    if (!response.ok) throw new Error(`City ${city} not found`);
    const obj=processData(await response.json());
    console.log(obj);

    return obj;
}
    catch(err){
        alert(err);
    }

}

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
    tempertatue.textContent=`${obj.temp} °C`;
    feelsLike.textContent=`Feels like : ${obj.feelsLike} °C`;
    description.textContent=obj.description;
    icon.src=`http://openweathermap.org/img/w/${obj.icon}.png `;
}
