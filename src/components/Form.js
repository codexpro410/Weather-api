import React from "react";

// class Form extends Component{

// function, stateliss conponent
const Form =(props) =>{
        return(
            <form onSubmit={props.getWeather}>
                 <input type="text" name='city' placeholder="city..."/>
                <input type="text" name='country' placeholder="Country..."/>
                <button>Get Weather</button>
            </form>
        )
    }

export default Form
