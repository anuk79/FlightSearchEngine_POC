import React from 'react';

import Header from '../../components/header/header';
import SearchFilters from '../../components/search-filters/search-filters';
import PriceRangeSearch from '../../components/price-range-search/price-range-search';
import FlightList from '../../components/flight-box/flight-box';

import './home-page.css';

// normally we would do async call using fetch in ComponentDidMount, 
// but since we have json, so using static data here 
import data from '../../data/flightList';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.initialState = {
      maxPrice: 20000,
      filteredData: [],
      origin: '',
      destination: '',
      passengers: '',
      isBookingSuccessful: false,
    };

    this.state = this.initialState;
  }

  onPriceChange = (event) => {
    this.setState({
      maxPrice: event.target.value
    });
  }

  applyFilters = () => {
    const filteredData = data.list
      .filter(val =>
        val.source === this.state.origin && val.destination === this.state.destination);
    this.setState({ filteredData });
  }

  bookFlight = () => {
    this.setState({
      isBookingSuccessful: true,
    });
  }

  setFilterValue = (event, key) => {
    this.setState({
      [key]: event.target.value
    });
  }

  applyPriceChange = () => {
    const filteredData = data.list
      .filter(val =>
        val.source === this.state.origin && val.destination === this.state.destination &&
        parseFloat(val.fare.split(' ')[1]) <= this.state.maxPrice);
    this.setState({ filteredData });
  }

  resetBooking = () => {
    this.setState({
      ...this.initialState
    });
  }

  buildSuccessMessage = () => (
    <div className="alert alert-success" role="alert">
      <strong>Congratulation! </strong>
      {' Your flight from ' + this.state.origin + ' to ' + this.state.destination
        + ' for ' + this.state.passengers + ' persons has been booked successfully.'
      }
      <div>We wish you a very pleasant and safe journey!</div>
      <button onClick={this.resetBooking}>Book new ticket</button>
    </div>
  );

  buildNoResultsFoundMessage = () => (
    <div className="alert alert-warning" role="alert">
      <strong>No flights found for your search! </strong>
      Please refine your search and try again.
    </div>
  )

  render() {
    const { maxPrice, filteredData, isBookingSuccessful, origin, destination, passengers } = this.state;

    return (
      <section>
        <Header header="Flight Search Engine" />
        <div className="row m-0 content">
          {isBookingSuccessful ? this.buildSuccessMessage() :
            (
              <React.Fragment>
                <div className="col-xs-12 col-sm-4 col-md-3">
                  <SearchFilters
                    searchFlights={this.applyFilters}
                    handleValueChange={this.setFilterValue}
                    isSearchButtonEnabled={
                      origin && destination && passengers
                    }
                  />
                  <PriceRangeSearch
                    min={0}
                    max={20000}
                    value={maxPrice}
                    onPriceChange={this.onPriceChange}
                    applyPriceChange={this.applyPriceChange}
                  />
                </div>
                <div className="col-xs-12 col-sm-8 col-md-9 right-content">
                  {
                    filteredData.length ? (
                      <React.Fragment>
                        <h3 className="subheader">
                          {origin + ' to ' + destination}
                        </h3>
                        <FlightList
                          flightList={filteredData}
                          bookFlight={this.bookFlight}
                        />
                      </React.Fragment>
                    ) : this.buildNoResultsFoundMessage()
                  }
                </div>
              </React.Fragment>
            )
          }
        </div>
      </section>
    );
  }
}

export default HomePage;