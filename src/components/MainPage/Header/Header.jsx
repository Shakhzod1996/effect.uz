import React from "react";
import './Header.css'

export default function Header() {
  return (
    <div className="header">
      <div className="input-div">
        <input type="search" placeholder="Search" className="input-search" />
        <button>
          <i className="bx bx-search" />
        </button>
      </div>

      <div className="carrency-container">
        <div>
          USD = 108917,93
          <i className='bx bxs-chevron-down'></i>
        </div>

        <div>
          EUR = 12651,93
          <i className='bx bxs-chevron-down'></i>
        </div>

        <div>
          RUB = 190,93
          <i className='bx bxs-chevron-up'></i>
        </div>
      </div>
    </div>
  );
}
