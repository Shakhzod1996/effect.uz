import React from 'react';
import Header from '../Header/Header';
import "./Takliflar.css"

export default function Takliflar() {
  return (
    <div className="takliflar">
      <Header />
      <div className='takliflar-header'>
        <h2>O'z takliflariz va arizalaringizni qoldirishingiz mumkin</h2>
      </div>

      <form className='form-takliflar'>
      <div className="izoh-qoldirish-text">
            <input
              type="text"
              className="input_comment"
              placeholder="Enter your name"
            />
            <textarea
              name="text"
              placeholder="Enter your suggestions here..."
            ></textarea>
          </div>
      </form>
    </div>
  )
}
