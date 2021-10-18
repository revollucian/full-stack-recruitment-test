
import React from 'react';


function FlightCard(props){

    var color;

    if (props.legOneStops == "Direct"){
        color = "#1ab0a3";
    }
    else{
        color = "#d55066";
    }

    return(
   <div id="card" className="w-full h-56 bg-white mx-4 mt-3 shadow-lg rounded-md">

       <div id="cardBody" className="px-4">

           <div id="leg1" className="flex justify-between mt-3">

                    <div className="flex">
                        <div><img
                                className="w-8 h-8"
                                alt="Airline"
                                src={props.airlineOne}
                            /></div>

                        <div className="ml-2">
                            <span className="text-md">{props.legOneTimeOne}</span>
                            <span className="block text-gray-600 text-lg">{props.legOneAirportOne}</span>
                        </div>

                        <div className="w-4 h-4 mt-4 text-gray-400 ml-5">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor"><path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"/></svg>                        
                        </div>

                        <div className="ml-5">
                            <span className="text-md">{props.legOneTimeTwo}</span>
                            <span className="block text-gray-600 text-lg">{props.legOneAirportTwo}</span>
                        </div>

                    </div>

                    <div className="text-right">
                            <span className="text-gray-500 text-sm">{props.legOneDuration}</span>
                            <span className="block text-sm" style={{color: color}}>{props.legOneStops}</span>
                    </div>

           </div>



           <div id="leg2" className="flex justify-between w-full mt-3">
           <div className="flex">
                        <div><img
                                className="w-8 h-8 "
                                alt="Airline"
                                src={props.airlineTwo}
                            /></div>

                        <div className="ml-2">
                            <span className="text-md">{props.legTwoTimeOne}</span>
                            <span className="block text-gray-600 text-lg">{props.legTwoAirportOne}</span>
                        </div>

                        <div className="w-4 h-4 mt-4 text-gray-400 ml-5">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor"><path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"/></svg>                        
                        </div>

                        <div className="ml-5">
                            <span className="text-md">{props.legTwoTimeTwo}</span>
                            <span className="block text-gray-600 text-lg">{props.legTwoAirportTwo}</span>
                        </div>

                    </div>

                    <div className="text-right">
                            <span className="text-gray-500 text-sm">{props.legTwoDuration}</span>
                            <span className="block text-sm" style={{color: color}}>{props.legTwoStops}</span>
                    </div>
           </div>



           <div id="bottomControls" className="flex justify-between  w-full mt-5">

           <div><span className="text-3xl font-semibold">{props.price}</span><span className="block text-gray-400">{props.website}</span></div>
           <div><button className="text-white text-xl px-7 py-1 font-semibold rounded-md mt-6" style={{backgroundColor: "#00a698"}}>Select</button></div>

            </div>



       </div>


       
   </div>

    )
 
};

export default FlightCard;