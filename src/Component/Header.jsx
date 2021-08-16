import React from "react";

export default function Header(props) {
  return (
    <div className="header">
      <div className="container">
        <div className="search-box">
          <input
            type="text"
            className="search-input"
            placeholder="Search.."
            onChange={(evt) => {
              props.onSearch(evt.target.value);
            }}
          />

          <button className="search-button">
            <i className="fas fa-search"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
