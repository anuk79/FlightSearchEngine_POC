import React from 'react';

import './price-range-search.css';

const PriceRangeSearch = (props) => {
  return (
    <section className="priceRange">
      <div>Refine search results</div>

      <div className="slidecontainer">
        <div>
          <label>0</label>
          <label>20,000</label>
        </div>
        <input
          type="range"
          min={props.min}
          max={props.max}
          value={props.value}
          onChange={props.onPriceChange}
          className="slider"
          id="myRange"
        />
      </div>
      <button
        class="btn btn-dark"
        onClick={props.applyPriceChange}
      >
        Apply {props.value}
      </button>
    </section>
  );
}

export default PriceRangeSearch;