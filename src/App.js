import React, { Component} from 'react';
import './App.css'
import Form from './components/Form'
import Weather from './components/Weather'


// const API_KEY = 'e36ed36440282e43250b6c4c0274d44'; 
const API_KEY = 'd5853eb96d9485dd3b3935b468fc965c'; 

// URL
// https://api.openweathermap.org/data/2.5/weather?q=cairo%2Cegypt&appid=e36ed364400282e43250b6c4c0274d44
class App extends Component{

  state = {
    tempreature:'',
    city:'',
    country:'',
    humidity:'',
    discription:'',
    icon:'',
    main:'',
    error:'',
  }
  
  getWeather = async (e) =>{
    e.preventDefault()
    const city = e.target.elements.city.value
    const country = e.target.elements.country.value
    // console.log('Weather');
    // console.log(city, country);

    // API
    const api = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}%2C${country}&appid=${API_KEY}`)
    // const api = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&callback=test&appid=${API_KEY}`)
    // const api = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}%2C${country}&appid=${API_KEY}`)
    const data = await api.json();
    console.log(data);

    if (city && country) {
        this.setState({
          tempreature:data.main.temp,
          city:data.name,
          country:data.sys.country,
          humidity:data.main.humidity,
          discription:data.weather[0].description,
          icon:data.weather[0].icon,
          main:data.weather[0].main,
          error:''
        })
      } else {
        this.setState({
          tempreature:'',
          city:'',
          country:'',
          humidity:'',
          discription:'',
          icon:'',
          main:'',
          error:'Please Enter Data'
        })
      }
  }
  render(){

  return(

    <div className='wrapper'> 

      <div className='form-container'>
      <Form getWeather={this.getWeather}/>
      <Weather
                tempreature={this.state.tempreature}
                city={this.state.city}
                country={this.state.country}
                humidity={this.state.humidity}
                discription={this.state.discription}
                icon={this.state.icon}
                main={this.state.main}
                error={this.state.error}
      />
    </div>
    </div>
    )
  }
}

export default App;
