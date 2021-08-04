window.addEventListener('load',()=>{

    let long;
    let lat;
    let tempDes= document.querySelector(".temp_description");
    let tempDeg= document.querySelector(".temp_degree");                            
    let loctimezone= document.querySelector(".location_timezone");
    let iconc= document.querySelector(".iconz");
    
    //Function to capatalise first letter of string
    String.prototype.capitalize = function() 
    {
        return this.charAt(0).toUpperCase() + this.slice(1);
    }


    //function to select icon according to data provided by API
    function image_selection()
                {
                    if(iconc=="01d" || iconc=="01n")
                    {
                        document.getElementById("find").src="Icons/1 clear sky.png";
                    }
                    else if(iconc=="02d" || iconc=="02n")
                    {
                        document.getElementById("find").src="Icons/2 few clouds.png";
                    }
                    else if(iconc=="03d" || iconc=="03n")
                    {
                        document.getElementById("find").src="Icons/3 scattered clouds.png";
                    }
                    else if(iconc=="04d" || iconc=="04n")
                    {
                        document.getElementById("find").src="Icons/4 broken clouds.png";
                    }
                    else if(iconc=="09d" || iconc=="09n")
                    {
                        document.getElementById("find").src="Icons/5 shower rain.png";
                    }
                    else if(iconc=="10d" || iconc=="10n")
                    {
                        document.getElementById("find").src="Icons/6 rain.png";
                    }
                    else if(iconc=="11d" || iconc=="11n")
                    {
                        document.getElementById("find").src="Icons/7 thunderstrom.png";
                    }
                    else if(iconc=="13d" || iconc=="13n")
                    {
                        document.getElementById("find").src="Icons/8 snow.png";
                    }
                    else if(iconc=="50d" || iconc=="50n")
                    {
                        document.getElementById("find").src="Icons/9 mist.png";
                    }
                }


    if(navigator.geolocation)
        {
             navigator.geolocation.getCurrentPosition(position=>
            {
                
                long=position.coords.longitude;
                lat=position.coords.latitude;
         
                apiid= 'ae15b986151d83a23db1cf0da3a256e2';
                const api =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiid}`;
                fetch(api)
                .then(response =>{
                return response.json();
            })
        
            .then(data =>
            {
                //Extracting data from API
                console.log(data);
                const{temp} =data.main;
                const {description}=data.weather[0];                                     
                var {icon}=data.weather[0];

                //Assigning the selected data to variable

                //Converting kelvin into celcius and converting it into int using parseInt() function
                tempDeg.textContent=parseInt(temp-273);
                //Capatilising the first letter of description using capatalise function declared above
                tempDes.textContent=description.capitalize();
                loctimezone.textContent=data.name;
                iconc=icon;
                
                // Calling image_sellection() function to provide correct icon according to weather 
                image_selection();
            });
        });

    }
});


