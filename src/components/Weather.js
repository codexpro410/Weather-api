import React from "react";

const Weather =(props) =>{

        return(
            <div className="info"> 

                {/* we need to check if there is the value show it, else none so we use && */}
                {
                    props.tempreature &&
                    <p className="info_key">tempreature: 
                        <span className="info_value">{props.tempreature}</span>
                    </p>
                }
                {
                    props.city &&
                    <p className="info_key">city: 
                       <span className="info_value">{props.city}</span>
                       </p>
                }
                {
                    props.country &&
                    <p className="info_key">country: 
                       <span className="info_value">{props.country}</span>
                       </p>
                }
                {
                    props.humidity &&
                    <p className="info_key">humidity: 
                       <span className="info_value">{props.humidity}</span>
                       </p>
                }
                {
                    props.discription &&
                    <p className="info_key">discription: 
                       <span className="info_value">{props.discription}</span>
                       </p>
                }
                {
                    props.icon &&
                    <p className="info_key">icon:
                       <span className="info_value"> {props.icon}</span>
                       </p>
                }
                {
                    props.main &&
                    <p className="info_key">main:
                       <span className="info_value"> {props.main}</span>
                       </p>
                }
                {
                    props.error &&
                    <p className="info_key">error:
                       <span className="info_value"> {props.error}</span>
                       </p>
                }

            </div>
        )
    }

export default Weather
