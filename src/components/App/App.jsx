import React from 'react';
import Header from '../Header';
import FlightCard from '../FlightCard'
import data from './data/flights.json'

var legs = [];

function findmyindex(arraytosearch, key, valuetosearch) {
  for (var i = 0; i < arraytosearch.length; i++) {
  if (arraytosearch[i][key] == valuetosearch) {
  return i;}
  }
  return null;
}

function minutestohours(minutes){
  var hours = Math.floor(minutes / 60);
  return hours
}

function evaluateStops(stops){
  if(stops == 0){
    return "Direct"
  }
  if(stops == 1){
    return stops + " stop"
  } 
  if(stops > 0){
    return stops + " stops"
  }
}

function minutestominutesleft(minutes){
  var minutesLeft = minutes % 60;
  return ('0' + minutesLeft).slice(-2) // adds a zero if its less than 2 digits
}


function App(){

  return(

  <div className="bg-gray-500 h-screen" style={{backgroundColor: "#efeef1"}}>
    <Header />
    <main className="flex flex-wrap overflow-auto" id="cardContainer">

      {data.itineraries.map((itinerary) =>
      
      
            <FlightCard 
            
            price={itinerary.price}     
            website={itinerary.agent} 
            airlineOne={"https://logos.skyscnr.com/images/airlines/favicon/" +
              data.legs[findmyindex(data.legs, "id", itinerary.legs[0])].airline_id + ".png"
            }
            airlineTwo={"https://logos.skyscnr.com/images/airlines/favicon/" +
              data.legs[findmyindex(data.legs, "id", itinerary.legs[1])].airline_id + ".png"          
            }    
            legOneAirportOne ={data.legs[findmyindex(data.legs, "id", itinerary.legs[0])].departure_airport}
            legOneAirportTwo ={data.legs[findmyindex(data.legs, "id", itinerary.legs[0])].arrival_airport}
            legTwoAirportOne ={data.legs[findmyindex(data.legs, "id", itinerary.legs[1])].departure_airport}
            legTwoAirportTwo ={data.legs[findmyindex(data.legs, "id", itinerary.legs[1])].arrival_airport}

            legOneTimeOne = {(data.legs[findmyindex(data.legs, "id", itinerary.legs[0])].departure_time).split("T").pop()}
            legOneTimeTwo = {(data.legs[findmyindex(data.legs, "id", itinerary.legs[0])].arrival_time).split("T").pop()}
            legTwoTimeOne = {(data.legs[findmyindex(data.legs, "id", itinerary.legs[1])].departure_time).split("T").pop()}
            legTwoTimeTwo = {(data.legs[findmyindex(data.legs, "id", itinerary.legs[1])].arrival_time).split("T").pop()}

            legOneDuration = {     
              minutestohours(data.legs[findmyindex(data.legs, "id", itinerary.legs[0])].duration_mins) + "h " +
              minutestominutesleft(data.legs[findmyindex(data.legs, "id", itinerary.legs[0])].duration_mins)       
            }

            legTwoDuration = {     
              minutestohours(data.legs[findmyindex(data.legs, "id", itinerary.legs[1])].duration_mins) + "h " +
              minutestominutesleft(data.legs[findmyindex(data.legs, "id", itinerary.legs[1])].duration_mins)       
            }

            legOneStops ={evaluateStops(data.legs[findmyindex(data.legs, "id", itinerary.legs[0])].stops)}
            legTwoStops ={evaluateStops(data.legs[findmyindex(data.legs, "id", itinerary.legs[1])].stops)}
                         
            />
      )}



    </main>
  </div>

  )
};

export default App;
