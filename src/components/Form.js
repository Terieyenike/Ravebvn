import React from 'react'

const Form = props => (
  <form onSubmit={props.getBvn} style={{ marginBottom: '2rem'}}>
    <input type='text' name="details" className = "form__input" />
    <button className="form__button">Search</button>
  </form>
)

export default Form
