import React, { Component } from 'react'
import './App.css'

import Form from './components/Form'
import Details from './components/Details'

const SEC_KEY = 'FLWSECK-e6db11d1f8a6208de8cb2f94e293450e-X'

const Bvn_number = '12345678901'

class App extends Component {
  state = {
    data: []
  }
  getBvn = async e => {
    const details = e.target.details.value
    console.log(details)
    e.preventDefault()
    const sec_key = await fetch(
      `https://cors-anywhere.herokuapp.com/https://ravesandboxapi.flutterwave.com/v2/kyc/bvn/${Bvn_number}?seckey=${SEC_KEY}`
    )
    const data = await sec_key.json()
    this.setState({ data: data.data })
    console.log(this.state.data.bvn)
    // console.log(data.data.bvn)
  }

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>BVN Validate</h1>
        </header>
        <Form getBvn={this.getBvn} />
        <Details data={this.state.data} />
      </div>
    )
  }
}

export default App
