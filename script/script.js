    let wd;
  
    


    function render(response){
      var currentLocation = response.name;
      var currentWeather = response.weather[0].description;
      //var iconCode = data.weather[0].weathericon;
      //var iconUrl = "https://openweathermap.org/img/wn/" + iconCode + ".png";
      var currentTemp = response.main.temp;
      var high = response.main.temp_max;
      var low = response.main.temp_min;
      var humidity = response.main.humidity;
      var wind = response.main.winddir;
      var currentdate = response.datetime;
   
      
      $("#local").html(currentLocation);
      //$(".weathericon").html(iconUrl);
      $(".temp-value").html(currentTemp + "°");
      $("#high").html("High: " + high + "°");
      $("#low").html("Low: " + low + "°");
      $("#humidity").html("Humidity: " + humidity + "%");
      $(".temp-description").html(currentWeather);
      $("#wind").html("Windspeed: " + wind);
      $(".localdate").html(currentdate);
    }
    
    

    $(function(){
      var loc;
      $.getJSON('https://ipinfo.io', function(ipAddress){
       console.log(ipAddress)
       loc = ipAddress.loc.split(",");
       console.log(loc);
        $.getJSON(
          'https://fcc-weather-api.glitch.me/api/current?units=imperial&lat=' + loc[0] + '&lon=' + loc[1],function (response){
            wd = response;
            console.log(response)
            render(response);
        })
      });
    })
