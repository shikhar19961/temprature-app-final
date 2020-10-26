//controller is responsible for programming login as well as model and a view
const axios=require("axios");
const API_KEY="8cef9a0bb22386d3b576c2730ebe3b58";

const Weather=require('../model/Weather');

exports.renderHomePage=(request,response)=>{
    response.render("index",{weather:`Please enter the name of city.`});
};
exports.getWeather=(req,res)=>{
    const city=req.body.city;
    const url=`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    console.log(city);
    const weather=new Weather(city);
    weather.validateUserInput();
    if(weather.errors.length)
    {
        res.render("index",{weather:weather.errors.toString()})
    }
    else{
        axios.get(url).then((response)=>{
            const {temp : temprature } = response.data.main
            const {name : location } = response.data
            
            res.render("index",{
                weather:`It is currenty ${temprature} C in ${location}` 
            });
        }).catch((error)=>{
           console.log(error);
        });
    
    }
    
};
exports.renderAboutPage=(request,response)=>{
    response.render("about");
};