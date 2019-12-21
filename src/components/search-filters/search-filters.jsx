import React from 'react';

import './search-filters.css';

const SearchFilters = (props) => {
  return (
    <section className="searchFilterSection">
      <h5>One Way</h5>
      <hr />
      <select
        name="origin"
        onChange={(e) => props.handleValueChange(e, 'origin')}
        defaultValue="Enter Origin city"
        required
      >
        <option disabled value="Enter Origin city">Enter Origin city</option>
        <option value="Pune">Pune</option>
        <option value="Delhi">Delhi</option>
        <option value="Bangalore">Bangalore</option>
        <option value="Chennai">Chennai</option>
        <option value="Hyderabad">Hyderabad</option>
        <option value="Mumbai">Mumbai</option>
        <option value="Kolkata">Kolkata</option>
        <option value="Ahmedabad">Ahmedabad</option>
        <option value="Chandigarh">Chandigarh</option>
      </select>
      <select
        name="destination"
        onChange={(e) => props.handleValueChange(e, 'destination')}
        defaultValue="Enter Destination city"
        required
      >
        <option disabled value="Enter Destination city">Enter Destination city</option>
        <option value="Pune">Pune</option>
        <option value="Delhi">Delhi</option>
        <option value="Bangalore">Bangalore</option>
        <option value="Chennai">Chennai</option>
        <option value="Hyderabad">Hyderabad</option>
        <option value="Mumbai">Mumbai</option>
        <option value="Kolkata">Kolkata</option>
        <option value="Ahmedabad">Ahmedabad</option>
        <option value="Chandigarh">Chandigarh</option>
      </select>
      <input
        type="number"
        name="passengers"
        min="1"
        placeholder="No. of passengers"
        onChange={(e) => props.handleValueChange(e, 'passengers')}
        required
      />
      <button
        disabled={!props.isSearchButtonEnabled}
        onClick={props.searchFlights}
        class="btn btn-dark"
      >
        Search
      </button>
      <div className="warning-message">
        *Please fill all details before proceeding!
      </div>
    </section>
  );
}

export default SearchFilters;