import React from 'react';

import './flight-box.css';

const FlightList = (props) => {
  return (
    props.flightList.map((flight) => {
      return (<div className="col-xs-12 flight-list" key={flight.flight_id}>
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-8">
            <h4>{flight.fare}</h4>
            <label>{flight.flight_id}</label>
            <div>
              {flight.source_code + '  >  ' + flight.destination_code}</div>
            <div>Depart: {flight.departs_at}</div>
            <div>Arrive: {flight.arrives_at}</div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4">
            <img
              alt="book flights"
              src="https://vegiagoc.com/Upload/images/ve-may-bay-dieu-tu-va-nhung-dieu-can-biet-1.png"
            />
            <button
              onClick={(event) => props.bookFlight(flight, event)}>
              Book this flight
            </button>
          </div>
        </div>
      </div>)
    })
  );
}

FlightList.defaultProps = {
  flightList: [],
}

export default FlightList;